FROM alpine

RUN apk update \
    && apk add lighttpd \
    && rm -rf /var/cache/apk/*
COPY ./index.html /var/www/localhost/htdocs
COPY ./styles.css /var/www/localhost/htdocs

CMD ["lighttpd","-D","-f","/etc/lighttpd/lighttpd.conf"]