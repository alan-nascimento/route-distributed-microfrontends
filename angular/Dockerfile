# Building app
FROM node:lts-alpine as build

WORKDIR /usr/app

COPY . .

RUN npm ci --silent
RUN npm run build

# Starting NGINX server
FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/app/dist/angular /usr/share/nginx/html
