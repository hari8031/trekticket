// Import required modules and libraries
import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

// Create an Express application
const app = express();

app.set("trust proxy", true);
// Middleware for parsing JSON data
app.use(json());
//cookie-session
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

// Register routers for different routes
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

// Handle requests to undefined routes with a Not Found Error
app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

// Use the error handler middleware
app.use(errorHandler);

export { app };
