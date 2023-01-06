FROM mysql:latest

RUN chown -R mysql:root /var/lib/mysql/

ARG MYSQL_ROOT_PASSWORD

ENV MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD

COPY bobParty.sql /docker-entrypoint-initdb.d

EXPOSE 3306