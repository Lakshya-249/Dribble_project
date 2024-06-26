import React from "react";
import Logintemplate from "./registerTemplate";

const Home = () => {
  return (
    <div className="flex flex-wrap w-full h-full max-sm:space-y-0">
      <div className="w-[35%] max-sm:w-full max-sm:bg-cover max-sm:h-auto text-left h-full p-10 bg-[url('./assets/vase.jpg')] bg-contain bg-no-repeat">
        <h1 className="text-white font-[Forte] text-[1.8rem] mb-8 font-light">
          dribble
        </h1>
        <h1 className="text-white text-opacity-50 font-sans text-[4rem] max-sm:text-[3rem] font-extrabold">
          Discover the world's Top Designers and Creactives
        </h1>
      </div>
      <div className="flex justify-end w-[65%] max-sm:w-full max-sm:h-auto h-full px-8 py-5">
        <Logintemplate />
      </div>
    </div>
  );
};

export default Home;
