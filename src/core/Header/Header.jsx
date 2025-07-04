import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import NavItems from "./NavItems";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
    const menuRef = useRef(null);
    const [MenuOpen, setMenuOpen] = useState(false);
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const dropdown3Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [scroll, setScroll] = useState(false);
    const location = useLocation();
    const isActive = location.pathname;

    const ToggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    // Close other dropdowns when one is opened
    const toggleDropdown = (dropdown) => {
        if (dropdown === 1) {
            setDropdown1(!dropdown1);
            setDropdown2(false);
            setDropdown3(false);
        } else if (dropdown === 2) {
            setDropdown1(false);
            setDropdown2(!dropdown2);
            setDropdown3(false);
        } else if (dropdown === 3) {
            setDropdown1(false);
            setDropdown2(false);
            setDropdown3(!dropdown3);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }
            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }
            if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
                setDropdown3(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const Aboutus = [
        { name: "About the Conference", path: "/about" },
        { name: "Scope of Conference", path: "/scope" },
        { name: "Organizing Committee", path: "/organizing-committee" },
        { name: "Editorial Board", path: "/editorial-board" },
    ];

    const AuthorDesk = [
        { name: "Conference Tracks", path: "/conference-tracks" },
        { name: "Key Dates", path: "/key-dates" },
        { name: "Paper Submission", path: "/paper-submission" },
    ];

    // const navlocation = useLocation();
    // const linkClass = (path) =>
    //     `${navlocation.pathname === path ? 'text-[#FFDB00]' : 'text-black roboto-slab-medium'
    //     }`;


    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div ref={menuRef} className={`w-full fixed top-0 z-20  transition-all duration-300 ${ isActive ==="/" ? scrolled ? "bg-[#DFDBF2]"  : "bg-fixed" : "bg-[#DFDBF2]"} `}>
            <div className="mx-auto w-full xl:max-w-[1450px] md:max-w-[920px] flex items-center justify-between px-3">
                <div className="py-4">
                    {/* <Link to="/" className={`text-4xl roboto-slab-bold ${  isActive === "/" ? scrolled ? "text-[#1B56FD]" : "text-[#1B56FD]" : "text-[#1B56FD]" }`}>
                        ICRAIS
                    </Link> */}
                    <Link to="/">
                        <img className={`w-40 md:mx-0 mx-auto`}   src={isActive === "/" ? "/assets/images/ICRAIS.png" : "/assets/images/ICRAIS.png"} alt="logo" />
                    </Link>
                </div>

                <div className="lg:flex hidden items-center">
                    <ul className={`flex gap-18 h-full items-center justify-center inter-regular text-[18px] ${ isActive === "/" ? scrolled ? 'text-black ' : 'text-black' : "text-gray-900"}`}>
                        <li >
                            <Link to="/" className="">Home</Link>
                        </li>
                        <li ref={dropdown1Ref} className="cursor-pointer relative ">
                            <Link onClick={() => toggleDropdown(1)} className={`flex items-center gap-1 `}>
                                About Us <FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`} />
                            </Link>
                            {dropdown1 && (
                                <div className="absolute bg-white border border-gray-600 shadow-lg mt-2 rounded ">
                                    <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap ">
                                        {Aboutus.map((link, index) => (
                                            <Link key={index} onClick={() => setDropdown1(false)} to={link.path} className="!w-full">
                                                <li className="px-4 py-2 text-gray-800 inter-regular  ">{link.name}</li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li ref={dropdown2Ref} className="cursor-pointer relative">
                            <Link onClick={() => toggleDropdown(2)} className="flex items-center gap-1">
                                Author's Desk <FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`} />
                            </Link>
                            {dropdown2 && (
                                <div className="absolute bg-white border border-gray-600 shadow-lg mt-2 rounded">
                                    <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap">
                                        {AuthorDesk.map((link, index) => (
                                            <Link key={index} onClick={() => setDropdown2(false)} to={link.path} className="!w-full">
                                                <li className="px-4 py-2 text-gray-800 inter-regular    ">{link.name}</li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <Link to="/contactus" className="">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div
                    onClick={ToggleMenu}
                    className="inline-flex align-middle items-center duration-300 min-w-24 select-none lg:hidden"
                >
                    <RiMenu3Fill  className={`ml-15 text-3xl cursor-pointer duration-300 m-1.5 ${ isActive==="/" ? scrolled ? 'text-black ' : 'text-black' : "text-gray-900"} `} />
                </div>
            </div>

            <NavItems
                MenuOpen={MenuOpen}
                ToggleMenu={ToggleMenu}
                isActive={isActive}
                dropdown1Ref={dropdown1Ref}
                dropdown2Ref={dropdown2Ref}
                setDropdown1={setDropdown1}
                setDropdown2={setDropdown2}
                dropdown1={dropdown1}
                dropdown2={dropdown2}
            />
            {MenuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="h-screen w-full bg-black/60 absolute top-0"
                ></div>
            )}
        </div>
    );
};

export default Header;