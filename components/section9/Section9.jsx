"use client";
import { useState } from "react";
import { Space_Grotesk, Lato, Poppins } from "next/font/google";
import Vector from "../../public/assets/Vector.svg";
import Image from "next/image";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const lato = Lato({ weight: "300", subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });
export default function Section9() {
  const [input1, setInput1] = useState("Your email");
  return (
    <div className="h-screen flex flex-col lg:flex-row justify-center items-center lg:h-[62vh] bg-[#020b1e]">
      <div className="relative  mt-5  lg:mt-28 w-[90%] lg:w-[80%] rounded-tr-[2.5rem] rounded-tl-[2.5rem] bg-[#030e26]  lg:h-80 overflow-hidden">
        <div className="h-fit lg:h-56 w-[53%] mt-9 mx-auto lg:ml-10">
          <h1
            className={`${spaceGrotesk.className} text-[#829FE2] text-center lg:text-left xl:mt-16  text-2xl lg:text-[40px] font-semibold lg:pl-4`}
          >
            Get more updates
          </h1>

          <p className={`${lato.className} text-[#93aff1] text-sm lg:text-xl text-center lg:text-left lg:mt-6 lg:pl-4 lg:pr-10`}>
            Join our mailing list to stay in the loop with our newest feature
            releases, crypto staking, trips and tricks.
          </p>

          <div className="flex flex-col lg:flex-row gap-2 xl:gap-0 justify-center items-center lg:items-start ">
            <input
              onMouseEnter={() => {
                setInput1("I");
              }}
              onMouseLeave={() => {
                setInput1("Your email");
              }}
              className={` input-field text-sm md:ml-4 xl:ml-3 lg:ml-4  px-6  mt-7 py-4 w-[170%] sm:w-[100%] lg:w-[67%] xl:w-[69%] rounded-lg border-none outline-none bg-[#0b172f] placeholder:text-[#829FE2] text-[#829FE2] ${poppins.className} `}
              type="text"
              placeholder={input1}
            />

            <button
              className={`mt-3 lg:mt-6 text-sm ${poppins.className} mb-5  xl:ml-3 text-nowrap lg:ml-1 lg:mb-0 h-14  rounded-full bg-[#0b70bc] hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-10 py-2 `}
            >
              Start Staking
            </button>
          </div>
        </div>
        <Image
          className="h-[100%] lg:h-[180%] float-right -mt-72 -mr-24 w-fit"
          src={Vector}
          alt="vector"
        ></Image>
      </div>
    </div>
  );
}
