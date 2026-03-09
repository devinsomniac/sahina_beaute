"use client";

import React from "react";
import { playfair, nunito } from "@/app/font";
import { Button } from "@/components/ui/button";
import ServicesTicker from "./ServicesTicker";
import { motion } from "framer-motion";

const serviceCards = [
  {
    icon: "💅",
    title: "Ongles & Manucure",
    desc: "Gel UV, nail art, french manucure, semi-permanent et soins complets de manucure.",
    price: "À PARTIR DE 35 €",
  },
  {
    icon: "🌸",
    title: "Épilation & Cire",
    desc: "Épilation au fil et à la cire pour le visage et le corps. Forfaits complets disponibles.",
    price: "À PARTIR DE 10 €",
  },
  {
    icon: "✨",
    title: "Soins du Visage",
    desc: "Nettoyage profond, exfoliation, vapeur, masques et soins ciblés pour la peau.",
    price: "À PARTIR DE 27 €",
  },
  {
    icon: "💆",
    title: "Massage Ayurvédique",
    desc: "Massage relaxant ayurvédique du corps, du dos et des pieds avec huiles chaudes.",
    price: "À PARTIR DE 30 €",
  },
  {
    icon: "🌿",
    title: "Art au Henné",
    desc: "Motifs traditionnels au henné pour les mains et les pieds, styles mariée et décoratifs.",
    price: "À PARTIR DE 5 €",
  },
  {
    icon: "👁️",
    title: "Yeux & Sourcils",
    desc: "Épilation au fil, teinture des sourcils, brow lift, lamination et soins des cils.",
    price: "À PARTIR DE 5 €",
  },
  {
    icon: "🦶",
    title: "Beauté des Pieds",
    desc: "Pédicure de luxe, pose de vernis, finition french et soins semi-permanents.",
    price: "À PARTIR DE 28 €",
  },
  {
    icon: "💎",
    title: "Cils & Strass Dentaire",
    desc: "Extensions de cils professionnelles et pose décorative de strass dentaire.",
    price: "À PARTIR DE 8 €",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const Services = () => {
  return (
    <section className="bg-[#FDF6F0]" id="services">
      <ServicesTicker />

      <div className="px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div
              className={`${nunito.className} flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] sm:text-xs text-[#C9A84C]`}
            >
              <span className="inline-block h-px w-8 bg-[#C9A84C]" />
              Nos Services
            </div>

            <h2
              className={`${playfair.className} mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-[#6B0F2B]`}
            >
              Tout pour votre{" "}
              <span className="italic text-[#C9A84C]">beauté</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <a href="#menu">
              <Button
                className={`${nunito.className} h-12 sm:h-14 rounded-full bg-[#6B0F2B] px-8 sm:px-10 tracking-[0.18em] text-xs sm:text-sm uppercase shadow-lg hover:bg-[#8a1838] self-start lg:self-auto`}
              >
                Menu Complet des Prix ↓
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5"
        >
          {serviceCards.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group rounded-[28px] bg-[#f6e9eb]/80 backdrop-blur-sm px-6 py-8 text-center min-h-[230px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;