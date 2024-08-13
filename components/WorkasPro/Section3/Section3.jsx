import { Lato, Space_Grotesk, Poppins } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export default function Section3() {
  return (
    <div className="h-fit xl:h-screen bg-[#01091c] w-full">
      <div className=" w-screen h-fit pt-10 pl-10 lg:pt-[100px] lg:pl-[150px]  flex flex-col items-start">
        {" "}
        {/* Upper Heading Section */}
        <p
          className={` w-full text-[#829fe1] mt-10 lg:mt-0 text-lg sm:text-xl  ${lato.className}`}
        >
          Powered by Crypto.com
        </p>
        <h2
          className={`text-center text-nowrap text-[#829fe1] text-lg sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className} `}
        >
          Introduction to WorkAsPro
        </h2>
        <p
          className={` text-[#829fe1] mt-10 lg:mt-0 text-xs w-[87%] sm:text-sm  ${poppins.className}`}
        >
          WorkAsPro is the largest blockchain-based online marketplace for
          freelance work of any kind. Profit from your expertise by teaching it
          to our group of buyers. You can find work on WorkAsPro if you are a
          graphic designer, programmer, content writer, translator, or
          voice-over artist. The good news is that you can complete your
          transaction in cryptocurrency. If you are interested in selling on
          WorkAsPro, read for some helpful tips.
        </p>
        <h3
          className={`text-center text-nowrap text-[#829fe1] text-lg sm:text-[28px] mt-4 font-semibold ${spaceGrotesk.className} `}
        >
          How to Join WorkAsPro
        </h3>
        <p
          className={` text-[#829fe1] pt-2 lg:mt-0 text-xs w-[87%] sm:text-sm  ${poppins.className}`}
        >
          Here is a step-by-step guide on how to sign up, log in, create your
          profile, apply for a job, and navigate the tool for interacting with
          clients and products.
        </p>
        <h3
          className={`text-center text-nowrap text-[#829fe1] text-lg sm:text-[28px] mt-3 font-semibold ${spaceGrotesk.className} `}
        >
          Sign Up
        </h3>
        <li
          className={` text-[#829fe1] pt-3 ml-2 lg:mt-0 text-xs w-[87%] sm:text-sm cursor-default ${poppins.className}`}
        >
          On the landing page, you can sign up by selecting{" "}
          <span className="underline cursor-pointer">‘’Join us’’</span>.
        </li>
        <li
          className={` text-[#829fe1] ml-2 lg:mt-0 text-xs w-[87%] sm:text-sm cursor-default  ${poppins.className}`}
        >
          There you can sign up by continuing with Metamask,Google,Facebook or
          LinkedIn. Or, you can add your email address and accept the Terms of
          Use and Privacy Policy.
        </li>
        <li
          className={` text-[#829fe1] ml-2 lg:mt-0 text-xs w-[87%] sm:text-sm cursor-default  ${poppins.className}`}
        >
          Enter your User Name and password and click Join Us Now.
        </li>
        <h3
          className={`text-center text-nowrap text-[#829fe1] text-lg sm:text-[28px] mt-3 font-semibold ${spaceGrotesk.className} `}
        >
          Log in
        </h3>
        <li
          className={` text-[#829fe1] pt-3 ml-2 lg:mt-0 text-xs w-[87%] sm:text-sm cursor-default  ${poppins.className}`}
        >
          Use an Email and password to log in to your account.
        </li>
        <li
          className={` text-[#829fe1] ml-2 lg:mt-0 text-xs w-[87%] sm:text-sm cursor-default  ${poppins.className}`}
        >
          You will then receive a notification to log in successfully
        </li>
      </div>
      <div>
              <button
                className={`mt-[35px] xl:ml-[150px] flex mx-auto text-sm ${poppins.className} mb-5 lg:mb-0  rounded-full bg-[#0b70bc] hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-10 py-4 `}
              >
                Start Staking
              </button>
            </div>
    </div>
  );
}
