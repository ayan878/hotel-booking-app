Here's a refined version of your **README.md** file for setting up a TypeScript + Express app with Swagger UI for API documentation.

---

# Backend

### Setup TS + Express

To set up a TypeScript and Express project with automatic API documentation using Swagger, follow these steps:

---

### 1. Initialize Your Project

First, create a new directory for your project and initialize it with npm.

```bash
mkdir ts-express-app
cd ts-express-app
npm init -y
```

### 2. Install Dependencies

You’ll need a few packages for Express, TypeScript, and necessary types for TypeScript support, as well as Swagger-related packages.

```bash
npm install express
npm install --save-dev typescript @types/node @types/express ts-node swagger-jsdoc swagger-ui-express
```

- `express`: The web framework.
- `typescript`: The TypeScript compiler.
- `@types/node`: Type definitions for Node.js.
- `@types/express`: Type definitions for Express.
- `ts-node`: A TypeScript execution engine for Node.js.
- `swagger-jsdoc`: Used to generate Swagger docs from JSDoc comments.
- `swagger-ui-express`: A middleware for serving Swagger UI for API docs.

### 3. Set Up TypeScript Configuration

Next, create a `tsconfig.json` file in the root of your project to configure TypeScript.

```bash
npx tsc --init
```

Modify the `tsconfig.json` as follows:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 4. Set Up Project Structure

Create the following directories and files:

```bash
mkdir src
touch src/index.ts
```

### 5. Write the Express App

In `src/index.ts`, add the following code to create a simple Express app:

```typescript
import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swaggerConfig';

const app = express();
const port = 3000;

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript and Express!');
});

// Serve Swagger API documentation using Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### 6. Add Scripts to `package.json`

To make running the app easier, add the following scripts to your `package.json` file:

```json
{
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

- `dev`: Runs the app with `ts-node` for development.
- `build`: Compiles TypeScript into JavaScript in the `dist` folder.
- `start`: Starts the compiled JavaScript app.

### 7. Run the App in Development Mode

Run the app in development mode using `ts-node`:

```bash
npm run dev
```

This should start the server, and you can visit `http://localhost:3000` to see the response "Hello, TypeScript and Express!".

### 8. Compile TypeScript and Run in Production Mode (Optional)

When you're ready for production or want to build your app, run:

```bash
npm run build
npm start
```

This will compile the TypeScript code into the `dist` folder and run the JavaScript code in `dist/index.js`.

---

### Run It with Nodemon (for Automatic Restarts During Development)

To run your TypeScript and Express project with `nodemon` for automatic restarts during development, follow these steps:

#### 1. Install `nodemon`

First, install `nodemon` as a development dependency:

```bash
npm install --save-dev nodemon
```

#### 2. Configure `nodemon` for TypeScript

You need to tell `nodemon` how to handle TypeScript files. Create or update a `nodemon.json` file in the root of your project with the following content:

```json
{
  "exec": "ts-node src/index.ts",
  "watch": ["src"],
  "ext": "ts"
}
```

#### 3. Update Your `package.json` Scripts

Update your `scripts` section in `package.json` to include a `dev` script that uses `nodemon`:

```json
{
  "scripts": {
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

#### 4. Run with `nodemon`

Now, you can start the app with `nodemon` using:

```bash
npm run dev
```

This will automatically start your TypeScript Express app and restart the server whenever you make changes to any `.ts` file in the `src` directory.

---

### Setup Swagger UI for API Documentation

#### 1. Install Swagger UI and Swagger-jsdoc

```bash
npm install swagger-jsdoc swagger-ui-express
```

#### 2. Create the Swagger Configuration File (`swaggerConfig.ts`)

Create a new file `src/swaggerConfig.ts` to configure Swagger.

```typescript
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  // Basic metadata about your API
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js API with Swagger Docs',
      version: '1.0.0',
      description: 'API documentation for the Node.js app',
    },
    servers: [
      {
        url: 'http://localhost:3000', // API server URL
      },
    ],
  },
  // Path to the API routes for generating documentation
  apis: ['./src/routes/*.ts'], // Adjust the path to your route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export { swaggerSpec };
```

#### 3. Annotate Routes with JSDoc Comments

Add the following Swagger annotations in your route files. Here's an example route file (`src/routes/helloRoute.ts`):

```typescript
/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Get a hello world message
 *     responses:
 *       200:
 *         description: A hello world message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Hello, World!'
 */
import express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

export default router;
```

#### 4. Set Up Swagger UI in Your Express Server (`src/index.ts`)

Update your `src/index.ts` to serve the Swagger UI documentation:

```typescript
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swaggerConfig'; // Import swaggerSpec

const app = express();
const port = 3000;

// Serve Swagger API documentation using Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Sample route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

---

### Folder Structure

Your project structure should look like this:

```
ts-express-app/
├── node_modules/
├── src/
│   ├── routes/
│   │   └── helloRoute.ts
│   ├── swaggerConfig.ts
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
└── package-lock.json
```

---

### Access Swagger UI

Once the server is running, visit `http://localhost:3000/api-docs` to see the Swagger UI with your API documentation.

---

### Summary

In this guide, you have learned how to set up a TypeScript and Express app with:

- TypeScript configuration for Node.js
- Swagger documentation using `swagger-jsdoc` and `swagger-ui-express`
- Automatic server restarts with `nodemon`

This setup provides a structured development environment with automatic API documentation that updates as you modify your routes.

### Docker 

Implementing Docker in a **MERN (MongoDB, Express, React, Node.js)** Hotel Booking app can help you easily containerize your application, making it easy to deploy across various environments. Below are the steps to implement Docker for your MERN stack application.

