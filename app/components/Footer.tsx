import React from "react";
import { playfair, nunito } from "@/app/font";

const Footer = () => {
  return (
    <footer className="bg-[#5f0620] px-6 py-10 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        {/* Brand */}
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

        {/* Navigation */}
        <ul
          className={`${nunito.className} flex flex-wrap gap-6 uppercase tracking-[0.14em] text-xs text-[#caa3ad]`}
        >
          <li>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
          </li>

          <li>
            <a href="#menu" className="hover:text-white transition-colors">
              Prices
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </li>

          <li>
            <a href="#booking" className="hover:text-white transition-colors">
              Book
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <div
          className={`${nunito.className} text-right text-sm leading-7 text-[#b78a95]`}
        >
          <p>© 2026 Sahina Beauté. All rights reserved.</p>

          <p>8 Rue Dezobry · 93200 Saint-Denis ♥</p>

          <p className="mt-2 text-xs text-[#9a6b78]">
            Crafted by{" "}
            <a
              href="https://inzamam.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d9bb63] hover:text-white transition-colors"
            >
              Insomniac
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;