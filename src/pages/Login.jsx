import React from "react";
import { Link } from "react-router-dom";
import { FaHandPeace } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import woman from "./Products/woman.png";

function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <section className="flex items-center justify-center h-screen w-[50vw] flex-col gap-5 bg-gray-50">
        <div className="grid gap-1">
          <h1 className="flex font-bold items-center">
            Login <FaHandPeace className="text-yellow-500" />
          </h1>
          <p>How do i get started lorem ipsum dolor at?</p>
        </div>
        <div className="gap-2 h-[18vh] flex items-center justify-center flex-col">
          <button className="bg-[whitesmoke] rounded-full w-[20vw] h-10 border-[1px] border-gray-300 flex items-center justify-center">
            <IoLogoGoogle className="text-red-600 h-70" />
            Sign in with Google
          </button>
          <button className="bg-[whitesmoke] rounded-full w-[20vw] h-10 border-[1px] border-gray-300 flex items-center justify-center">
            <FaFacebook className="text-blue-700 h-70" />
            Sign in with Facebook
          </button>
          <small className="flex items-center justify-around w-[15vw]">
            <div className="w-10 h-0.5 bg-gray-300">.</div>or Log in with Email{" "}
            <div className="w-10 h-0.5 bg-gray-300">.</div>
          </small>
        </div>
        <div className="flex items-start justify-center flex-col">
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email..."
            className="h-[6vh] w-[20vw] outline-none border-[1px] border-gray-400 bg-transparent bg-[whitesmoke] rounded-full hover:border-2 pl-5"
          />
          <p>Password</p>
          <input
            type="text"
            placeholder="Enter your password..."
            className="h-[6vh] w-[20vw] outline-none border-[1px] border-gray-400 bg-transparent bg-[whitesmoke] rounded-full hover:border-2 pl-5"
          />
        </div>
        <div className="flex items-center justify-end w-[20vw]">
          <a href="" className="text-blue-700">
            Forgot Password?
          </a>
        </div>
        <Link className=" text-white" to="/">
          <button className="bg-blue-800 rounded-full w-[20vw] h-10 border-[1px] border-gray-300 flex items-center justify-center ">
            Login
          </button>
        </Link>
      </section>
      <section className="flex items-center justify-center w-[50vw] h-screen bg-purple-400">
        <img src={woman} alt="Woman" className="h-full w-[40vw]" />
      </section>
    </div>
  );
}

export default Login;
