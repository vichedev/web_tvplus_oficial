# Etapa de build
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx vite build

# Etapa de producción
FROM nginx:alpine

# Crear usuario y grupo no-root
RUN addgroup -g 1001 -S guallinet && \
    adduser -S -D -H -u 1001 -s /bin/sh -G guallinet guallinet

# Configurar nginx para usuario no-root
RUN mkdir -p /tmp/nginx && \
    chown -R guallinet:guallinet /var/cache/nginx /tmp/nginx && \
    chmod -R 755 /var/cache/nginx /tmp/nginx

# Copiar configuraciones PRIMERO
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copiar build del frontend
COPY --from=build --chown=guallinet:guallinet /app/dist /usr/share/nginx/html

# Cambiar a usuario no-root
USER guallinet

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]