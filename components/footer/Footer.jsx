import Logo from "../../public/assets/logo.svg";
import footer from "../../public/assets/footer.svg";
import facebook from "../../public/assets/Facebook.svg";
import instagram from "../../public/assets/instagram.svg";
import youtube from "../../public/assets/youtube.svg";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const poppinlight = Poppins({ weight: "300", subsets: ["latin"] });
export default function Footer() {
  return (
    <div className=" h-fit lg:h-[85vh] w-full bg-[#000717] flex flex-col  items-center">
      <div className="w-full lg:w-[60%] flex flex-col lg:flex-row items-center lg:items-start  mt-28 lg:mr-5 h-72">
        {/* text div */}
        <div className="w-full lg:w-1/3 flex justify-center ">
          <Image src={Logo} alt="logo" className="h-12 w-36"></Image>
        </div>
        <div className="w-full lg:w-1/3 mt-5 lg:mt-0  flex justify-center ">
          <Image src={footer} alt="logo" className="h-12 w-36"></Image>
        </div>
        <div className="w-full lg:w-1/3 mt-3 lg:mt-0  flex flex-col items-center">
          <h3 className={`mt-2 ${poppins.className} text-[#879cce] lg:mr-10 `}>
            NAVIGATION
          </h3>

          <p
            className={`mt-9 w-fit lg:-ml-[33%] text-sm ${poppinlight.className} text-[#879cce] hover:border-b-[1px] hover:border-[#7a91c5] cursor-default  `}
          >
            Docs
          </p>
          <p
            className={`mt-4 w-fit lg:-ml-[28%] text-sm ${poppinlight.className} text-[#879cce] hover:border-b-[1px] hover:border-[#7a91c5] cursor-default `}
          >
            Games
          </p>
          <p
            className={`mt-4 w-fit lg:-ml-[24%] text-sm ${poppinlight.className} text-[#879cce] hover:border-b-[1px] hover:border-[#7a91c5] cursor-default `}
          >
            Mainlads
          </p>
          <p
            className={`mt-4 w-fit lg:-ml-[18%] text-sm ${poppinlight.className}  text-[#879cce] hover:border-b-[1px] hover:border-[#7a91c5] cursor-default`}
          >
            Work as Pro
          </p>
        </div>
      </div>

      <div className="border-b-[1px] w-[90%] h-fit opacity-5  border-white">
        {/* border div */}
      </div>

      <div className=" flex flex-col items-center w-full mt-5 h-40">
        {/* icons div */}
        <div className="flex h-fit w-[20%] justify-center gap-10 ">
          <Image className="h-8 w-8  mt-12 " src={instagram} alt="logo"></Image>

          <Image className="h-8 w-8  mt-12 " src={youtube} alt="logo"></Image>

          <Image className="h-8 w-8  mt-12 " src={facebook} alt="logo"></Image>
        </div>
        <p className={`${poppinlight.className} text-sm mt-8 text-[#7F9ED0]`}>
          {" "}
          COPYRIGHT © 2024 • IDEAOLOGY{" "}
        </p>
      </div>
    </div>
  );
}
