import React from "react";
import { playfair, nunito } from "@/app/font";

const Footer = () => {
  return (
    <footer className="bg-[#5f0620] px-6 py-10 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h3 className={`${playfair.className} text-4xl text-white`}>
            Sahina <span className="italic text-[#d9bb63]">Beauté</span>
          </h3>
          <p
            className={`${nunito.className} mt-2 uppercase tracking-[0.28em] text-[11px] text-[#d9bb63]`}
          >
            Indian Beauty Salon · Saint-Denis, France
          </p>
        </div>

        <ul
          className={`${nunito.className} flex flex-wrap gap-6 uppercase tracking-[0.14em] text-xs text-[#caa3ad]`}
        >
          <li><a href="#services">Services</a></li>
          <li><a href="#menu">Prices</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#booking">Book</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className={`${nunito.className} text-right text-sm leading-7 text-[#b78a95]`}>
          <p>© 2025 Sahina Beauté. All rights reserved.</p>
          <p>8 Rue Dezobry · 93200 Saint-Denis ♥</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;