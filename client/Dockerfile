# Create image based on the official Node image from dockerhub
FROM node:alpine
# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app
# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app
# Copy dependency definitions
COPY package.json /usr/src/app
# Get all the code needed to run the app
COPY . /usr/src/app
# Install dependecies and build
RUN npm install
RUN npm install -g @angular/cli@9.1.6
# Expose the port the app runs in
EXPOSE 4200
# Serve the app
CMD ["npm", "start"]