FROM php:8.0-apache

RUN apt update && apt install mysql-server -y

COPY api-rest/start-apache /usr/local/bin 
RUN chmod 755 /usr/local/bin/start-apache

# Copy application source
ADD api-rest /var/www/html/ 
RUN chown -R www-data:www-data /var/www/html

CMD ["start-apache"]
