"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { playfair, nunito } from "@/app/font";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "PRICINGS", href: "#menu" },
  { label: "ABOUT", href: "#about" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${nunito.className} sticky top-0 z-50 bg-[#FDF6F0]/90 backdrop-blur-md border-b border-[#C9A84C]/20`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-20">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.jpeg"
            alt="logo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className={`${playfair.className} text-[#6B0F2B] text-xl font-bold`}>
              Sahina <span className="italic">Beauté</span>
            </span>
            <span className="text-[#C9A84C] text-[0.6rem] tracking-widest uppercase">
              Salon de Beauté · Saint-Denis
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm tracking-widest text-[#9A6070]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="cursor-pointer hover:text-[#6B0F2B] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#booking">
            <Button className="rounded-full px-6 bg-[#6B0F2B] hover:bg-[#C9A84C] text-white font-bold transition-colors duration-200">
              Book Now
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-[#6B0F2B] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-6 gap-4 bg-[#FDF6F0] border-t border-[#C9A84C]/20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest text-[#9A6070] hover:text-[#6B0F2B] transition-colors duration-200 cursor-pointer py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a href="#booking" onClick={() => setIsOpen(false)}>
            <Button className="rounded-full px-6 bg-[#6B0F2B] hover:bg-[#C9A84C] text-white font-bold w-full mt-2 transition-colors duration-200">
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;