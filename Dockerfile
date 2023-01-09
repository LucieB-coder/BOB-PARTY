FROM mysql:latest

RUN chown -R mysql:root /var/lib/mysql/

ENV MYSQL_DATABASE=from_secret: MYSQL_DATABASE
ENV MYSQL_USER=from_secret: MYSQL_USER_TOM
ENV MYSQL_PASSWORD=from_secret: MYSQL_PASSWORD_TOM
ENV MYSQL_ROOT_PASSWORD=from_secret: MYSQL_ROOT_PASSWORD

ADD bobParty.sql bobParty.sql

RUN sed -i 's/MYSQL_DATABASE/'$MYSQL_DATABASE'/g' bobParty.sql
RUN cp bobParty.sql /docker-entrypoint-initdb.d

EXPOSE 3036