const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");
const showRoute = require("./routes/showRoute");
const bookingRoute = require("./routes/bookingRoute");
const { validateJWTToken } = require("./middleware/authorizationMiddleware");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const path = require("path");
const cookieParser = require("cookie-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

connectDB();

const apiLimiter = rateLimit({
  windowMS: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "http:", "https:"],
      scriptSrc: ["'self'", "http:", "https:"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "'http:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "fonts.gstatic.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(mongoSanitize());
app.use("/bms", apiLimiter);
app.use("/bms/users", userRoute);
app.use("/bms/movies", validateJWTToken, movieRoute);
app.use("/bms/theatres", validateJWTToken, theatreRoute);
app.use("/bms/shows", validateJWTToken, showRoute);
app.use("/bms/bookings", validateJWTToken, bookingRoute);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const publicPath = path.join(__dirname, "../FrontEnd/dist");
app.use(express.static(publicPath));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
