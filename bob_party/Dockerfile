FROM node:latest

# Create app directory

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY bob_party/package*.json ./

RUN hostname -I

RUN yarn

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY bob_party/server.js .

EXPOSE 3000

CMD [ "node", "server.js" ]