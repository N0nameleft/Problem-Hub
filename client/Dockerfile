# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# copy the rest of the files
COPY ./ ./

# Expose the port the app runs on
EXPOSE 3000

# Build the app
RUN npm run build

# Define a command to run the app
CMD ["npm", "start"]