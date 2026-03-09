"use client";

import React from "react";
import { playfair, nunito } from "@/app/font";
import Image from "next/image";
import { motion } from "framer-motion";

const aboutPoints = [
  "Exclusivement pour femmes — espace privé et confortable",
  "Ouvert 7 jours sur 7, de 10h00 à 20h00",
  "Sans rendez-vous bienvenue — réservation non obligatoire",
  "Techniques de beauté indiennes authentiques et soins de qualité",
  "Forfaits mariée disponibles — henné, beauté et plus encore",
];

const pointVariants = {
  hidden: { opacity: 0, x: 20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.45,
      ease: "easeOut" as const,
    },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#FDF6F0] px-6 py-16 md:px-10 lg:px-16 xl:px-20 overflow-x-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden">
            <Image
              src="/Images/bridal.jpeg"
              alt="Sahina Beauté"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <p
                className={`${playfair.className} max-w-md text-base italic leading-7 text-white md:text-xl md:leading-8`}
              >
                « Chaque femme mérite de se sentir belle — avec ou sans rendez-vous. »
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="absolute right-2 top-2 md:-right-4 md:-top-4 flex h-24 w-24 md:h-32 md:w-32 flex-col items-center justify-center rounded-full bg-[#d9bb63] text-center shadow-xl"
          >
            <span
              className={`${nunito.className} text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-[#6B0F2B]/70`}
            >
              Ouvert
            </span>
            <span
              className={`${playfair.className} text-3xl md:text-4xl leading-none text-[#6B0F2B]`}
            >
              7/7
            </span>
            <span
              className={`${nunito.className} mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-[#6B0F2B]/70`}
            >
              Tous les jours
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p
            className={`${nunito.className} flex items-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#C9A84C]`}
          >
            <span className="inline-block h-px w-8 bg-[#C9A84C]" />
            À propos de nous
          </p>

          <h2
            className={`${playfair.className} mt-5 text-4xl leading-tight text-[#6B0F2B] md:text-5xl xl:text-6xl`}
          >
            Votre espace de{" "}
            <span className="italic text-[#C9A84C]">beauté indienne</span>{" "}
            à Saint-Denis
          </h2>

          <p
            className={`${nunito.className} mt-6 text-base leading-8 text-[#9A6070]`}
          >
            Sahina Beauté est un salon de beauté indien réservé aux femmes,
            situé à Saint-Denis. Le salon propose une large gamme de soins de
            beauté et de bien-être, notamment la beauté des mains, la beauté des
            pieds, les soins du visage, les faux ongles, la manucure,
            l’épilation, le henné, les massages, les cils et bien plus encore.
          </p>

          <p
            className={`${nunito.className} mt-5 text-base leading-8 text-[#9A6070]`}
          >
            Des soins du quotidien à la préparation pour les grandes occasions,
            le salon associe des éléments traditionnels de la beauté indienne à
            des prestations modernes de salon. La carte met également en avant
            le henné de mariée ainsi que plusieurs forfaits premium, ce qui le
            rend idéal aussi bien pour les visites régulières que pour les
            réservations liées à un événement.
          </p>

          <p
            className={`${nunito.className} mt-5 text-base leading-8 text-[#9A6070]`}
          >
            Les clientes peuvent venir sans rendez-vous, et le salon est ouvert
            sept jours sur sept de 10h00 à 20h00. L’identité visuelle ainsi que
            la carte des services positionnent clairement l’établissement comme
            un salon de beauté indien exclusivement féminin.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={pointVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#8a143a] text-sm text-white">
                  {index === 0 && "👩"}
                  {index === 1 && "🕘"}
                  {index === 2 && "📞"}
                  {index === 3 && "🌿"}
                  {index === 4 && "💍"}
                </div>
                <p
                  className={`${nunito.className} pt-1 text-[15px] leading-7 text-[#6B0F2B]`}
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;