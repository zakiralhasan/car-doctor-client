import React from "react";
import logo from "../../../assets/logo.svg";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer px-10 bg-blck text-white py-20">
        <div>
          <img src={logo} alt="" />
          <p className="text-left">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
          <div className="flex gap-2">
            <div className="bg-[#2C2C2C] p-2 rounded-full">
              <a href="/">
                <FaGoogle />
              </a>
            </div>
            <div className="bg-[#2C2C2C] p-2 rounded-full">
              <a href="/">
                <FaTwitter />
              </a>
            </div>
            <div className="bg-[#2C2C2C] p-2 rounded-full">
              <a href="/">
                <FaInstagram />
              </a>
            </div>
            <div className="bg-[#2C2C2C] p-2 rounded-full">
              <a href="/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title mb-8">About</span>
          <a href="/" className="link link-hover">
            Home
          </a>
          <a href="/" className="link link-hover">
            Service
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
        </div>
        <div>
          <span className="footer-title mb-8">Company</span>
          <a href="/" className="link link-hover">
            Why Car Doctor
          </a>
          <a href="/" className="link link-hover">
            About
          </a>
        </div>
        <div>
          <span className="footer-title mb-8">Support</span>
          <a href="/" className="link link-hover">
            Seport Center
          </a>
          <a href="/" className="link link-hover">
            Feedback
          </a>
          <a href="/" className="link link-hover">
            Accessibility
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
