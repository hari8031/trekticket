import Lottie from "lottie-react";
import animationData1 from "../assets/sports.json";
import animationData2 from "../assets/singing.json";
import animationData3 from "../assets/stage.json";
import animationData4 from "../assets/football.json";

Lottie;

const TicketThumbnail = () => {
  return (
    <div className=" flex flex-col gap-5 items-center justify-center m-24">
      <h1 className=" text-5xl font-bold mb-10">
        The events you love.
        <span className=" text-5xl font-bold text-yellow-300">Live.</span>
      </h1>
      <div className=" flex gap-5 flex-wrap justify-center">
        <div className=" w-[210px] bg-white rounded-lg shadow-2xl shadow-gray-700 relative">
          <Lottie
            style={{ objectFit: "contain", zIndex: 1 }}
            animationData={animationData1}
          />
          <span className=" absolute bottom-2 left-2 text-black font-bold">
            MLB
          </span>
        </div>
        <div className=" relative w-[210px] bg-white rounded-lg shadow-2xl shadow-gray-700">
          <Lottie
            style={{ objectFit: "contain", zIndex: 1 }}
            animationData={animationData2}
          />
          <span className="  absolute bottom-2 left-2 text-black font-bold">
            Concert Tickets
          </span>
        </div>
        <div className=" relative w-[210px] bg-white rounded-lg shadow-2xl shadow-gray-700">
          <Lottie
            style={{ objectFit: "contain", zIndex: 1 }}
            animationData={animationData3}
          />
          <span className="  absolute bottom-2 left-2 text-black font-bold">
            NFL
          </span>
        </div>
        <div className=" relative w-[210px] bg-white rounded-lg shadow-2xl shadow-gray-700">
          <Lottie
            style={{ objectFit: "contain", zIndex: 1 }}
            animationData={animationData4}
          />
          <span className=" absolute bottom-2 left-2 text-black font-bold">
            NBA
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketThumbnail;
