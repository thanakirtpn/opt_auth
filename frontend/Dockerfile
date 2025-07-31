# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /frontend

# ✅ แก้ตรงนี้
COPY frontend/package*.json ./

# ✅ ติดตั้ง dependencies (รวม vite แล้ว เพราะอยู่ใน dependencies)
RUN npm install

# ✅ คัดลอก source code ที่เหลือเข้ามา
COPY frontend/ ./
COPY .env.production .env

RUN npm run build

# Stage 2: Serve
FROM node:22-alpine AS runner

WORKDIR /frontend
RUN npm install -g http-server

COPY --from=builder /frontend/dist ./
EXPOSE 5173
CMD ["http-server", ".", "-p", "5173"]
