import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faTooth, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container lg:flex lg:text-center lg:justify-between">
        <div className="lg:w-1/3">
          <div className="flex">
            <FontAwesomeIcon icon={faTooth} className="fas fa-tooth text-4xl text-primary"></FontAwesomeIcon>
            <span className="text-2xl font-Poppins">
              Life Care <span className="text-primary">Care</span>
            </span>
          </div>
          <p className="text-justify py-4">
            To have your lawn look its best, trust Landscaping & Garening, Inc.
            to get the job done right. We take a great deal of pride in the
            quality of our work. we understand what complete customer
            satisfaction means customer satisfaction.
          </p>
          <div className="text-primary text-2xl flex">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/"
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="fab fa-facebook-square ml-2"></FontAwesomeIcon>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <FontAwesomeIcon icon={faInstagramSquare} className="fab fa-instagram-square  ml-2"></FontAwesomeIcon>
            </a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitterSquare} className="fab fa-twitter-square ml-2"></FontAwesomeIcon>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin ml-2"></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="w-1/3 lg:py-0 py-8">
          <h1 className="text-2xl font-Poppins">Quick Links</h1>
          <ul className="py-4">
            <li className="py-1 hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link href="/about">About Us</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link href="/services">Services</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="w-auto">
          <h1 className="text-2xl font-Poppins">Subscribe</h1>

          <div className="py-4 flex">
            <input
              type="email"
              className="border px-4 border-primary border-r-0  py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="Your Email Address"
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              <FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-right"></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
