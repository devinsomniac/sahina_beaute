"use client";

import React from "react";
import { playfair, nunito } from "@/app/font";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Fatima R.",
    role: "Cliente mariée",
    quote:
      "Le henné de mariée était absolument magnifique. L’artiste était très talentueuse et patiente. J’ai reçu énormément de compliments pendant mon événement.",
    avatar: "from-[#f0c7cf] to-[#d68da0]",
  },
  {
    name: "Priya S.",
    role: "Cliente régulière",
    quote:
      "J’adore ce salon. Le massage ayurvédique était profondément relaxant et l’équipe était très chaleureuse et accueillante. C’est devenu l’un de mes endroits préférés.",
    avatar: "from-[#e5cf86] to-[#c9a84c]",
  },
  {
    name: "Amina K.",
    role: "Avis vérifié",
    quote:
      "Des prix excellents pour une qualité incroyable. Mes ongles en gel ont tenu pendant des semaines et l’épilation au fil était parfaite. Je me sens toujours très bien prise en charge ici.",
    avatar: "from-[#c57a91] to-[#8f2948]",
  },
  {
    name: "Sonia M.",
    role: "Cliente soin du visage",
    quote:
      "Le soin du visage a laissé ma peau fraîche, propre et éclatante. L’atmosphère était calme et professionnelle du début à la fin.",
    avatar: "from-[#d9b7bf] to-[#b97083]",
  },
  {
    name: "Nadia T.",
    role: "Cliente épilation",
    quote:
      "Très propre, très douce et très professionnelle. Le service d’épilation était rapide et confortable, et j’ai beaucoup apprécié l’accueil chaleureux de l’équipe.",
    avatar: "from-[#edd8de] to-[#d2a3ae]",
  },
  {
    name: "Sara L.",
    role: "Cliente henné",
    quote:
      "Un magnifique travail de henné, très détaillé, et une expérience globalement très agréable. Les motifs étaient élégants et exactement comme je les voulais pour une occasion spéciale.",
    avatar: "from-[#dabd68] to-[#b48a2e]",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="bg-[#FDF6F0] px-6 py-16 md:px-10 lg:px-16 xl:px-20 min-h-[calc(100vh-5rem)]"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p
            className={`${nunito.className} flex items-center justify-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#C9A84C]`}
          >
            <span className="inline-block h-px w-8 bg-[#C9A84C]" />
            Avis Clients
          </p>

          <h2
            className={`${playfair.className} mt-5 text-4xl leading-tight text-[#6B0F2B] md:text-5xl xl:text-6xl`}
          >
            Ce que disent nos{" "}
            <span className="italic text-[#C9A84C]">clientes</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl bg-[#f4e7e9] px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 flex gap-1 text-[#C9A84C] text-sm">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p
                className={`${playfair.className} text-[15px] leading-6 italic text-[#6B0F2B]`}
              >
                “{review.quote}”
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div
                  className={`h-9 w-9 rounded-full bg-gradient-to-br ${review.avatar} shrink-0 flex items-center justify-center text-white text-xs font-semibold`}
                >
                  {review.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>

                <div>
                  <p className={`${nunito.className} text-sm text-[#6B0F2B]`}>
                    {review.name}
                  </p>
                  <p className={`${nunito.className} text-xs text-[#9A6070]`}>
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;