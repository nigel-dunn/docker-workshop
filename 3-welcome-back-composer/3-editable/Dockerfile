ARG PHP_VERSION=7.2
FROM php:${PHP_VERSION}-cli

ENV COMPOSER_ALLOW_SUPERUSER true

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install git zip -y

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

WORKDIR /app/


