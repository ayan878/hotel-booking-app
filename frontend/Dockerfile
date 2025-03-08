# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the port that Vite runs on (default is 5173)
EXPOSE 5173

# Run the Vite development server
CMD ["npm", "run", "dev"]