### Steps to Implement Docker for a MERN Hotel Booking App

#### 1. **Install Docker**

Make sure Docker is installed on your system. If it's not installed, follow the installation guide for your operating system:

- [Docker Install Guide](https://docs.docker.com/get-docker/)

#### 2. **Create Dockerfiles for Each Service**

You'll need separate `Dockerfile` for the backend (Node.js with Express) and frontend (React) services. You might also need a `docker-compose.yml` file to manage the containers together (for MongoDB, Express, React, and Node.js).

---

### Backend (`Node.js + Express`)

#### Create a `Dockerfile` for the backend (`backend/Dockerfile`):

```Dockerfile
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
```

Explanation:
- We're using the official Node.js image for Alpine Linux, which is lightweight.
- The `WORKDIR` sets the working directory inside the container.
- We copy `package.json` and `package-lock.json` to install dependencies.
- The app is started with `npm run dev` (assuming you are running `ts-node` or similar for development mode).

---

### Frontend (`React`)

#### Create a `Dockerfile` for the frontend (`frontend/Dockerfile`):

```Dockerfile
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

```

Explanation:
- We use `node:18-alpine` as a lightweight image.
- Install dependencies and build the React app.
- The `serve` package is used to serve the production build of the React app.

---

### MongoDB (`docker-compose`)

Instead of writing a custom `Dockerfile` for MongoDB, we can use the official MongoDB Docker image in `docker-compose.yml`.

---

### 3. **Create Docker Compose File**

`docker-compose.yml` will allow you to easily orchestrate the containers for your backend, frontend, and MongoDB.

Create a `docker-compose.yml` file at the root of your project:

```yaml
version: '3'

services:
  # Backend Service
  backend:
    build:
      context: ./backend
    container_name: hotel-booking-backend
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/hotel-booking
    depends_on:
      - mongo
    networks:
      - hotel-booking-network

  # Frontend Service
  frontend:
    build:
      context: ./frontend
    container_name: hotel-booking-frontend
    ports:
      - "3000:3000"
    networks:
      - hotel-booking-network
    depends_on:
      - backend

  # MongoDB Service
  mongo:
    image: mongo:latest
    container_name: hotel-booking-mongo
    ports:
      - "27017:27017"
    networks:
      - hotel-booking-network
    volumes:
      - mongo-data:/data/db

networks:
  hotel-booking-network:
    driver: bridge

volumes:
  mongo-data:
    driver: local
```

Explanation:
- **Backend**: The `backend` service is built using the `Dockerfile` from the `backend/` folder. It depends on the `mongo` service and connects to it via the `MONGO_URI` environment variable.
- **Frontend**: The `frontend` service is built from the `frontend/` folder and will serve the React app on port `3000`. It depends on the `backend` service.
- **MongoDB**: The `mongo` service uses the official MongoDB image and stores data in a Docker volume (`mongo-data`).
- The `networks` section ensures all services can communicate with each other.

---

### 4. **Create `.dockerignore` Files**

To avoid copying unnecessary files into the Docker containers, create `.dockerignore` files in both the `frontend` and `backend` directories.

#### In `frontend/.dockerignore`:

```
node_modules
build
.dockerignore
Dockerfile
README.md
```

#### In `backend/.dockerignore`:

```
node_modules
dist
.dockerignore
Dockerfile
README.md
```

---

### 5. **Environment Variables**

Add environment variables for MongoDB and other configurations, especially sensitive data like API keys, to ensure smooth operation across different environments.

For example, create a `.env` file in your `backend/` directory for the backend:

```
MONGO_URI=mongodb://mongo:27017/hotel-booking
PORT=5000
```

Make sure to load environment variables in your app using the `dotenv` package in Node.js:

```bash
npm install dotenv
```

And at the top of your `backend/index.ts`, add:

```typescript
import dotenv from 'dotenv';
dotenv.config();
```

---

### 6. **Run the Application with Docker Compose**

Once you have your Dockerfiles and `docker-compose.yml` set up, you can build and run the application with Docker Compose.

From the root directory of your project, run the following command:

```bash
docker-compose up --build
```

This command:
- Builds the Docker images for the frontend, backend, and MongoDB services.
- Starts the containers based on the images.
- You can visit `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.

To stop the application, use:

```bash
docker-compose down
```

This stops and removes all the containers but retains the volumes.

---

### 7. **Accessing the Application**

- **Frontend**: Open `http://localhost:3000` in your browser to access the React application.
- **Backend**: Open `http://localhost:5000` to access the Node.js backend API (e.g., `http://localhost:5000/api/hello`).

---

### Folder Structure

After setting up Docker, your folder structure should look like this:

```
hotel-booking-app/
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
├── frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── src/
│   ├── package.json
│   └── public/
├── docker-compose.yml
└── .gitignore
```

---

### Summary

1. **Backend**: Create a `Dockerfile` to containerize your Node.js app and expose it on port 5000.
2. **Frontend**: Create a `Dockerfile` to build the React app and serve it using `serve` on port 3000.
3. **MongoDB**: Use the official `mongo` image in `docker-compose.yml`.
4. **Docker Compose**: Use `docker-compose.yml` to orchestrate all services (backend, frontend, and MongoDB).
5. **.dockerignore**: Prevent unnecessary files from being copied into Docker images.
6. **Run**: Use `docker-compose up --build` to build and run the app in Docker.

By following these steps, you have successfully containerized your MERN hotel booking app using Docker.


# Frotend
-  install vite `npm create vite@latest .`
-  tailwind css  `npm install tailwindcss @tailwindcss/vite` 
