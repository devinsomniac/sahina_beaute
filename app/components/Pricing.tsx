"use client";
import React, { useState } from "react";
import { playfair, nunito } from "@/app/font";

const tabs = [
  "ONGLES",
  "ÉPILATION",
  "VISAGE & SOURCILS",
  "MASSAGE",
  "HENNÉ",
  "CILS & PLUS",
];

const pricingData = {
  ONGLES: [
    {
      title: "Beauté des Pieds (Pédicure)",
      icon: "🦶",
      subtitle: "Soins des ongles et des pieds",
      items: [
        { name: "Vernis simple / semi-permanent", price: "10 € / 20 €" },
        { name: "French / French semi-permanent", price: "15 € / 25 €" },
        { name: "Beauté des pieds (basique)", price: "28 €" },
        { name: "Beauté des pieds + vernis simple", price: "30 €" },
        { name: "Beauté des pieds + French", price: "35 €" },
        { name: "Beauté des pieds + vernis semi-permanent", price: "40 €" },
        { name: "Beauté des pieds + French semi-permanent", price: "45 €" },
      ],
    },
    {
      title: "Manucure des Mains",
      icon: "💅",
      subtitle: "Vernis, French et manucure complète",
      items: [
        { name: "Vernis simple / semi-permanent", price: "10 € / 18 €" },
        { name: "French simple / semi-permanent", price: "18 € / 25 €" },
        {
          name: "Manucure complète",
          desc: "Limage, nettoyage, exfoliation, vernis simple",
          price: "17 €",
        },
        { name: "Manucure complète + French", price: "22 €" },
        { name: "Manucure complète + vernis semi-permanent", price: "30 €" },
        { name: "Manucure complète + French semi-permanent", price: "35 €" },
      ],
    },
    {
      title: "Forfaits Mains & Pieds",
      icon: "🤝",
      subtitle: "Offres combinées manucure + pédicure",
      items: [
        { name: "Manucure + beauté des pieds", price: "35 €" },
        { name: "Mains + pieds avec vernis simple", price: "43 €" },
        { name: "Mains + pieds avec French", price: "48 €" },
        { name: "Mains + pieds avec semi-permanent", price: "65 €" },
        { name: "Mains + pieds avec French semi-permanent", price: "70 €" },
      ],
    },
    {
      title: "Faux Ongles",
      icon: "💎",
      subtitle: "Extensions en résine et gel UV",
      items: [
        { name: "Pose résine (mains / pieds)", price: "25 €" },
        { name: "Pose gel UV (mains / pieds)", price: "30 €" },
        { name: "Résine + vernis simple", price: "30 €" },
        { name: "Résine + vernis semi-permanent", price: "40 €" },
        { name: "Résine + French semi-permanent", price: "43 €" },
        { name: "Gel UV + vernis simple", price: "35 €" },
        { name: "Gel UV + vernis semi-permanent", price: "45 €" },
        { name: "Gel UV + French semi-permanent", price: "48 €" },
        { name: "Remplissage (résine / gel)", price: "20 € / 25 €" },
        { name: "Remplissage + vernis simple", price: "25 €" },
        { name: "Remplissage + vernis semi-permanent", price: "35 €" },
        { name: "Remplissage + French semi-permanent", price: "38 €" },
        { name: "Baby boomer", price: "40 €" },
        { name: "Retrait semi-permanent", price: "5 €" },
        { name: "Retrait faux ongles", price: "10 €" },
        { name: "Pose strass dentaire", price: "1 €" },
        { name: "Nail art / design", price: "1 €" },
      ],
    },
  ],

  "ÉPILATION": [
    {
      title: "Épilation du Visage",
      icon: "🌸",
      subtitle: "Au fil & à la cire",
      items: [
        { name: "Sourcils", price: "5 € / 5 €" },
        { name: "Lèvres", price: "5 € / 5 €" },
        { name: "Menton", price: "5 € / 5 €" },
        { name: "Cou", price: "5 € / 5 €" },
        { name: "Sourcils + lèvres + menton", price: "14 € / 12 €" },
        { name: "Visage complet", price: "20 € / 18 €" },
        { name: "Visage complet + cou", price: "22 € / 20 €" },
      ],
    },
    {
      title: "Épilation du Corps",
      icon: "✨",
      subtitle: "Zones du corps à la cire",
      items: [
        { name: "Nez", price: "4 €" },
        { name: "Aisselles", price: "8 €" },
        { name: "Demi-bras", price: "10 €" },
        { name: "Bras complets", price: "15 €" },
        { name: "Demi-jambes", price: "15 €" },
        { name: "Jambes complètes", price: "22 €" },
        { name: "Trois-quarts jambes", price: "17 €" },
        { name: "Cuisses", price: "15 €" },
        { name: "Ventre", price: "7 €" },
        { name: "Dos complet", price: "12 €" },
        { name: "Fesses complètes", price: "10 €" },
        { name: "Maillot simple", price: "10 €" },
        { name: "Maillot semi-intégral", price: "15 €" },
        { name: "Maillot intégral", price: "22 €" },
      ],
    },
    {
      title: "Forfaits Épilation",
      icon: "🧖",
      subtitle: "Forfaits épilation corps complet",
      items: [
        {
          name: "Demi-jambes + aisselles + maillot simple",
          price: "30 €",
        },
        {
          name: "Demi-jambes + aisselles + maillot intégral",
          price: "39 €",
        },
        {
          name: "Jambes complètes + aisselles + maillot intégral",
          price: "45 €",
        },
        {
          name: "Jambes complètes + aisselles + maillot intégral + bras complets",
          price: "63 €",
        },
      ],
    },
  ],

  "VISAGE & SOURCILS": [
    {
      title: "Soins du Visage",
      icon: "✨",
      subtitle: "Soins et traitements du visage",
      items: [
        {
          name: "Soin du visage (40 min)",
          desc: "Nettoyage + exfoliation + vapeur + extraction des points noirs + masque",
          price: "27 €",
        },
        {
          name: "Soin spécial du visage (50 min)",
          desc: "Traitement de la pigmentation et de l’acné",
          price: "35 €",
        },
        { name: "Soin du visage spécial SB (1 h)", price: "45 €" },
      ],
    },
    {
      title: "Yeux & Sourcils",
      icon: "👁️",
      subtitle: "Teinture et brow lift",
      items: [
        { name: "Teinture des sourcils", price: "8 €" },
        { name: "Teinture des cils", price: "10 €" },
        { name: "Forfait teinture + épilation des sourcils", price: "12 €" },
        {
          name: "Brow lift",
          desc: "Lamination, brow lift, épilation, teinture",
          price: "40 €",
        },
      ],
    },
  ],

  MASSAGE: [
    {
      title: "Soins Massage",
      icon: "💆",
      subtitle: "Relaxation du corps et bien-être",
      items: [
        {
          name: "Massage ayurvédique",
          desc: "Massage relaxant du corps entier avec huile chaude",
          price: "50 €",
        },
        {
          name: "Massage des pieds / dos / tête (30 min)",
          desc: "Massage à l’huile chaude",
          price: "30 €",
        },
        { name: "Avec gommage", price: "275 €" },
      ],
    },
  ],

  HENNÉ: [
    {
      title: "Art au Henné",
      icon: "🌿",
      subtitle: "Henné traditionnel pour les mains et mariage",
      items: [
        { name: "Dessin au henné (à partit de)", price: "5 €" },
        { name: "Henné mariage (à partit de)", price: "30 €" },
      ],
    },
  ],

  "CILS & PLUS": [
    {
      title: "Faux Cils",
      icon: "👁️",
      subtitle: "Services pour les cils",
      items: [
        { name: "Pose de faux cils normal", price: "25 €" },
        { name: "Retrait de faux cils", price: "10 €" },
      ],
    },
    {
      title: "Strass Dentaire",
      icon: "💎",
      subtitle: "Bijou décoratif pour dent",
      items: [{ name: "Strass dentaire", price: "8 €" }],
    },
  ],
};

