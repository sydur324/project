import { Link } from 'react-router-dom';
import './Navbar.css'

import { MdMenu } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from 'react';

const Navbar = () => {
    const navLink = [
        { id: 1, name: "Home", to: "" },
        { id: 2, name: "Journals", to: "" },
        { id: 3, name: "Research", to: "" },
        { id: 4, name: "About WEG", to: "" },
        { id: 6, name: "Global Team", to: "" },
        { id: 7, name: "Contact", to: "" },
    ]

    const [isOpen, setIsOpen] = useState(false)

    const [changeColor, setChangeColor] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) setChangeColor(true);
            else setChangeColor(false);
        })
    }, [])

    return (
        <div className='fixed top-0 w-full z-50'>
            <div className={`xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-6 bg-[#fff] ${changeColor ? "bg-[#E1E1E1] py-4 border-b border-[#ffffff] shadow-lg border" : ""}}`}>

                {/* ---For Big Device--- */}

                <div className=''>
                    <div className='flex items-center justify-between'>

                        <div>
                            <h2 className='text-[#950007] font-bold leading-4'>WESTREN<br></br>EDUCATION GROUP</h2>
                        </div>

                        <div className='lg:flex items-center xl:space-x-12 lg:space-x-8 hidden'>
                            <div className='flex items-center xl:space-x-6 lg:space-x-4'>
                                {
                                    navLink.map((nav) => <li className='list-none dots-nav hover:text-[#950007] text-[#393939] font-medium' key={nav.id}>
                                        <Link to={nav.to}>
                                            <p>{nav.name}</p>
                                        </Link>
                                    </li>)
                                }
                            </div>
                            <div className='flex items-center text-sm font-medium space-x-3 text-[#393939]'>
                                <button className='py-2 px-3 border hover:bg-[#950007]  hover:border-transparent hover:text-white duration-300 rounded'>Sign In / Sign Up</button>
                                <button className='py-2 px-4 bg-[#950007] text-white tracking-wider
                 hover:bg-[#853336] duration-300 rounded'>
                                    Submit
                                </button>
                            </div>
                        </div>

                        <div className='lg:hidden'>
                            <p onClick={() => setIsOpen(true)} className='text-xl py-2 px-2 bg-[#950007] hover:bg-[#853236] duration-300 rounded text-white'><MdMenu /></p>
                        </div>

                    </div>
                </div>

                {/* --for-smalle-device-- */}

                <div className={`lg:hidden fixed top-0 duration-300 z-50 left-0 w-[100%] h-screen bg-[#faf8f8] ${isOpen ? "left-0" : "left-[-100%]"}`}>
                    <div className='bg-[#950007]'>
                        <div className='flex items-center justify-between px-14 py-8'>
                            <h2 className='text-[#fff] font-bold leading-4'>WESTREN<br></br>EDUCATION GROUP</h2>
                            <p onClick={() => setIsOpen(false)} className='px-2 py-2 bg-[#fff] text-[#950007] rounded text-xl'><HiMiniXMark /></p>
                        </div>
                    </div>

                    <div>
                        <div className=' py-4'>
                            <div className=''>
                                {
                                    navLink.map((nav) => <li className='list-none font-medium hover:bg-[#91000c23] text-[#262626] py-4 border-b px-14' key={nav.id}>
                                        <Link to={nav.to}>
                                            <p>{nav.name}</p>
                                        </Link>
                                    </li>)
                                }
                            </div>
                            <div className=''>
                                <p className=''>Sign In</p>
                                <p className=''>Sing Up</p>
                                <p className=''>
                                    Submit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;