FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

# ❌ No need to install @tailwindcss/postcss anymore
RUN npm install -D tailwindcss postcss autoprefixer

COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
