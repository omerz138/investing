
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN npm install && npm run build

EXPOSE 5000

CMD [ "npm", "start"]