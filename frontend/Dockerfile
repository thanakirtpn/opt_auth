# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm ci
COPY frontend ./
COPY .env.production .env
RUN npm run build

# Stage 2: Serve
FROM node:22-alpine AS runner

WORKDIR /frontend
RUN npm install -g http-server
COPY --from=builder /frontend/dist .
EXPOSE 5173
CMD ["http-server", ".", "-p", "5173"]