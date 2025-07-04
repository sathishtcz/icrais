import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const NavItems = ({ ToggleMenu, MenuOpen }) => {
    const location = useLocation();
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const [dropdown1, setDropdown1] = React.useState(false);
    const [dropdown2, setDropdown2] = React.useState(false);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }
            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50 bg-[#DFDBF2] transform transition-transform duration-300
                ${MenuOpen ? 'translate-y-0' : '-translate-y-full'}
                shadow-xl w-full lg:hidden
            `}
        >
            <div className="p-5">
                <div onClick={ToggleMenu} className="absolute right-5 top-5 cursor-pointer">
                    <IoClose  className="text-2xl text-black" />
                </div>
                <ul className="flex flex-col mt-8 space-y-4 text-black text-lg inter-regular">
                    <Link to="/" onClick={ToggleMenu}>
                        <li className={`${location.pathname === '/' ? ' ' : ''}`}>Home</li>
                    </Link>

                    <li ref={dropdown1Ref}>
                        <div
                            onClick={() => setDropdown1(!dropdown1)}
                            className="flex items-center justify-between cursor-pointer"
                        >
                            <span>About Us</span>
                            <FaChevronDown className={`transition-transform ${dropdown1 ? 'rotate-180' : ''}`} />
                        </div>
                        {dropdown1 && (
                            <ul className="ml-4 mt-2 space-y-1 border-l-2 border-black pl-2">
                                {Aboutus.map((item, idx) => (
                                    <Link key={idx} to={item.path} onClick={ToggleMenu}>
                                        <li>{item.name}</li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li ref={dropdown2Ref}>
                        <div
                            onClick={() => setDropdown2(!dropdown2)}
                            className="flex items-center justify-between cursor-pointer"
                        >
                            <span>Author's Desk</span>
                            <FaChevronDown className={`transition-transform ${dropdown2 ? 'rotate-180' : ''}`} />
                        </div>
                        {dropdown2 && (
                            <ul className="ml-4 mt-2 space-y-1 border-l-2 border-black pl-2">
                                {AuthorDesk.map((item, idx) => (
                                    <Link key={idx} to={item.path} onClick={ToggleMenu}>
                                        <li>{item.name}</li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </li>

                    <Link to="/contactus" onClick={ToggleMenu}>
                        <li className={`${location.pathname === '/contactus' ? 'font-bold' : ''}`}>Contact</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavItems;
