FROM debian:stretch

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
    apt-get upgrade && \
    apt-get install php-cli -y && \
    apt-get install curl -y

ENV COMPOSER_ALLOW_SUPERUSER true

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

WORKDIR /app/

ENTRYPOINT ["php", "-a"]
