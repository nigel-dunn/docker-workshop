FROM debian:stretch

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
    apt-get upgrade && \
    apt-get install apache2 -y

EXPOSE 80

ENTRYPOINT ["apache2ctl", "-DFOREGROUND"]
