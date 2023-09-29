const Discover = () => {
  return (
    <div>
      <h1 className=" text-5xl font-bold text-center m-10">
        Discover what’s next
      </h1>
      <div className=" flex gap-10 flex-wrap justify-center">
        <div className=" min-w-[250px] min-h-[200px] max-w-[400px] bg-white rounded">
          <div className="text-black flex flex-col items-start gap-5 m-5">
            <h2 className="text-black text-1xl font-bold text-center ">
              MUSIC FESTIVALS
            </h2>
            <p className="text-black text-3xl font-bold">
              Genre Trends at America's Biggest Music Festivals
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className=" min-w-[250px] min-h-[200px] max-w-[400px] bg-white rounded">
          <div className="text-black flex flex-col items-start gap-5 m-5">
            <h2 className="text-black text-1xl font-bold text-center mt-3">
              NCAA FOOTBALL
            </h2>
            <p className="text-black text-3xl font-bold">
              The Most Popular NCAA Football Teams by County
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className=" min-w-[250px] min-h-[200px] max-w-[400px] bg-white rounded">
          <div className="text-black flex flex-col items-start gap-5 m-5">
            <h2 className="text-black text-1xl font-bold text-center mt-3">
              ALL CONCERTS
            </h2>
            <p className="text-black text-3xl font-bold">
              2024 Concert Tours: Predicting the Top 2024 Concerts and Tours
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
