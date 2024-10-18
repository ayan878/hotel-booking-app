Here’s a Markdown guide to setting up a TypeScript project with Express and Node.js:

```markdown
# Setting Up TypeScript with Express and Node.js

This guide will walk you through the process of setting up a TypeScript project using Express and Node.js.

## Step 1: Initialize the Project

First, create a new directory for your project and navigate into it. Then run the following command to initialize your Node.js project:

```bash
npm init -y
```

## Step 2: Configure the `package.json`

Make sure to set the `main` entry point to `./src/index.ts` and add a `dev` script for development:

```json
{
  "main": "./src/index.ts",
  "scripts": {
    "dev": "nodemon"
  }
}
```

## Step 3: Install Required Packages

Install Express, Mongoose, CORS, MongoDB, and Dotenv:

```bash
npm install express mongoose cors mongodb dotenv
```

Install TypeScript and its related types as development dependencies:

```bash
npm install --save-dev typescript ts-node-dev @types/express @types/cors
```

## Step 4: Configure TypeScript

Initialize TypeScript in your project by creating a `tsconfig.json` file:

```bash
npx tsc --init
```

You can customize the `tsconfig.json` file according to your needs. A basic configuration might look like this:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Step 5: Create Your Project Structure

Create the necessary folders and files:

```bash
mkdir src
touch src/index.ts
```

## Step 6: Write Your First TypeScript Code

Open `src/index.ts` and add the following sample code:

```typescript
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Step 7: Run Your Application

You can now run your application using the following command:

```bash
npm run dev
```

This will start the server and watch for changes in your TypeScript files.

## Conclusion

You have successfully set up a TypeScript project with Express and Node.js. From here, you can continue to build out your application by adding routes, middleware, and connecting to a MongoDB database as needed.
```

Feel free to customize any parts as needed for your project!