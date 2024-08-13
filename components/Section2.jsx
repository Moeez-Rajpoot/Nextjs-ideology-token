"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import trendline from "../public/assets/trendline.svg";
import Vector from "../public/assets/Vector.svg";
import { Lato, Space_Grotesk } from "next/font/google";
import { Poppins } from "next/font/google";
import kucoin from "../public/assets/kucoin.svg";
import coingeeko from "../public/assets/coingeeko.svg";
import coinmarketcap from "../public/assets/coinmarketcap.svg";
import Wheel from "../public/assets/wheel.svg";
import gateio from "../public/assets/gateio.svg";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const poppinlight = Poppins({ weight: "400", subsets: ["latin"] });
export default function Section2() {
  return (
    <div className="h-screen lg:h-[120vh] w-screen bg-[#01091c] relative">
      <div className="flex flex-col md:flex-row  items-center">
        {" "}
        {/* Upper Section */}
        <div className=" w-screen lg:w-1/3 lg:ml-40 h-fit lg:h-60  flex flex-col lg:justify-center">
          <p className={`  w-full text-[#829fe1] mt-10 lg:mt-0 text-md sm:text-xl text-center  md:pr-9 ${lato.className}`}>
            Powered by Crypto.com
          </p>
          <h2
            className={`text-center text-nowrap text-[#829fe1] text-md sm:text-[40px] sm:pl-4 mt-1 font-semibold ${spaceGrotesk.className} `}
          >
            Get your IDEA
          </h2>
        </div>
        <div className=" sm:z-10 flex items-center w-full h-fit md:h-60 overflow-hidden">
          <motion.div
            animate={{
              x: [820, -500, 820],
            }}
            transition={{
              duration: 12,
              ease: "easeOut",
              repeat: Infinity,
              delay: 0.5,
            }}
            className="h-1/2 w-full mt-8 md:mt-5 flex gap-14 items-center"
          >
            <Image alt="Icons" src={gateio} height={150} width={150}></Image>

            <Image
              alt="Icons"
              src={coinmarketcap}
              height={200}
              width={200}
            ></Image>

            <Image alt="Icons" src={kucoin} height={150} width={150}></Image>

            <Image alt="Icons" src={coingeeko} height={150} width={150}></Image>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <hr className=" w-1/2 opacity-10  " />
      </div>

      <div className="h-fit flex justify-center items-center ">
        {" "}
        {/* Lower Section */}
        <div
          id="card"
          className=" flex flex-col items-center rounded-3xl z-10 h-fit lg:mt-20 pb-2 w-[300px] md:w-[420px] backdrop-blur-sm md:backdrop-blur-md "
        >
          <div className="flex justify-center mt-14 gap-3 items-center">
            <Image
              className="h-16"
              alt="icon"
              src={Wheel}
              height={100}
              width={100}
            ></Image>
            <h2
              className={`${spaceGrotesk.className} text-[#829fe1] tracking-wider text-xl font-semibold text-center mr-7`}
            >
              Ideology IDEA
            </h2>
          </div>

          <Image className="mt-7 h-6" alt="trendline" src={trendline}></Image>

          <div className="flex justify-center gap-2 items-center mt-7">
            <p
              className={`text-[#829fe1] ${poppins.className} text-[30px] text-center`}
            >
              $+60,400
            </p>
            <span
              className={`text-[#46c735] ${poppinlight.className} text-[20px] text-center`}
            >
              +695
            </span>
          </div>

          <button className="mt-16 rounded-full bg-[#0b70bc] hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-10 py-4 sm:mr-4">
            Explore
          </button>
        </div>
      </div>

      <div className="absolute top-44 md:top-80 md:left-[29.5%] z-0 ">
        <Image src={Vector} alt="Vector" height={260} width={260}></Image>
      </div>
    </div>
  );
}
