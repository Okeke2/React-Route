import React, { useState } from "react";
import bulbOff from "./assets/bulb-off.jpg";
import bulbOn from "./assets/bulb-on.jpg";

const Bulb = () => {
  const [pic, setPicture] = useState(`${bulbOff}`);
  const switchOn = () => {
    if (pic === `${bulbOff}`) {
      setPicture(`${bulbOn}`);
    }
  };

  const switchOff = () => {
    if (pic === `${bulbOn}`) {
      setPicture(`${bulbOff}`);
    }
  };

  return (
    <>
      <main className="flex py-5 w-screen h-screen justify-center items-center">
        <div className="w-[33vw]"></div>
        <div className="w-[19vw]">
          <img src={pic} alt="" srcSet="" />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-300 h-[18vh] rounded-md p-3 border-[3px] border-gray-700 mt-14">
          <button
            className="p-1 w-[5vw] h-[6vh] rounded-sm border-[3px] border-gray-700"
            onClick={switchOn}
          >
            On
          </button>
          <button
            className="p-1 w-[5vw] h-[6vh] rounded-sm border-[3px] border-gray-700"
            onClick={switchOff}
          >
            Off
          </button>
        </div>
      </main>
    </>
  );
};

export default Bulb;
