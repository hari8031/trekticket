import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@hkticket/common";

import { currentUserRouter } from "./routes/current-user";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { verifyOtpRouter } from "./routes/verify-otp";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUserRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(verifyOtpRouter)

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
