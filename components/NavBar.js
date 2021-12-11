import Link from 'next/link';
import { Transition } from '@headlessui/react'
import { useState } from 'react';

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="w-full fixed top-0 z-50 bg-white shadow-xl py-2 sm:py-4">
            <div className="px-4 flex items-center justify-between">
                <h1 className="font-rye sm:text-xl md:text-2xl text-purple-600 font-bold tracking-wider">
                    IMUYA
                </h1>
                <button onClick={toggleMenu} className={`sm:hidden shadow-md shadow-purple-600 border p-1 outline-none rounded-md ${!isOpen ? '' : 'bg-purple-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className={`${!isOpen ? '' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7" />
                        <path className={`${isOpen ? '' : 'hidden'} text-white`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <section className="hidden sm:inline">
                <ul className="flex items-center space-x-3 text-lg text-purple-600">
                    <li>
                        <Link href="#hero">
                            <a>HOME</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            <a className="whitespace-nowrap">ABOUT US</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#mission">
                            <a>MISSION</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#executives">
                            <a>EXECUTIVES</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="whitespace-nowrap">CONTACT US</a>
                        </Link>
                    </li>
                </ul>
                </section>
            </div>
                <Transition 
                show={isOpen}
                enter="transition ease-out duration-500 transform"
                enterFrom="transform opacity-0 scale-50"
                enterTo="transform opacity-100 scale-200"
                leave="transition ease-in duration-75 transform"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="w-full h-auto py-12 px-6 text-center 
                bg-purple-600 flex flex-col sm:hidden">
                    <Link 
                    href="#hero"
                    activeClass="hero"
                    to="hero"
                    smooth={true}
                    offset={50}
                    durations={500}>
                        <a onClick={toggleMenu} className=" text-xl font-semibold tracking-widest py-4 text-white">
                            HOME
                        </a>
                    </Link>
                    <Link 
                    href="#about"
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    durations={500}>
                        <a onClick={toggleMenu} className="whitespace-nowrap text-xl font-semibold tracking-widest py-4 text-white">
                            ABOUT US
                        </a>
                    </Link>
                    <Link 
                    href="#mission"
                    activeClass="mission"
                    to="mission"
                    smooth={true}
                    offset={50}
                    durations={500}>
                        <a onClick={toggleMenu} className=" text-xl font-semibold tracking-widest py-4 text-white">
                            MISSION
                        </a>
                    </Link>
                    <Link 
                    href="#executives"
                    activeClass="executives"
                    to="executives"
                    smooth={true}
                    offset={50}
                    durations={500}>
                        <a onClick={toggleMenu} className=" text-xl font-semibold tracking-widest py-4 text-white">
                            EXECUTIVES
                        </a>
                    </Link>
                    <Link href="/">
                        <a onClick={toggleMenu} className=" text-xl font-semibold tracking-widest py-4 text-white">
                            CONTACT
                        </a>
                    </Link>
                </Transition>
        </nav>
    )
}

export default NavBar
