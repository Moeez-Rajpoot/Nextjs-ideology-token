import { Lato, Space_Grotesk } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
import project1 from "../../public/assets/product1.svg";
import project2 from "../../public/assets/product2.svg";
import project3 from "../../public/assets/product3.svg";
import Card from "./Card";
export default function Section3({ head }) {
  return (
    <div className="h-fit lg:h-screen bg-[#01091c] w-full">
      <div className=" w-screen h-fit  flex flex-col items-center">
        {/* Upper Heading Section */}
        <p
          className={` w-full text-[#829fe1] mt-10 lg:mt-0 text-md sm:text-xl text-center ${lato.className}`}
        >
          Powered by Crypto.com
        </p>
        <h2
          className={`text-center text-nowrap text-[#829fe1] text-md sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className} `}
        >
          {head}
        </h2>
      </div>

      {/* Lower Image Section */}
      <div className="w-full h-full flex flex-col mt-10  lg:flex-row gap-5 justify-center items-center ">
        <Card
          image={project1}
          headtext="WorkAsPro"
          content="Discover a Decentralized Ecosystem for a Connected World. WorkAsPro connects top blockchain freelancers with leading..."
        />
        <Card
          image={project2}
          headtext="Manialands"
          content="Manialands is a dynamic metaverse platform where users can create, explore, and profit from digital experiences..."
        />
        <Card
          
          image={project3}
          headtext="Network"
          content="A blockchain network is a secure, decentralized system for recording and verifying transactions..."
        />
      </div>
    </div>
  );
}
