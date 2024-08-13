import { Lato, Space_Grotesk, Poppins } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });
import Image from "next/image";
import ball from "../../public/assets/Vector2.svg";
import done from "../../public/assets/Done.svg";

export default function Section6() {
  return (
    <div className="h-fit lg:h-screen w-full bg-[#01091c]  relative">
      <div className="w-screen h-fit pt-5 lg:pt-14 flex flex-col items-center">
        <p
          className={`w-full text-[#829fe1] text-md sm:text-xl text-center ${lato.className}`}
        >
          IDEOLOGY
        </p>
        <h2
          className={`text-center text-nowrap z-10 text-[#829fe1] text-xl sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className}`}
        >
          IDEA Network 3.0
        </h2>
      </div>



      <div className="absolute h-[300px] top-20 -left-14 blur-sm">
        <Image src={ball} alt="Vector ball" className="h-full w-full" />
      </div>

      <div className="absolute top-20 bg-[#01091c] blur-md h-[97vh] w-screen">
       
      </div>

      <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 filter-none  w-[80%] mx-auto h-[57%] z-10 relative">
        {/* Card 1 */}
        <div className="flex mt-14 ">
          <div id="image">
            <Image src={done} alt="Done" className="h-10 w-16"></Image>
          </div>
          <div id="section6content" className="lg:ml-2">
            <h1
              className={`${spaceGrotesk.className} -ml-5 lg:-ml-0  text-[24px] -mt-2 font-semibold text-[#7F9ED0]`}
            >
              Layer-2 Chain Integrations
            </h1>
            <p
              className={`${poppins.className} text-sm mt-2 ml-4 lg:ml-0 pr-10 text-[#7F9ED0]`}
            >
              Provides enhanced speed and efficiency with layer-2 solutions for
              scalable and cost-effective blockchain operations
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex mt-14 ">
          <div id="image">
            <Image src={done} alt="Done" className="h-10 w-16"></Image>
          </div>
          <div id="section6content" className="lg:ml-2">
            <h1
              className={`${spaceGrotesk.className} text-[24px] -ml-5 lg:-ml-0 -mt-2 font-semibold text-[#7F9ED0]`}
            >
              Cross-Chain Compatibility
            </h1>
            <p
              className={`${poppins.className} text-sm mt-2 ml-3 lg:ml-0 pr-10 text-[#7F9ED0]`}
            >
              Enables seamless interoperability between different blockchain
              networks, allowing smooth transactions across chains.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex mt-10 lg:mt-0 ">
          <div id="image">
            <Image src={done} alt="Done" className="h-10 w-16"></Image>
          </div>
          <div id="section6content" className="lg:ml-1">
            <h1
              className={`${spaceGrotesk.className} text-[24px] -ml-5 lg:-ml-0 -mt-2 font-semibold text-[#7F9ED0]`}
            >
              DeFi Access
            </h1>
            <p
              className={`${poppins.className} text-sm ml-3 lg:ml-0 mt-2 pr-10 text-[#7F9ED0]`}
            >
              Offers users opportunities in decentralized finance, such as
              lending and borrowing, directly on the network.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex mt-10  lg:mt-0">
          <div id="image">
            <Image src={done} alt="Done" className="h-10 w-16"></Image>
          </div>
          <div id="section6content" className="ml-0">
            <h1
              className={`${spaceGrotesk.className} text-[24px] px-4 lg:px-0 -ml-5 lg:-ml-0 -mt-2 font-semibold text-[#7F9ED0]`}
            >
              Stablecoin Availability
            </h1>
            <p
              className={`${poppins.className} text-sm ml-53 lg:ml-0 mt-2 pr-10 text-[#7F9ED0]`}
            >
              Supports stablecoins for transactions, offering a reliable and
              stable form of digital currency.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex mt-10 lg:mt-0 ">
          <div id="image">
            <Image src={done} alt="Done" className="h-10 w-16"></Image>
          </div>
          <div id="section6content" className="ml-0">
            <h1
              className={`${spaceGrotesk.className} text-[24px] -ml-5 px-4 lg:px-0 lg:-ml-0 -mt-2 font-semibold text-[#7F9ED0]`}
            >
              Application Rewards and Redemption
            </h1>
            <p
              className={`${poppins.className} text-sm ml-3 lg:ml-0 mt-2 pr-10 text-[#7F9ED0]`}
            >
              Rewards users for participating in the network, creating an
              engaging and incentivized ecosystem.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex mt-10 lg:mt-0">
          <div id="image">
            <Image src={done} alt="Done" className="h-10 w-16"></Image>
          </div>
          <div id="section6content" className="lg:ml-1">
            <h1
              className={`${spaceGrotesk.className} text-[24px] px-4 lg:px-0 -ml-5 lg:-ml-0 -mt-2 font-semibold text-[#7F9ED0]`}
            >
              Application Rewards and Redemption
            </h1>
            <p
              className={`${poppins.className} text-sm ml-3 lg:ml-0 mt-2 pr-10 text-[#7F9ED0]`}
            >
              Rewards users for participating in the network, creating an
              engaging and incentivized ecosystem.
            </p>
          </div>
        </div>
      </div>

      <button
        className={` z-10 relative mt-10 lg:mt-4 text-sm ${poppins.className} flex mx-auto mb-5 lg:mb-0  rounded-full bg-[#0b70bc] hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-10 py-4 `}
      >
        Explore more
      </button>
    </div>
  );
}
