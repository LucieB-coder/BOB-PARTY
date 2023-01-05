FROM php:8.0-apache

COPY 000-default.conf api-rest/000-default.conf
COPY start-apache /usr/local/bin
RUN chmod 755 start-apache
RUN a2enmod rewrite

# Copy application source
COPY api-rest /var/www/
RUN chown -R www-data:www-data /var/www

CMD ["start-apache"]