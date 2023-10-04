import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest, requireAuth } from "@hkticket/common";
import { Otp } from "../models/otp";
import { User } from "../models/user";
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post(
  "/api/users/verify-otp",
  [
    body("otp")
      .isNumeric()
      .isLength({ min: 5, max: 6 })
      .withMessage("Otp must be 6 digit"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    try {
      const { otp } = req.body;
      const email = req.session?.email;
      const serverOtp = await Otp.findOne({ email });
      console.log(serverOtp?.otp);
      
      if (otp == serverOtp?.otp) {
        const user = await User.findOne({ email });
        console.log("user234",user);
        
        const userJwt = jwt.sign(
          {
            id: user?.id,
            email: user?.email,
          },
          process.env.JWT_KEY!
        );

        // Store it on session object
        req.session = {
          jwt: userJwt,
        };
        
        console.log(req.session);
        

        res.status(201).send(user);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export { router as verifyOtpRouter };
