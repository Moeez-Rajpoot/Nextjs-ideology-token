
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lato, Space_Grotesk } from "next/font/google";
import { Poppins } from "next/font/google";
import kucoin from "../../../public/assets/kucoin.svg";
import coingeeko from "../../../public/assets/coingeeko.svg";
import coinmarketcap from "../../../public/assets/coinmarketcap.svg";
import gateio from "../../../public/assets/gateio.svg";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
export default function Slider() {
  return (
    <div className='h-fit w-screen bg-[#01091c] relative'>
              <div className="flex flex-col md:flex-row  items-center">
        {" "}
        {/* Upper Section */}
        <div className=" w-screen lg:w-1/3 lg:ml-[120px] h-fit lg:h-60  flex flex-col lg:justify-center">
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
            className="h-1/2 w-full mt-5 md:mt-5 flex gap-14 items-center"
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

      <div className='w-[90%] h-[0.5px] mx-auto ' style={{ background: 'linear-gradient(90deg, #01091C 0%, #0F224F 50%, #01091C 100%)' }}></div>
      </div>
      
  )
}
