
'use client';

import { useState } from "react";
import Link  from "next/link";
import { faBars, faTooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState();
  return <>
    <div className="flex flex-wrap">
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
              <Link
               href="/"
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              >
                <FontAwesomeIcon icon={faTooth} className="fas fa-tooth text-4xl text-primary"></FontAwesomeIcon>
                <span className="text-2xl font-Poppins">
                  Life Care <span className="text-primary">Dental</span>
                </span>
              </Link>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FontAwesomeIcon icon={faBars} className="fas fa-bars"></FontAwesomeIcon>
              </button>
            </div>

            <div
              className={
                "lg:flex flex-grow items-center" +
                (menuOpen ? " flex" : " hidden")
              }
              id="navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                   href="/"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                   href="/about"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                   href="/services"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                   href="/contact"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item bg-primary">
                  <Link
                   href="/appointment"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Get Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </>

};

export default Menu
