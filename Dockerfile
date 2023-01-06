FROM mysql:latest

#RUN chown -R mysql:root /var/lib/mysql/

ENV MYSQL_ROOT_PASSWORD=root

COPY bobParty.sql /docker-entrypoint-initdb.d

#EXPOSE 3306