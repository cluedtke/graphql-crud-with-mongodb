FROM node:latest
WORKDIR /app
ENV PORT=4000
COPY . .
EXPOSE $PORT
ENTRYPOINT [ "npm", "start" ]
