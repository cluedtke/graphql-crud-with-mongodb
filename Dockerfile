FROM node:latest

WORKDIR /usr/src/app/graphqlApp
COPY package.json /usr/src/app/graphqlApp/

RUN npm install

EXPOSE 4000

ENTRYPOINT [ "nodejs", "server" ]
