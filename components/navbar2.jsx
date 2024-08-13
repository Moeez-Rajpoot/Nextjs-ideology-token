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
  const [dropdownStates, setDropdownStates] = useState({
    games: false,
    products: false,
    learnMore: false,
    contactUs: false,
  });
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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [menu]: true,
      }));
    }
  };

  const handleMouseLeave = (menu) => {
    if (window.innerWidth >= 768) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [menu]: false,
      }));
    }
  };

  const handleDropdownClick = (menu) => {
    setDropdownStates((prevState) => {
      const newStates = {
        games: false,
        products: false,
        learnMore: false,
        contactUs: false,
      };
      return {
        ...newStates,
        [menu]: !prevState[menu],
      };
    });
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
        <div className="flex items-center">
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
            className={`menu ${isOpen ? "flex" : "hidden"} md:flex items-center justify-end flex-col md:flex-row w-full md:w-auto fixed top-20 right-0 md:relative md:top-0 backdrop-blur-xl md:bg-transparent`}
            style={{ zIndex: 9 }}
          >
            <ul className="flex flex-col md:flex-row list-none w-full text-sm mt-1 md:mr-6">
              <li
                onMouseEnter={() => handleMouseEnter("games")}
                onMouseLeave={() => handleMouseLeave("games")}
                onClick={() => handleDropdownClick("games")}
                className="relative"
              >
                <a
                  
                  className={`text-center flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-5 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[50px] lg:h-[86px] border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#0b71bc]`}
                  href="#"
                >
                  Games <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
                </a>
                {dropdownStates.games && (
                  <div className="absolute top-full left-0 bg-[#0a72bc] lg:bg-[#0a72bc06] lg:backdrop-blur-lg text-white border-x-4 w-full h-52 lg:h-fit  lg:w-40 border-[#0a71bc] rounded-xl mt-1 z-10">
                    <ul className="py-2">
                      <li className="px-4 lg:py-2 py-4 hover:underline hover:cursor-pointer">Car Games</li>
                      <li className="px-4 lg:py-2 py-4 hover:underline hover:cursor-pointer">Shooting Games</li>
                      <li className="px-4 lg:py-2 py-4 hover:underline hover:cursor-pointer">Bike Games</li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={() => handleMouseLeave("products")}
                onClick={() => handleDropdownClick("products")}
                className="relative"
              >
                <a
                  
                  className={`text-center flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[50px] lg:h-[86px] border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#0b71bc]`}
                  href="#"
                >
                  Products <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
                </a>
                {dropdownStates.products && (
                  <div className="absolute top-full left-0 bg-[#0a72bc] lg:bg-[#0a72bc06] lg:backdrop-blur-lg text-white border-x-4 w-full h-52 lg:h-fit  lg:w-40 border-[#0a71bc] rounded-xl mt-1 z-10">
                    <ul className="py-2">
                      <li className="px-4 lg:py-2 py-4  hover:underline hover:cursor-pointer ">Tech Gadgets</li>
                      <li className="px-4 lg:py-2 py-4 hover:underline hover:cursor-pointer">Home Appliances</li>
                      <li className="px-4 lg:py-2 py-4  hover:underline hover:cursor-pointer">Outdoor Gear</li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("learnMore")}
                onMouseLeave={() => handleMouseLeave("learnMore")}
                onClick={() => handleDropdownClick("learnMore")}
                className="relative"
              >
                <a
                  
                  className={`text-center flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[50px] lg:h-[86px] border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#0b71bc]`}
                  href="#"
                >
                  Learn more <FontAwesomeIcon className="ml-2 h-3" icon={faChevronDown} />
                </a>
                {dropdownStates.learnMore && (
                  <div className="absolute top-full left-0 bg-[#0a72bc] lg:bg-[#0a72bc06] lg:backdrop-blur-lg text-white border-x-4 w-full h-52 lg:h-fit lg:w-40 border-[#0a71bc] rounded-xl mt-1 z-10">
                    <ul className="py-2">
                      <li className="px-4 lg:py-2 py-4 hover:underline hover:cursor-pointer ">Tutorials</li>
                      <li className="px-4 lg:py-2 py-4 hover:underline hover:cursor-pointer">Webinars</li>
                      <li className="px-4 lg:py-2 py-4 hover:underline hover:cursor-pointer">eBooks</li>
                    </ul>
                  </div>
                )}
              </li>
              <li
              >
                <a
                  onClick={() => setIsOpen(false)}
                  className={`text-center flex py-3 sm:px-2 text-[#7F9ED0] items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 text-nowrap ${Poppin.className} h-[50px] lg:h-[86px] border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#0b71bc]`}
                  href="#"
                >
                  Contact us 
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
