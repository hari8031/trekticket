import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest, BadRequestError } from "@hkticket/common";
import nodemailer from "nodemailer";

import { OTPGenerator } from "../utils/otp/genarator";
import { Otp } from "../models/otp";
import { User } from "../models/user";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("fullname").isLength({ min: 1 }).withMessage("Fullname is required"),
    body("rollno").isNumeric().withMessage("Rollno must be a number"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    try {
      const { email, fullname, rollno } = req.body;
      const otpGenerator = new OTPGenerator();
      const otp = parseInt(otpGenerator.generate());

      const findExistingEmail = await Otp.findOne({ email });

      if (findExistingEmail) {
        throw new BadRequestError("Otp already genarated for this email");
      }

      req.session = { email };

      //Otp temporary saving to mongodp it will auto delete after 2 min
      const userotp = Otp.build({ email, otp });
      await userotp.save();

      const fetchUser = await User.findOne({ email });
      console.log("fetchusert", fetchUser);

      if (fetchUser === null) {
        const newUser = User.build({ email, fullname, rollno });
        console.log(newUser);
        await newUser.save();
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "cardstudent030@gmail.com",
          pass: "aaiw gbhs wohr ajpt",
        },
      });

      var mailOptions = {
        from: "cardstudent030@gmail.com",
        to: email,
        subject: `Otp for registration is: ${otp}`,
        html:
          "<h3>OTP for account verification is </h3>" +
          "<h1 style='font-weight:bold;'>" +
          otp +
          "</h1>", // html body
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      res.send();
    } catch (error: any) {
      console.log(error);
    }
  }
);

export { router as signupRouter };
