import swaggerJsdoc from "swagger-jsdoc";

// Define the Swagger options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MERN Hotel Booking App",
      version: "1.0.0",
      description: "A hotel booking API documentation using Swagger in Node.js",
    },
    servers: [
      {
        url: `http://localhost:3000`,
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API docs
};

// Generate Swagger specification
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
