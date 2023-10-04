import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new Otp
interface OtpAttrs {
  email: string;
  otp: number;
}

// An interface that describes the properties
// that an Otp Model has
interface OtpModel extends mongoose.Model<OtpDoc> {
  build(attrs: OtpAttrs): OtpDoc;
}

// An interface that describes the properties
// that an Otp Document has
interface OtpDoc extends mongoose.Document {
  email: string;
  otp: number;
}

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: Number,
    createdAt: {
      type: Date,
      expires: 120, // Expires documents after 120 seconds (2 minutes)
      default: Date.now,
    },
  },
  
);

otpSchema.statics.build = (attrs: OtpAttrs) => {
  return new Otp(attrs);
};

const Otp = mongoose.model<OtpDoc, OtpModel>("Otp", otpSchema);

export { Otp };
