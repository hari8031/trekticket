import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center m-24">
      <div className=" max-w-[400px]">
        <h1 className=" text-2xl font-bold">Stay in the know</h1>
        <p>
          Join our email list and be the first to know about exclusive offers,
          the best in live events, and more.
        </p>
      </div>
      <div className=" flex gap-3 max-w-[400px]">
        <input type="text" className="rounded p-3 " placeholder="Email Address" />
        <button className=" rounded p-3 bg-black text-white">Send email</button>
      </div>
    </div>
  );
};

export default ContactForm;
