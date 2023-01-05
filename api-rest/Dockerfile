FROM php:8.0-apache

COPY apir-rest/start-apache /usr/local/bin
RUN chmod 755 start-apache

# Copy application source
COPY api-rest/* /var/www/html
RUN chown -R www-data:www-data /var/www/html

CMD ["start-apache"]