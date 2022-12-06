RUN -sonar-scanner.bat -D"sonar.projectKey=BobParty" -D"sonar.sources=." -D"sonar.host.url=https://codefirst.iut.uca.fr/sonar"


FROM mysql:8.0

RUN chown -R mysql:root /var/lib/mysql/

ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_ROOT_PASSWORD

ENV MYSQL_DATABASE=$MYSQL_DATABASE
ENV MYSQL_USER=$MYSQL_USER
ENV MYSQL_PASSWORD=$MYSQL_PASSWORD
ENV MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD

ADD data.sql create.sql

RUN sed -i 's/MYSQL_DATABASE/'$MYSQL_DATABASE'/g' create.sql
RUN cp create.sql /docker-entrypoint-initdb.d