'use client'

import React from "react";
import Link from "next/link";
import AuthProvider, { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

  let {currentUser, logout} =  useContext(AuthContext);;

  return (
    <div className="bg-gray-100">
      <div className="container flex items-center justify-between py-2">
        <div className="hidden md:flex">
          <span className="border-r-2 border-black px-2">
            <FontAwesomeIcon icon={faEnvelope} className="far fa-envelope w-5 text-primary"></FontAwesomeIcon>
            info@adc.com
          </span>
          <span className="px-2">
            <FontAwesomeIcon icon={faPhone} className="fas fa-phone text-primary"></FontAwesomeIcon> +8801600000000
          </span>
        </div>
        <div className="flex items-center justify-between text-primary ">
          {currentUser?.email ? (
            <>
              <span className="font-bold border-r-2 border-black px-2">
                Welcome, {currentUser.displayName || currentUser.email}{" "}
              </span>
              <span>
                <button
                  onClick={logout}
                  className="px-4 font-bold text-red-500"
                >
                  Logout
                </button>
              </span>
            </>
          ) : (
            <>
              <span className="border-r-2 border-black px-2">
                <Link href="/login">Login</Link>
              </span>
              <span className="px-2">
                <Link href="/register">Register</Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
