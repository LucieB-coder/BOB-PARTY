FROM mysql:latest

COPY setup.sh /mysql/setup.sh
COPY bobParty.sql /mysql/bobParty.sql

RUN /mysql/setup.sh