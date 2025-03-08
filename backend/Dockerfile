# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the backend will run
EXPOSE 5000

# Command to run the app
CMD ["npm", "run", "dev"]
