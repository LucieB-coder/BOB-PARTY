FROM php:8.0-apache

CMD [ "chmod", "755", "start-apache"]
CMD [ "ls", "-l"]
COPY api-rest/start-apache /usr/local/bin

# Copy application source
COPY * /var/www/html/
RUN chown -R www-data:www-data /var/www/html

#CMD ["start-apache"]