function PriceCard({
  title,
  icon,
  subtitle,
  items,
}: {
  title: string;
  icon: string;
  subtitle: string;
  items: { name: string; desc?: string; price: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
      <div className="bg-gradient-to-r from-[#7c0f2f] to-[#b00d4d] px-6 py-5 text-white">
        <div className="flex items-start gap-3">
          <div className="text-2xl">{icon}</div>
          <div>
            <h3 className={`${playfair.className} text-3xl leading-none`}>
              {title}
            </h3>
            <p className={`${nunito.className} mt-1 text-sm text-white/75`}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-[#eadfe2]">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between gap-4 px-6 py-4"
          >
            <div>
              <p className={`${nunito.className} text-[15px] text-[#5a2733]`}>
                {item.name}
              </p>
              {item.desc && (
                <p className={`${nunito.className} mt-1 text-sm text-[#b48a92]`}>
                  {item.desc}
                </p>
              )}
            </div>
            <p
              className={`${playfair.className} shrink-0 text-2xl text-[#7c0f2f]`}
            >
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Pricing = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof pricingData>("ONGLES");

  return (
    <section id="menu" className="bg-[#f8eef1] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p
            className={`${nunito.className} flex items-center justify-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#C9A84C]`}
          >
            <span className="inline-block h-px w-8 bg-[#C9A84C]" />
            Carte des Prix
          </p>
          <h2
            className={`${playfair.className} mt-4 text-5xl md:text-7xl text-[#6B0F2B]`}
          >
            Notre <span className="italic text-[#C9A84C]">liste complète des tarifs</span>
          </h2>
          <p className={`${nunito.className} mt-4 text-[#9A6070]`}>
            Tous les prix sont inclusifs. Sans rendez-vous bienvenue. Nous prenons aussi les rendez-vous par téléphone.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof pricingData)}
              className={`${nunito.className} rounded-full border px-5 py-2 text-sm tracking-[0.12em] uppercase transition ${
                activeTab === tab
                  ? "bg-[#6B0F2B] text-white border-[#6B0F2B]"
                  : "bg-white text-[#9A6070] border-[#e2cfd5] hover:text-[#6B0F2B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {pricingData[activeTab].map((card, idx) => (
            <PriceCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;