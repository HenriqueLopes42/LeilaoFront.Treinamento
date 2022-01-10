FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/projeto-leilao-matutino /usr/share/nginx/html
