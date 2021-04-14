FROM node:lts-alpine as run-stage
RUN apk update
WORKDIR /app
COPY .env /app
COPY package.json /app/
COPY package-lock.json /app/
COPY babel.config.js /app/
COPY vue.config.js /app/
COPY src /app/src/

EXPOSE 80

FROM run-stage as build-stage
WORKDIR /app
RUN npm install
RUN npm run build

# production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]