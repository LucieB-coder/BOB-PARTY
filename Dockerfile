FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /bob_party

COPY ["bob_party/package.json", "bob_party/package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "npm", "run", "web" ]


FROM mysql:8:0

COPY ./create.sql /docker-entrypoint-initdb.d/