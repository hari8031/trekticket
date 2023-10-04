import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import animationData from "../../assets/hero-bg-animation.json";
import Lottie from "lottie-react";

export default () => {
  const [otp, setOtp] = useState("")

  const { doRequest, errors } = useRequest({
    url: "/api/users/verify-otp",
    method: "post",
    body: {
      otp
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };
 

  return (
    <div className="flex justify-around items-center m-24 ">
      <div className="hidden lg:block w-[500px]">
        <Lottie
          style={{ objectFit: "contain", zIndex: 1 }}
          animationData={animationData}
        />
      </div>
      <form className="w-full max-w-[400px] mb-3" onSubmit={onSubmit}>
        <h1 className=" text-2xl font-bold my-3">Verify your Otp</h1>
        <div className="flex flex-col my-3">
          <label className=" font-medium">Enter your Otp here</label>
          <input
            type="otp"
            className=" border-gray-300 border-2 rounded-lg h-14 px-5 text-black"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        {errors}
        <button className=" bg-blue-600 text-white h-14 w-full rounded-full my-3 hover:bg-blue-400 transition duration-300 ease-in-out">
          SignUp
        </button>
        <div className="flex justify-center">
          <span>
            Already have an account? <a href="/auth/signin">Sign In</a>
          </span>
        </div>
      </form>
    </div>
  );
};
