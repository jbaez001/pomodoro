# builder
ARG TAG=16-alpine
FROM node:$TAG as builder

WORKDIR /app

COPY . .

RUN cd /app && \
    yarn && \
    yarn build

# deployment
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
