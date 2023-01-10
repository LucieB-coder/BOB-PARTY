#!/bin/bash
set -e
service mysql start
mysql < /mysql/bobParty.sql
service mysql stop