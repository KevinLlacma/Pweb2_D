FROM ubuntu:20.04

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y apache2

CMD ["apache2ctl","-D","FOREGROUND"]