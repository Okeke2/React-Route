import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const changeLocation = () => {
    navigate("/signup");
  };
  return (
    <div className="h-full w-full bg-gray-500 flex items-center justify-center flex-col gap-3">
      <h1 className="text-5xl text-white font-mono">Welcome to my page</h1>
      <p className="text-white">
        Your home for Quality wears and Products. We give you only the best, if
        it is not original, solid, perfect and quality then it is not TONADELL
      </p>

      <section className="space-x-2">
        <button
          onClick={changeLocation}
          className="bg-blue-500 text-white px-5 py-2"
        >
          Get Started
        </button>
        <button className="bg-white text-blue-500 px-5 py-2">Learn More</button>
      </section>
    </div>
  );
}

export default Home;
