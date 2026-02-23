# Storybook dev server for aural-ui-web
# Compatible with Railway: app listens on PORT (injected at runtime); default 6006 for local Docker.
#
# Local:  docker build -t aural-ui-storybook . && docker run -p 6006:6006 aural-ui-storybook
# Railway: connect repo or push; no extra config needed.

FROM node:24-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Copy source and config needed for Storybook
COPY . .

# Generate theme for Storybook (required before starting)
RUN npm run theme-storybook

# PORT: default for local Docker; Railway overrides this at runtime.
ENV PORT=6006
EXPOSE 6006

# Set in image so Railway start command doesn't need "NODE_ENV=production" (avoids "executable not found" when run without a shell)
ENV NODE_ENV=production
# Disable Storybook telemetry in container/Railway
ENV STORYBOOK_DISABLE_TELEMETRY=true

# Run via shell so Railway's start command (e.g. "NODE_ENV=production npm run ...") is executed correctly
ENTRYPOINT ["sh", "-c"]
CMD ["npm run storybook:serve"]

# Health check uses runtime PORT so Railway (and local) can verify the server is up
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:' + (process.env.PORT || 6006), (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"
