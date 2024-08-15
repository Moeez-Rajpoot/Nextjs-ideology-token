"use client";
import { Lato, Space_Grotesk, Poppins } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });
import { motion } from "framer-motion";

import Image from "next/image";
import Gif from "../../public/assets/movingback.gif";
import icons from "../../public/assets/Icons.svg";
import bgLogo from "../../public/assets/bgLogo.svg";
import Animation from "../../public/assets/Animation.svg";

export default function Section7() {
  return (
    <div className="h-fit bg-[#01091c] lg:h-[130vh] pb-10 relative">
      <div className="absolute w-full h-full top-0 left-0 z-0 outline-none border-none">
        <Image
          className="object-top w-full h-full blur-md"
          src={Gif}
          alt="Gif"
        />
      </div>
      <div className="w-screen h-fit flex flex-col pt-10 lg:mt-0 items-center z-10 relative">
        <p
          className={`w-full text-[#829fe1] lg:mt-14 text-md sm:text-xl text-center ${lato.className}`}
        >
          Powered by Crypto.com
        </p>
        <h2
          className={`text-center text-nowrap text-[#829fe1] text-md sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className}`}
        >
          Features
        </h2>
      </div>
      <div className=" w-full flex flex-col lg:flex-row h-full z-10 relative">
        <div id="left" className=" hidden lg:block w-[40%]">
          <div id="image" className="lg:mt-40 xl:mt-60 h-72 ml-48 w-72">
            <Image src={icons} alt="icons"></Image>
          </div>
          <div className="absolute h-fit left-[24%] xl:left-[20%] top-[45%] rounded-full border-none outline-none  backdrop-blur-md">
            <Image className="h-24 w-64" src={bgLogo} alt="bgLogo" />
          </div>

          <p className="absolute hidden xl:block left-[31%] top-[40%] tracking-widest text-[#162c60] ">
            ---------------------------
          </p>
          <p className="absolute hidden lg:block xl:hidden left-[38%] top-[41.5%] tracking-widest text-[#162c60] ">
            --------------------
          </p>
        </div>

        <div id="right" className=" w-full  lg:w-[60%]">
          <div className="absolute hidden lg:block lg:left-[57.7%] xl:left-[50%] lg:top-[21%] xl:top-[22%] border-[#162c60] h-32 w-fit border-r-2 border-dashed"></div>

          <div className="absolute hidden lg:block lg:left-[57.7%] xl:left-[50%] lg:bottom-[34%] xl:bottom-[38%] border-[#162c60] h-32 w-fit border-r-2 border-dashed"></div>

          <div className=" flex flex-col gap-[50px] lg:gap-[50px]  xl:gap-[90px] overflow-y-scroll hide-scrollbar lg:mx-auto xl:ml-20 mt-10 w-full lg:w-[60%] h-fit lg:h-[75%]">
            {/* Card 1 */}
            <div className=" w-[80%] sm:w-[50%] lg:w-[80%] mt-3 min-h-36 lg:ml-8 flex flex-col mx-auto lg:flex-row justify-center items-center lg:justify-start gap-5">
              <motion.div
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    delay: 2,
                  },
                }}
                id="icon"
                className="flex justify-center items-center"
              >
                <Image src={Animation} alt="icons" className="h-20 w-20 z-20" />
              </motion.div>

              <div className="border-l-8 border-r-8 lg:border-r-0  w-full lg:w-[70%] px-10 py-5 lg:py-0 h-full border-[#93aefd] backdrop-blur-xl rounded-3xl">
                <h2
                  className={`${spaceGrotesk.className} text-4xl text-[#829fe1] font-bold ml-1 mt-7`}
                >
                  Q1
                </h2>
                <li
                  className={`${poppins.className} text-[#829fe1] text-sm mt-2 ml-2`}
                >
                  WorkAsPro
                </li>
                <li
                  className={`${poppins.className} text-[#829fe1] text-sm ml-2`}
                >
                  Stacking
                </li>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[80%] sm:w-[50%] lg:w-[80%] min-h-40 lg:ml-8 flex flex-col mx-auto lg:flex-row justify-center items-center lg:justify-start gap-5">
              <motion.div
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    delay: 2,
                  },
                }}
                id="icon"
                className="flex justify-center items-center"
              >
                <Image src={Animation} alt="icons" className="h-20 w-20 z-20" />
              </motion.div>

              <div className="border-l-8 border-r-8 lg:border-r-0 w-full lg:w-[70%] px-10 py-5 lg:py-0 h-full border-[#93aefd] backdrop-blur-xl rounded-3xl">
                <h2
                  className={`${spaceGrotesk.className} text-4xl text-[#829fe1] font-bold ml-1 mt-7`}
                >
                  Q2
                </h2>
                <li
                  className={`${poppins.className} text-[#829fe1] text-sm mt-2 ml-2`}
                >
                  Manialands
                </li>
                <li
                  className={`${poppins.className} text-[#829fe1] text-sm ml-2`}
                >
                  IDO Wallets
                </li>
                <li
                  className={`${poppins.className} text-[#829fe1] text-sm ml-2`}
                >
                  IDEA Network
                </li>
              </div>
            </div>

            {/* Card 3 */}
            <div className=" w-[80%] sm:w-[50%] lg:w-[80%] min-h-40 lg:ml-8 flex flex-col mx-auto lg:flex-row justify-center items-center lg:justify-start gap-5">
              <motion.div
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    delay: 2,
                  },
                }}
                id="icon"
                className="flex justify-center items-center"
              >
                <Image src={Animation} alt="icons" className="h-20 w-20 z-20" />
              </motion.div>

              <div className="border-l-8 border-r-8 lg:border-r-0 w-full lg:w-[70%] px-10 py-5 lg:py-0 h-full border-[#93aefd] backdrop-blur-xl rounded-3xl">
                <h2
                  className={`${spaceGrotesk.className} text-4xl text-[#829fe1] font-bold ml-1 mt-7`}
                >
                  Q3
                </h2>
                <li
                  className={`${poppins.className} text-[#829fe1] text-nowrap text-sm mt-2 ml-2`}
                >
                  NFT Staking Platform
                </li>
                <li
                  className={`${poppins.className} text-[#829fe1] text-nowrap  text-sm ml-2`}
                >
                  Play to Earn Mobile
                </li>
                <li
                  className={`${poppins.className} text-[#829fe1] text-nowrap text-sm ml-2`}
                >
                  IDEA GPT
                </li>
              </div>
            </div>

            {/* Card 4 */}
            <div className=" w-[80%] sm:w-[50%] lg:w-[80%] mb-10 lg:mb-0 min-h-40 lg:ml-8 flex flex-col mx-auto lg:flex-row justify-center items-center lg:justify-start gap-5">
              <motion.div
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    delay: 2,
                  },
                }}
                id="icon"
                className="flex justify-center items-center"
              >
                <Image src={Animation} alt="icons" className="h-20 w-20 z-20" />
              </motion.div>

              <div className="border-l-8 border-r-8 lg:border-r-0 w-full lg:w-[70%] px-10 py-5 lg:py-0 h-full border-[#93aefd] backdrop-blur-xl rounded-3xl">
                <h2
                  className={`${spaceGrotesk.className} text-4xl text-[#829fe1] font-bold ml-1 mt-7`}
                >
                  Q4
                </h2>
                <li
                  className={`${poppins.className} text-[#829fe1] text-sm mt-2 ml-2`}
                >
                  Trust Spotr
                </li>
                <li
                  className={`${poppins.className} text-[#829fe1] text-sm ml-2`}
                >
                  Real 8 Ball Pool
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
