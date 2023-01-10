FROM mysql:latest

COPY setup.sh /mysql/setup.sh
COPY bobParty.sql /mysql/bobParty.sql

RUN chmod +x /mysql/setup.sh

TEST

RUN /mysql/setup.sh