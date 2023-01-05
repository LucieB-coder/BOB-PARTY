FROM php:8.0-apache

CMD [ "chmod", "755", "start-apache"]
COPY api-rest/start-apache /usr/local/bin
CMD [ "ls", "/usr/local/bin"]

# Copy application source
COPY api-rest/* /var/www/html/
RUN chown -R www-data:www-data /var/www/html

#CMD ["start-apache"]