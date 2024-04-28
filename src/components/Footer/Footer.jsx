import React from "react";

import { FaInstagram, FaFacebook  } from "react-icons/fa";
import Logo from "../../assets/Logo.png";


const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
]
export default function Footer () {
  return (
    <>
    <div>
      <div className="container grid md:grid-cols-3 pb-20 pt-5">
        { /*company details */}
        <div className="py-8 px-4">
          <img src={Logo} alt="" className="w-36" />
          <div className="pt-4 opacity-60">
            <p>Fantastic, beautify enviroment, relax setting, good food and soft music.</p>
            <div>
              <button
              className="primary-btn">See Our SnapChat Page</button>
            </div>
          </div>
        </div>
        { /*footer details */}
        <div className="col-span-2 grid grid-cols-2">
          <div className="py-8 px-4">
            <h1>Social Links</h1>
            <ul className="space-y-5">
              {FooterLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link}> {link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          { /*another col details */}
          <div className="py-8 px-4">
            <h1>Quick Links</h1>
            <ul className="space-y-5">
              {FooterLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link}> {link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          { /* restaurant details */}
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-semibold sm:text-left mb-5">
              Address
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>

              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              {/* <a href="#">
                <FaTictoc className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaSnapchat className="text-3xl hover:text-primary duration-300" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      { /* copyright section */}
      <div className="bg-gray-200">
      <div className="text-xs md:text-sm container p-4 flex justify-between">
      <p>@2024 All rights reserved Inc.</p>
      <div className="flex justify-center items-center">
        <a href="#">Privacy</a>
        <a href="#">Accessibility</a>
        <a href="#">Terms</a>
      </div>
      </div>
      </div>
    </div>
    </>
  );
}
