import Image from "next/image";
import Vector from "../../../public/assets/Vector.svg";
import MobFull from "../../../public/assets/fullmob.svg";
import { Space_Grotesk ,Poppins } from "next/font/google";
const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"] , weight: ["300"] });
export default function Section1() {
  return (
    <div className="h-fit sm:h-[50vh] lg:h-[70vh] w-full bg-[#01091c] relative ">
      <Image
        src={Vector}
        alt="Picture of the author"
        className="h-56 float-right mr-28 mt-20 blur-md"
      ></Image>

      <Image
        src={MobFull}
        alt="Picture of the author"
        className="absolute h-72 lg:h-96 xl:h-96 sm:top-[19px]  lg:top-[45px] xl:top-[105px] sm:-right-20 lg:right-10  xl:right-28 lg:bottom-0"
      ></Image>

      <div
        id="workcontent"
        className={`${space_Grotesk.className}  h-full w-full sm:w-[30%] lg:w-[50%] flex items-center`}
      >
        <div className="ml-10 lg:ml-20  h-auto pt-8 lg:pl-20   ">
          <h1 className={`${space_Grotesk.className} text-4xl lg:text-7xl font-bold text-[#BED1FE] `}>Workaspro</h1>

          <p className={`${poppins.className} text-[#7F9ED0] mt-5 pr-5 lg:pr-28 text-sm mb-10 lg:mb-0 lg:text-lg tracking-tight`}>
            The leading crypto marketplace on platform home to the next
            generation of digital creators.
          </p>
        </div>
      </div>
    </div>
  );
}
