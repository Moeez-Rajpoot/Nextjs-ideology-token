"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo2.svg";
import ball from "../../public/assets/Vector2.svg";
import { Lato, Space_Grotesk } from "next/font/google";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppindark = Poppins({
  weight: "600",
  style: "italic",
  subsets: ["latin"],
});
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Section4() {
    const [input1, setInput1] = useState("0");
    const [input2, setInput2] = useState("0");
  return (
    <div className=" h-fit lg:h-screen w-full bg-[#01091c] flex flex-col lg:flex-row justify-center items-center ">
      <div
        id="left"
        className="w-full lg:w-1/2 bg-[#01091c] relative flex flex-col justify-center items-center"
      >
        <div
          id="image"
          className="h-[370px] w-full flex justify-center mr-28 mt-8"
        >
          <Image src={ball} alt="Vector ball" />
        </div>
        <div className=" w-52 absolute lg:bottom-14 lg:right-48">
          <Image src={logo} alt="Picture of the author"></Image>
        </div>
      </div>

      <div
        id="right"
        className="w-full lg:w-1/2 bg-[#01091c] flex flex-col justify-center "
      >
        <div className=" h-[80%] w-full lg:w-[70%] xl:ml-10 flex flex-col text-center lg:text-left">
          <p
            className={` w-full text-center text-[#829fe1] text-md mt-5 mb-5 sm:text-xl lg:text-left ${lato.className}`}
          >
            Powered by Crypto.com
          </p>
          <h2
            className={`text-nowrap  text-[#829fe1] text-xl sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className} `}
          >
            Stake with Ideaology
          </h2>

          <div className="text-[#829FE2] mt-10 flex flex-col gap-5 ">
            <label className="text-sm" htmlFor="">
              How much you want to stake with us?
            </label>

            <input
                onMouseEnter={() => {setInput2("I")}}
                onMouseLeave={() => {setInput2("0")}}
              className="input-field mx-auto lg:ml-0 px-4 py-3 w-[90%] sm:w-[60%] lg:w-[80%] rounded-lg border-none outline-none bg-[#0b172f] text-[#829FE2]"
              type="text"
              placeholder={input2}
            />

            <label className="text-sm" htmlFor="">
              Select preferable time period for staking?
            </label>

            <div className={`${poppins.className} flex gap-10 mx-auto lg:mx-0 text-sm`}>
              <option
                className=" border-b-[1px] border-transparent hover:border-b-[1px] hover:border-b-[#829fe1] hover:cursor-pointer pb-2 w-16"
                value="30"
              >
                30 Days
              </option>
              <option
                className="border-b-[1px] border-transparent hover:border-b-[1px] hover:border-b-[#829fe1]  hover:cursor-pointer pb-2 w-16"
                value="30"
              >
                90 Days
              </option>
              <option
                className="border-b-[1px] border-transparent hover:border-b-[1px] hover:border-b-[#829fe1]  hover:cursor-pointer pb-2 w-16"
                value="30"
              >
                180 Days
              </option>
            </div>

            <label className={`${poppins.className}`} htmlFor="">
              Your Reward?{" "}
              <span className={`${poppindark.className}`}> (20%) </span>
            </label>

            <input
              onMouseEnter={() => {setInput1("I")}}
                onMouseLeave={() => {setInput1("0")}}
              className="input-field mx-auto lg:ml-0 px-4 py-3 w-[90%] sm:w-[60%] lg:w-[80%] rounded-lg border-none outline-none bg-[#0b172f] text-[#829FE2]"
              type="text"
              placeholder={input1}
            />

            <div>
              <button
                className={`mt-5 text-sm ${poppins.className} mb-5 lg:mb-0  rounded-full bg-[#0b70bc] hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-10 py-4 `}
              >
                Start Staking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}