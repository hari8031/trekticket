import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("hii there!");
});

export { router as currentUserRouter };
