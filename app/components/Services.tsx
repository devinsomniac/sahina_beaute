import React from "react";
import { playfair, nunito } from "@/app/font";
import { Button } from "@/components/ui/button";
import ServicesTicker from "./ServicesTicker";

const serviceCards = [
  {
    icon: "💅",
    title: "Nails & Manicure",
    desc: "Gel UV, nail art, french polish, semi-permanent and full manicure treatments.",
    price: "FROM €35",
  },
  {
    icon: "🌸",
    title: "Waxing & Épilation",
    desc: "Threading and professional waxing for face and body. Full épilation packages available.",
    price: "FROM €10",
  },
  {
    icon: "✨",
    title: "Skin Facials",
    desc: "Deep cleansing, exfoliation, steam therapy, masks and targeted skin treatments.",
    price: "FROM €27",
  },
  {
    icon: "💆",
    title: "Ayurvedic Massage",
    desc: "Relaxing Ayurvedic full-body, back and foot massage using warm oils.",
    price: "FROM €30",
  },
  {
    icon: "🌿",
    title: "Henna Art",
    desc: "Traditional henna designs for hands and feet, bridal and decorative styles.",
    price: "FROM €5",
  },
  {
    icon: "👁️",
    title: "Eye & Brow",
    desc: "Threading, eyebrow tint, brow lift, lamination and lash enhancement services.",
    price: "FROM €5",
  },
  {
    icon: "🦶",
    title: "Foot Beauty",
    desc: "Luxury pedicure, nail polish, french finish and semi-permanent treatments.",
    price: "FROM €28",
  },
  {
    icon: "💎",
    title: "Lashes & Tooth Diamond",
    desc: "Professional eyelash extensions and decorative tooth diamond placement.",
    price: "FROM €8",
  },
];
const Services = () => {
  return (
    <section className="bg-[#FDF6F0]">
      <ServicesTicker />

      <div className="px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 py-14 md:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div
              className={`${nunito.className} flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] sm:text-xs text-[#C9A84C]`}
            >
              <span className="inline-block h-px w-8 bg-[#C9A84C]" />
              Our Services
            </div>

            <h2
              className={`${playfair.className} mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-[#6B0F2B]`}
            >
              Everything for your{" "}
              <span className="italic text-[#C9A84C]">beauty</span>
            </h2>
          </div>

          <Button className={`${nunito.className} h-12 sm:h-14 rounded-full bg-[#6B0F2B] px-8 sm:px-10 tracking-[0.18em] text-xs sm:text-sm uppercase shadow-lg hover:bg-[#8a1838] self-start lg:self-auto`}>
            Full Price Menu ↓
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {serviceCards.map((service) => (
            <div
              key={service.title}
              className="group rounded-[28px] bg-[#f6e9eb]/80 backdrop-blur-sm px-6 py-8 text-center min-h-[230px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl mb-5">{service.icon}</div>

              <h3
                className={`${playfair.className} text-[#6B0F2B] text-2xl font-semibold`}
              >
                {service.title}
              </h3>

              <p
                className={`${nunito.className} mt-4 text-sm leading-7 text-[#9A6070] max-w-[300px]`}
              >
                {service.desc}
              </p>

              <p
                className={`${nunito.className} mt-5 text-xs uppercase tracking-[0.22em] text-[#C9A84C]`}
              >
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;