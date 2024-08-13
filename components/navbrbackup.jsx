"use client";
import { useState, useEffect, useRef } from "react";
import Logo from "../public/assets/logo.svg";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Poppin = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <>
      <nav
        id="navbar"
        className="bg-[#000e19] p-1 relative top-0 h-[90px] w-full z-10 flex items-center justify-between border-b-[1px] border-opacity-15 border-gray-200"
      >
        <Image
          width={140}
          height={140}
          className="ml-6"
          src={Logo}
          alt="logo"
        />
        <div className="flex items-center ">
          <button
            ref={hamburgerRef}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="hamburger block md:hidden px-3 py-2 rounded text-white z-40"
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
          <div
            ref={mobileMenuRef}
            className={`menu ${
              isOpen ? "flex" : "hidden"
            } md:flex items-center justify-end flex-col md:flex-row w-full md:w-auto fixed top-20 right-0 sm:relative sm:top-0 backdrop-blur-xl md:bg-transparent`}
            style={{ zIndex: 9 }}
          >
            <ul className="flex flex-col md:flex-row list-none w-full text-sm mt-1 md:mr-6">
              <li
                onMouseEnter={() => handleMouseEnter("games")}
                onMouseLeave={handleMouseLeave}
                className="relative"
                style={{ boxShadow: 'none' }}
              >
                <a
                  onClick={() => setIsOpen(false)}
                  className={` text-center flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-5 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[50px] lg:h-[86px] hover:border-b-[1px] hover:border-[#0b71bc]`}
                  href="#"
                >
                  Games <i className="fa-solid fa-users"></i>
                  <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
                </a>
                {dropdownOpen === "games" && (
                  <div className="absolute top-full left-0 border-y-2 border-[#0b71bc] border-opacity-50 rounded-md mt-[2px]">
                    <ul className="py-2" style={{ boxShadow: 'none' }}>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        Car Games
                      </li>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        Shooting Games
                      </li>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        Bike Games
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
                className="relative"
                style={{ boxShadow: 'none' }}
              >
                <a
                  onClick={() => setIsOpen(false)}
                  className={`text-center flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[50px] lg:h-[86px] hover:border-b-[1px] hover:border-[#0b71bc]`}
                  href="#"
                >
                  Products <i className="fa-solid fa-plus"></i>
                  <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
                </a>
                {dropdownOpen === "products" && (
                  <div className="absolute top-full left-0 border-y-2 border-[#0b71bc] border-opacity-50 rounded-md mt-[2px]">
                    <ul className="py-2" style={{ boxShadow: 'none' }}>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        NFT Products
                      </li>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        Games Products
                      </li>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        Technology Products
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("learnMore")}
                onMouseLeave={handleMouseLeave}
                className="relative"
                style={{ boxShadow: 'none' }}
              >
                <a
                  onClick={() => setIsOpen(false)}
                  className={`text-center flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[50px] lg:h-[86px] hover:border-b-[1px] hover:border-[#0b71bc]`}
                  href="#"
                >
                  Learn more <i className="fa-brands fa-discourse"></i>
                  <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
                </a>
                {dropdownOpen === "learnMore" && (
                  <div className="absolute top-full left-0 border-y-2 border-[#0b71bc] border-opacity-50 rounded-md mt-[2px]">
                    <ul className="py-2" style={{ boxShadow: 'none' }}>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        About Us
                      </li>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        Documentation
                      </li>
                      <li className="px-4 py-2 text-nowrap hover:bg-gray-200" style={{ boxShadow: 'none' }}>
                        White Paper
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative" style={{ boxShadow: 'none' }}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`text-center flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[50px] lg:h-[86px] hover:border-b-[1px] hover:border-[#0b71bc]`}
                  href="#"
                >
                  Contact us <i className="fa-brands fa-discourse"></i>
                </a>
              </li>
            </ul>
            <button
              onClick={() => setIsOpen(false)}
              className={` ${Poppin.className} text-sm lg:mt-3 lg:ml-2 mb-10 lg:mr-5 lg:mb-3 mt-10 md:mt-0 md:ml-0 md:mb-0 rounded-full bg-[#0b71bc]
              hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-6 py-3 lg:px-10 lg:py-4`}
            >
              Connect
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
