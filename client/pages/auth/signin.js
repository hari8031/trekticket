import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import animationData from "../../assets/hero-bg-animation-2.json";
import Lottie from "lottie-react";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <div className="flex flex-col justify-center items-center m-3 ">
      <Lottie
        style={{ objectFit: "contain", zIndex: 1 }}
        animationData={animationData}
      />
      <h1 className=" text-2xl font-bold my-3">Sign in to TrekTicket</h1>
      <form className="w-full max-w-[400px] my-3" onSubmit={onSubmit}>
        <div className="flex flex-col my-3">
          <label className=" font-medium">Enter your email</label>
          <input
            type="text"
            className=" border-gray-300 border-2 rounded-lg h-14 px-5 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          <label className=" font-medium">Password</label>
          <input
            type="password"
            className=" border-gray-300 border-2 rounded-lg h-14 px-5 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors}
        <button className=" bg-orange-500 text-white h-14 w-full rounded-full my-3 hover:bg-orange-400 transition duration-300 ease-in-out">
          SignIn
        </button>
        <div className="flex justify-center">
          <span>Don't have an account? <a href="/auth/signup">Sign up</a></span>
        </div>
      </form>
    </div>
  );
};
