# Start from a Node.js base image
FROM node:14

# Python3 is often included in many base images, but let's explicitly install Python3 and pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Create app directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to Docker image
COPY package*.json ./

# Install app dependencies in the Docker image
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Your application listens on port 4000, so you'll expose this port
EXPOSE 4000

# Define the command to run your app (same as `npm start`)
CMD [ "node", "index.js" ]
