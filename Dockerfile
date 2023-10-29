# builder
ARG TAG=20.9-alpine3.18
FROM node:$TAG as builder

WORKDIR /app

COPY . .

RUN cd /app && \
    yarn && \
    yarn build

# deployment
FROM nginxinc/nginx-unprivileged:alpine3.18-perl
COPY --from=builder /app/dist /usr/share/nginx/html
