ARG PHP_VERSION=7.1
FROM php:${PHP_VERSION}-cli

ENV COMPOSER_ALLOW_SUPERUSER true

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

WORKDIR /app/
