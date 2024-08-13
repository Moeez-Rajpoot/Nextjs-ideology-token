"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: {
    scale: 1.1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  closed: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const poppinlight = Poppins({ weight: "300", subsets: ["latin"] });
export default function Card({ image, headtext, content }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className=" w-[250px] h-[300px]   sm:w-[400px] sm:h-[430px] lg:-mt-44 rounded-lg overflow-hidden  hover:cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        id="image"
        className="w-full h-[180px] sm:h-[280px] rounded-tr-lg rounded-tl-lg overflow-hidden"
      >
        <motion.div animate={hover ? "open" : "closed"} variants={variants}>
          <Image alt="Icons" src={image}></Image>
        </motion.div>
      </div>
      <div
        id="imagecontent "
        className="w-full h-[110px] sm:h-[150px] p-3 sm:p-7 rounded-br-lg rounded-bl-lg bg-[#01091c]"
      >
        <h1
          className={`lg:text-2xl text-sm sm:text-lg ${poppins.className} ${
            hover ? "text-[#0C71BC]" : "text-[#829FE2]"
          }`}
        >
          {headtext}
        </h1>
        <p
          className={`text-xs lg:text-sm pt-1 ${poppinlight.className} ${
            hover ? "text-[#7F9ED0]" : "text-[#6784B2]"
          } `}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
