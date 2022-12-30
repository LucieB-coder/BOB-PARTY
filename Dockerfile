#RUN -rm -e SONAR_HOST_URL="https://codefirst.iut.uca.fr/sonar" \
#    -e SONAR_LOGIN=sqp_bef6be1353791524d291104c36283e68bfa60655 \
#    -v "bob_party/src" \
#    sonarsource/sonar-scanner-cli


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

ADD bobParty.sql bobParty.sql

RUN sed -i 's/MYSQL_DATABASE/'$MYSQL_DATABASE'/g' bobParty.sql
RUN cp bobParty.sql /docker-entrypoint-initdb.d