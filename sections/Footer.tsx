import React from "react";
import { FooterServices, socials } from "@/constants";

const Footer = () => {
  return (
    <footer className="text-white py-8 bg-primary">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly md:gap-20 gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold pb-2">Muhammad</h2>
          <p className="">Fullstack Developer</p>
        </div>
        <nav className="flex mt-4">
          <ul className="flex space-x-4">
            {FooterServices.map((service) => (
              <li key={service.title}>
                <a href={service.path} className="text-white">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex mt-4">
          <ul className="flex space-x-10">
            {socials.map((social) => (
              <li>
                <a href="#" className="text-white">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="text-gray-500 mt-4 text-center">
        &copy; 2022 MyProject. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
