FROM php:8.0-apache

COPY api-rest/start-apache /usr/local/bin 
RUN chmod 755 /usr/local/bin/start-apache

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update && apt-get upgrade -y

# Copy application source
ADD api-rest /var/www/html
RUN chown -R www-data:www-data /var/www/html

CMD ["start-apache"]
