import { Lato, Space_Grotesk } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
import project1 from "../../public/assets/blog1.svg";
import project2 from "../../public/assets/blog2.svg";
import project3 from "../../public/assets/blog3.svg";
import Card from "./Card";
export default function Section8() {
  return (
    <div className="h-fit lg:h-screen bg-[#01091c]  w-full">
      <div className=" w-screen h-fit  flex flex-col items-center">
        {/* Upper Heading Section */}
        <p
          className={` w-full mt-10 text-[#829fe1] text-md sm:text-xl text-center ${lato.className}`}
        >
          Powered by Crypto.com
        </p>
        <h2
          className={`text-center text-nowrap text-[#829fe1] text-md sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className} `}
        >
          Our Blogs
        </h2>
      </div>

      {/* Lower Image Section */}
      <div className="w-full h-full flex flex-col mt-10 sm:mt-0 lg:flex-row gap-5 justify-center items-center ">
        <Card
          image={project1}
          headtext="Quarter 2 Projects Ready for Launch"
          content="May 13,2024"
        />
        <Card
          image={project2}
          headtext="Manialands Promo Video Released"
          content="May 16,2024"
        />
        <Card
          
          image={project3}
          headtext="Ideaology CEO Live on Space"
          content="Apirl 13,2024"
        />
      </div>
    </div>
  );
}
