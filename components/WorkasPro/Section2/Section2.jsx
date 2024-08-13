import Image from "next/image";
import halfmob from "../../../public/assets/halfmob.svg";
import { Lato, Space_Grotesk, Poppins } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });
export default function Section2() {
  return (
    <div className="flex flex-col sm:flex-row h-fit lg:h-[70vh] w-full bg-[#090624] ">
      <div id="image" className=" w-full lg:w-[35%]">
        <Image
          src={halfmob}
          alt="Picture of the author"
          className="h-[65%] lg:h-[75%] sm:mt-10 lg:mt-20 lg:ml-16 xl:ml-20"
        ></Image>
      </div>

      <div id="content" className=" w-full sm:w-[75%] lg:w-[65%]">
        <div className=" w-screen mt-10 lg:mt-36 ml-8  h-fit  flex flex-col">
          <p
            className={` w-full text-[#829fe1] text-md sm:text-xl text-left ${lato.className}`}
          >
            Powered by Crypto.com
          </p>
          <h2
            className={` w-full text-nowrap text-[#829fe1] text-xl sm:text-[40px] mt-3 font-semibold text-left  ${spaceGrotesk.className} `}
          >
            Setup your wallet
          </h2>

          <p
            className={`${poppins.className} text-sm pr-14  sm:pr-72 mt-6 w-full  lg:w-[70%] text-[#7F9ED0] `}
          >
            Setting up your wallet is the first step to unlocking the world of
            cryptocurrency. With just a few simple steps, you can securely
            store, send, and receive digital assets. Choose a reliable
            cryptocurrency wallet provider, create your account, and safeguard
            your private keys. Whether you re new to the world of crypto or a
            seasoned investor, setting up your wallet is quick, easy, and
            essential for participating in the future of finance.
          </p>

          <button
            className={`mt-11 w-[80%] sm:w-[20%] lg:w-[12%] text-center text-sm ${poppins.className} mb-5 lg:mb-0  rounded-full bg-[#0b70bc] hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-8 py-4 `}
          >
            Start Staking
          </button>
        </div>
      </div>
    </div>
  );
}
