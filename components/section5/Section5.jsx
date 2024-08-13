"use client";
import { useState } from "react";
import { Lato, Space_Grotesk, Poppins } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });

import Image from "next/image";
import ball from "../../public/assets/Vector2.svg";

export default function Section5() {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  return (
    <div className="h-[200vh] lg:h-screen w-screen bg-gradient-to-t from-[#01091c] via-[#12032c] to-[#01091c]   ">
      <div className="w-screen h-fit flex flex-col items-center">
        <p
          className={`w-full text-[#829fe1] text-md sm:text-xl text-center ${lato.className}`}
        >
          Powered by Crypto.com
        </p>
        <h2
          className={`text-center text-nowrap text-[#829fe1] text-xl sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className}`}
        >
          Features
        </h2>
      </div>

      {/* background image and idea text */}
      <div className="relative">
        <Image
          src={ball}
          alt="Vector ball"
          className="h-[400px] w-full flex justify-center mr-32 mt-32 blur-sm"
        ></Image>

        <h2
          className={`absolute hidden lg:block text-4xl font-semibold text-white top-[42%] right-[47.5%] md:right-[46%]  ${spaceGrotesk.className}`}
        >
          IDEA
        </h2>

        {/* Cards Section */}
        <div className="absolute -top-[22%] left-[10%] w-[80%]  grid grid-cols-1 lg:grid-cols-2 gap-x-64 gap-y-10">
          {/* Card 1 */}
          <div
            onMouseEnter={() => {
              setCard1(true);
            }}
            onMouseLeave={() => {
              setCard1(false);
            }}
            className={`backdrop-blur-sm h-60 p-4 rounded-2xl ${
              card1
                ? "bg-[#0C71BC] text-white py-10 lg:py-14 px-10"
                : "bg-[#100a39a1] flex flex-col justify-center text-center lg:text-left items-center text-[#829fe1]"
            }`}
          >
            {card1 ? (
              <div>
                <h3
                  className={`text-3xl font-semibold ${spaceGrotesk.className}`}
                >
                  Innovative <br /> Ecosystem
                </h3>
                <p className={`text-sm mt-2  ${poppins.className}`}>
                  Complete control over data, assets, and identity on a
                  decentralized virtual world.
                </p>
              </div>
            ) : (
              <h3
                className={`text-3xl text-[#829fe1] font-semibold ${spaceGrotesk.className}`}
              >
                Innovative <br /> Ecosystem
              </h3>
            )}
          </div>

          {/* Card 2 */}
          <div
            onMouseEnter={() => {
              setCard2(true);
            }}
            onMouseLeave={() => {
              setCard2(false);
            }}
            className={`backdrop-blur-sm h-60 p-4 rounded-2xl ${
              card2
                ? "bg-[#0C71BC] text-white py-10 lg:py-14 px-10"
                : "bg-[#100a39a1] flex flex-col justify-center items-center text-center lg:text-left text-[#829fe1]"
            }`}
          >
            {card2 ? (
              <div>
                <h3
                  className={`text-3xl font-semibold ${spaceGrotesk.className}`}
                >
                  Secure and <br /> Trustworthy
                </h3>
                <p className={`text-sm mt-2  ${poppins.className}`}>
                  Complete control over data, assets, and identity on a
                  decentralized virtual world.
                </p>
              </div>
            ) : (
              <h3
                className={`text-3xl text-[#829fe1] font-semibold ${spaceGrotesk.className}`}
              >
                Secure <br />
                and Trustworthy
              </h3>
            )}
          </div>

          {/* Card 3 */}
          <div
            onMouseEnter={() => {
              setCard3(true);
            }}
            onMouseLeave={() => {
              setCard3(false);
            }}
            className={`backdrop-blur-sm h-60 p-4 rounded-2xl ${
              card3
                ? "bg-[#0C71BC] text-white py-10 lg:py-14 px-10"
                : "bg-[#100a39a1] flex flex-col justify-center items-center text-center lg:text-left text-[#829fe1]"
            }`}
          >
            {card3 ? (
              <div>
                <h3
                  className={`text-3xl font-semibold ${spaceGrotesk.className}`}
                >
                  Opportunities <br /> for Growth
                </h3>
                <p className={`text-sm mt-2  ${poppins.className}`}>
                  Complete control over data, assets, and identity on a
                  decentralized virtual world.
                </p>
              </div>
            ) : (
              <h3
                className={`text-3xl text-[#829fe1] font-semibold ${spaceGrotesk.className}`}
              >
                Opportunities <br /> for Growth
              </h3>
            )}
          </div>
          {/* Card 4 */}
          <div
            onMouseEnter={() => {
              setCard4(true);
            }}
            onMouseLeave={() => {
              setCard4(false);
            }}
            className={`backdrop-blur-sm h-60 p-4 rounded-2xl ${
              card4
                ? "bg-[#0C71BC] text-white py-6  lg:py-14 px-10"
                : "bg-[#100a39a1] flex flex-col justify-center items-center text-center lg:text-left text-[#829fe1]"
            }`}
          >
            {card4 ? (
              <div>
                <h3
                  className={`text-3xl font-semibold ${spaceGrotesk.className}`}
                >
                  Community
                  <br />
                  and Collaboration
                </h3>
                <p className={`text-sm mt-2  ${poppins.className}`}>
                  Complete control over data, assets, and identity on a
                  decentralized virtual world.
                </p>
              </div>
            ) : (
              <h3
                className={`text-3xl text-[#829fe1] font-semibold ${spaceGrotesk.className}`}
              >
                Community <br />
                and Collaboration
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
