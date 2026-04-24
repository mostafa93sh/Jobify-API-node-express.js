require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");
const mongoose = require("mongoose");
const authMiddleware = require("./middleware/authentication");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// extra packages
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/jobs/", authMiddleware, jobsRouter);

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    mongoose.connect(`${process.env.MONGO_URI}`);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
