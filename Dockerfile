# Storybook static build + MCP server (full docs/source for remote MCP).
# Build produces storybook-static/ with manifests; mcp-server.js serves them so
# get-documentation returns full props, snippets, and docs (no "not bundled" message).
#
# Local:  docker build -t aural-ui-storybook . && docker run -p 6006:6006 aural-ui-storybook
# Railway: connect repo or push; no extra config needed.

FROM node:24-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Copy source and config
COPY . .

# Generate theme then build Storybook (produces storybook-static/ with full manifests)
RUN npm run theme-storybook && npm run build-storybook

# PORT: default for local Docker; Railway overrides at runtime.
ENV PORT=6006
EXPOSE 6006

ENV NODE_ENV=production

# Serve static build + MCP from disk so remote MCP gets full docs/source
CMD ["node", "mcp-server.js"]

# Health check uses runtime PORT
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:' + (process.env.PORT || 6006), (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"
