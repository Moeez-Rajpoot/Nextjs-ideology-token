"use client";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Section1bar() {
  return (
    <div
      className={`${spaceGrotesk.className} uppercase text-xl text-nowrap flex justify-center items-center h-16 w-screen right-0 bg-[#0C71BC] border-[#092550]`}
    >
      <motion.p
        
        animate={{
          x: [500 , -400  , 500],
        }}
        transition={{
          duration: 12,
          ease: "easeOut",
          repeat: Infinity,
          delay: 0.5,
        }}
        className="text-white font-light"
      >
        Quarter 2 Projects Ready for Launch | Manialands Promo Video Released |
        Ideaology CEO Live on Space | New Blockchain Integrations Announced |
        Freelancer Platform Updates Coming Soon
      </motion.p>
    </div>
  );
}
