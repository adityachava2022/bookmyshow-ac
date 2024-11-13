const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "BookMyShow-ac API's",
    version: "1.0.0",
    description: "BookMyShow-ac API's Description",
  },
  servers: [
    {
      url: "/bms/bookings", // Base path for booking-related routes
      description: "Booking routes base path",
    },
    {
      url: "/bms/movies", // Base path for movie-related routes
      description: "Movie routes base path",
    },
    {
      url: "/bms/shows", // Base path for show-related routes
      description: "Show routes base path",
    },
    {
      url: "/bms/theatres", // Base path for theatres routes
      description: "Theatre routes base path",
    },
    {
      url: "/bms/users", // Base path for Users routes
      description: "User routes base path",
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT", // Indicate that it's a JWT
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
