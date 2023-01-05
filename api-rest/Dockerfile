FROM php:8.0-apache

COPY api-rest/start-apache /usr/local/bin
CMD [ "chmod", "755", "api-rest/start-apache"]

# Copy application source
COPY api-rest/* /var/www/html
RUN chown -R www-data:www-data /var/www/html

CMD ["start-apache"]