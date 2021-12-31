const express = require("express");
const swaggerDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Swagger API",
      description: "Swagger API Information",
      contact: {
        name: "Siddharth",
      },
      servers: ["http://localhost:3000"],
    },
  },
  apis: ["./app.js"],
};
const swaggerDocs = swaggerDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Routes
/**
 * @swagger
 * /:
 *  get:
 *    description: Use ti get request
 *    responses:
 *      '200':
 *        description: You will get hello world
 */

app.get("/", (req, res) => {
  res.send("Hello World");
});
/**
 * @swagger
 * /hello:
 *  get:
 *    description: Use to second get request
 *    responses:
 *      '200':
 *        description: You will second get hello world
 */
app.get("/hello", (req, res) => {
  res.send("Second Hello World");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
