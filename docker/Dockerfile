FROM nginx:alpine

COPY app/ /usr/share/nginx/html/

COPY app/nginx.conf /etc/nginx/conf.d/default.conf
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost || exit 1

EXPOSE 80