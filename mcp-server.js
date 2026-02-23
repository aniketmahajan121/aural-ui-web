#!/usr/bin/env node
/**
 * Serves the Storybook static build and MCP protocol with full docs/source.
 * Manifests are read from the build output (storybook-static/manifests/) so
 * get-documentation returns full props, snippets, and docs for remote MCP clients.
 *
 * Build: npm run build-storybook
 * Run:   node mcp-server.js   (uses PORT env, default 6006)
 */
import { createServer } from "http";
import { readFileSync, existsSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { createStorybookMcpHandler } from "@storybook/mcp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const STATIC_DIR = join(__dirname, "storybook-static");
const PORT = Number(process.env.PORT) || 6006;

function manifestProvider(_request, path) {
  const filePath = join(STATIC_DIR, path.replace(/^\.\//, ""));
  if (!existsSync(filePath)) throw new Error(`Manifest not found: ${filePath}`);
  return Promise.resolve(readFileSync(filePath, "utf8"));
}

const MIME = {
  ".json": "application/json",
  ".js": "application/javascript",
  ".css": "text/css",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
};

function send(res, statusCode, body, contentType = "text/plain") {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(body);
}

function serveStatic(req, res, pathname) {
  if (pathname === "/" || pathname === "") pathname = "/index.html";
  const filePath = join(STATIC_DIR, pathname);
  if (!filePath.startsWith(STATIC_DIR)) {
    send(res, 403, "Forbidden");
    return;
  }
  if (!existsSync(filePath)) {
    send(res, 404, "Not found");
    return;
  }
  try {
    const data = readFileSync(filePath);
    const ext = extname(pathname);
    const contentType = MIME[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (err) {
    send(res, 500, err.message);
  }
}

function nodeRequestToFetchReq(nodeReq) {
  const host = nodeReq.headers.host || "localhost";
  const protocol = nodeReq.headers["x-forwarded-proto"] || "http";
  const url = `${protocol}://${host}${nodeReq.url}`;
  const headers = new Headers();
  for (const [k, v] of Object.entries(nodeReq.headers)) {
    if (v != null) headers.set(k, Array.isArray(v) ? v.join(", ") : String(v));
  }
  return new Promise((resolve, reject) => {
    const chunks = [];
    nodeReq.on("data", (chunk) => chunks.push(chunk));
    nodeReq.on("end", () => {
      const body = chunks.length ? Buffer.concat(chunks) : undefined;
      resolve(new Request(url, { method: nodeReq.method, headers, body }));
    });
    nodeReq.on("error", reject);
  });
}

const handler = await createStorybookMcpHandler({
  format: "markdown",
  manifestProvider,
});

const server = createServer(async (req, res) => {
  const pathname = new URL(req.url || "/", `http://${req.headers.host}`).pathname;

  if (req.method === "POST" && (pathname === "/mcp" || pathname === "/mcp/")) {
    try {
      const request = await nodeRequestToFetchReq(req);
      const response = await handler(request, { format: "markdown", manifestProvider });
      res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
      if (response.body) {
        const reader = response.body.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(Buffer.from(value));
          }
        } finally {
          reader.releaseLock();
        }
      }
      res.end();
    } catch (err) {
      send(res, 500, err.message || "Internal Server Error");
    }
    return;
  }

  serveStatic(req, res, pathname);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Storybook + MCP (full docs/source) at http://0.0.0.0:${PORT}`);
  console.log(`  MCP endpoint: http://0.0.0.0:${PORT}/mcp`);
  console.log(`  Manifests:     http://0.0.0.0:${PORT}/manifests/`);
});
