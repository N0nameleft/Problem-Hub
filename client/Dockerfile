# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /client

# Copy package.json and package-lock.json
COPY package.json .

# Install dependencies
RUN npm install


# copy the rest of the files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app in development mode
CMD ["/bin/sh", "/client/scripts/entrypoint.sh"]