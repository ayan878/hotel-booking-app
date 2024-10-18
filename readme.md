to setup typescript with express and node

npm init

make sure main to ./src/index.ts or /index.ts

"main":"./src/index.ts"
"scripts": {
    "dev": "nodemon",
  },
npm install express mongoose cors mongodb dotenv
npm install  -D typescript ts-node-dev @types/express @types/cors

configure tsconfig.json

npx tsc --init