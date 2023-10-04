class OTPGenerator {
  private length: number;
  private chars: string;

  constructor(length: number = 6, chars: string = "0123456789") {
    this.length = length;
    this.chars = chars;
  }

  generate(): string {
    let otp = "";
    for (let i = 0; i < this.length; i++) {
      otp += this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    return otp;
  }
}

export { OTPGenerator };

