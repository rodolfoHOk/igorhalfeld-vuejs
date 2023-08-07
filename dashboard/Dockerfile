FROM node:18-alpine as build

WORKDIR /

COPY . .

RUN npm install
ENV NODE_ENV=production
RUN npm run build

FROM nginx:1.25.1-alpine as final

WORKDIR /app

COPY --from=build ./dist /usr/share/nginx/html
