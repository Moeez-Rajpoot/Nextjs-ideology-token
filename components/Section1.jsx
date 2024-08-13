import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Section1() {
  return (
    <>
      <div className="h-screen -mt-10 flex flex-col justify-center items-center w-full bg-[url('../public/assets/back.png')] bg-cover bg-center">
        <h1
          className={` text-4xl sm:text-7xl sm:mt-14 font-semibold text-[#BED1FE] ${spaceGrotesk.className} leading-none tracking-tight text-center`}
        >
          Empowering The Future <br /> With Blockchain
        </h1>

        <button className="mt-16 rounded-full bg-[#0b71bc] hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-10 py-4 sm:mr-4">
          Explore
        </button>

        
      </div>
    </>
  );
}
