"use client"
import React, { useState } from "react";
import { playfair, nunito } from "@/app/font";

const tabs = [
  "NAILS",
  "WAXING",
  "FACE & BROW",
  "MASSAGE",
  "HENNA",
  "LASHES & MORE",
];

const pricingData = {
  NAILS: [
    {
      title: "Foot Beauty (Pedicure)",
      icon: "🦶",
      subtitle: "Nail & foot care services",
      items: [
        { name: "Simple / Semi-permanent varnish", price: "€10 / €20" },
        { name: "French / Semi-permanent French varnish", price: "€15 / €25" },
        { name: "Foot beauty (basic)", price: "€28" },
        { name: "Foot beauty + simple varnish", price: "€30" },
        { name: "Foot beauty + French varnish", price: "€35" },
        { name: "Foot beauty + semi-permanent varnish", price: "€40" },
        { name: "Foot beauty + semi-permanent French", price: "€45" },
      ],
    },
    {
      title: "Hand Manicure",
      icon: "💅",
      subtitle: "Nail polish, french & full manicure",
      items: [
        { name: "Simple / Semi-permanent varnish", price: "€10 / €18" },
        { name: "French simple / semi-permanent", price: "€18 / €25" },
        {
          name: "Complete manicure",
          desc: "Filing, cleaning, exfoliation, simple varnish",
          price: "€17",
        },
        { name: "Complete manicure + French", price: "€22" },
        { name: "Complete manicure + semi-permanent varnish", price: "€30" },
        { name: "Complete manicure + French semi-permanent", price: "€35" },
      ],
    },
    {
      title: "Hand & Foot Packages",
      icon: "🤝",
      subtitle: "Combined manicure + pedicure deals",
      items: [
        { name: "Manicure + Beauté des pieds", price: "€35" },
        { name: "Hands + Feet with simple polish", price: "€43" },
        { name: "Hands + Feet with french polish", price: "€48" },
        { name: "Hands + Feet with semi-permanent", price: "€65" },
        { name: "Hands + Feet with french semi-permanent", price: "€70" },
      ],
    },
    {
      title: "Fake Nails (Pose de Faux Ongles)",
      icon: "💎",
      subtitle: "Resin & UV gel extensions",
      items: [
        { name: "Pose résine (hands / feet)", price: "€25" },
        { name: "Pose gel UV (hands / feet)", price: "€30" },
        { name: "Resin + simple varnish", price: "€30" },
        { name: "Resin + semi-permanent varnish", price: "€40" },
        { name: "Resin + semi-permanent French", price: "€43" },
        { name: "UV gel + simple varnish", price: "€35" },
        { name: "UV gel + semi-permanent varnish", price: "€45" },
        { name: "UV gel + semi-permanent French", price: "€48" },
        { name: "Refill (résine / gel)", price: "€20 / €25" },
        { name: "Refill + simple varnish", price: "€25" },
        { name: "Refill + semi-permanent varnish", price: "€35" },
        { name: "Refill + semi-permanent French", price: "€38" },
        { name: "Baby boomer", price: "€40" },
        { name: "Remove semi-permanent", price: "€5" },
        { name: "Remove fake nails", price: "€10" },
        { name: "Tooth diamond placement", price: "€1" },
        { name: "Nail art / design", price: "€1" },
      ],
    },
  ],

  WAXING: [
    {
      title: "Face Epilation",
      icon: "🌸",
      subtitle: "Threading (Fil) & Wax (Cire)",
      items: [
        { name: "Eyebrows", price: "€5 / €5" },
        { name: "Lips", price: "€5 / €5" },
        { name: "Chin", price: "€5 / €5" },
        { name: "Neck", price: "€5 / €5" },
        { name: "Eyebrows + Lips + Chin", price: "€14 / €12" },
        { name: "Full face", price: "€20 / €18" },
        { name: "Full face + neck", price: "€22 / €20" },
      ],
    },
    {
      title: "Body Waxing (Cire)",
      icon: "✨",
      subtitle: "Individual body areas",
      items: [
        { name: "Nose", price: "€4" },
        { name: "Underarms", price: "€8" },
        { name: "Half arms", price: "€10" },
        { name: "Full arms", price: "€15" },
        { name: "Half legs", price: "€15" },
        { name: "Full legs", price: "€22" },
        { name: "Three-quarter legs", price: "€17" },
        { name: "Thighs", price: "€15" },
        { name: "Stomach", price: "€7" },
        { name: "Full back", price: "€12" },
        { name: "Full buttocks", price: "€10" },
        { name: "Simple bikini", price: "€10" },
        { name: "Semi-integral bikini", price: "€15" },
        { name: "Integral bikini", price: "€22" },
      ],
    },
    {
      title: "Epilation Packages",
      icon: "🧖",
      subtitle: "Full body waxing packages",
      items: [
        {
          name: "Half legs + underarms + simple bikini",
          price: "€30",
        },
        {
          name: "Half legs + underarms + full bikini",
          price: "€39",
        },
        {
          name: "Full legs + underarms + full bikini",
          price: "€45",
        },
        {
          name: "Full legs + underarms + full bikini + full arms",
          price: "€63",
        },
      ],
    },
  ],

  "FACE & BROW": [
    {
      title: "Skin Facials",
      icon: "✨",
      subtitle: "Face care & treatments",
      items: [
        {
          name: "Soin du visage (40 mins)",
          desc: "Cleansing + exfoliation + steam + blackhead removal + mask",
          price: "€27",
        },
        {
          name: "Soin spécial du visage (50 mins)",
          desc: "Pigmentation & acne treatment",
          price: "€35",
        },
        { name: "SB Special soin du visage (1h)", price: "€45" },
      ],
    },
    {
      title: "Eye & Brow",
      icon: "👁️",
      subtitle: "Tinting and brow lift",
      items: [
        { name: "Eyebrow tint", price: "€8" },
        { name: "Eyelash tint", price: "€10" },
        { name: "Tint package + eyebrow epilation", price: "€12" },
        {
          name: "Eye brow lift",
          desc: "Brow lamination, brow lift, epilation, tint",
          price: "€40",
        },
      ],
    },
  ],

  MASSAGE: [
    {
      title: "Massage Treatments",
      icon: "💆",
      subtitle: "Body relaxation & wellness",
      items: [
        {
          name: "Massage Ayurvédique",
          desc: "Relaxing full-body massage with warm oil",
          price: "€50",
        },
        {
          name: "Massage des pieds / dos / tête (30 mins)",
          desc: "Warm oil massage",
          price: "€30",
        },
        { name: "Avec gommage", price: "€275" },
      ],
    },
  ],

  HENNA: [
    {
      title: "Henna Art",
      icon: "🌿",
      subtitle: "Traditional hand & bridal henna",
      items: [
        { name: "Henné dessin", price: "€5" },
        { name: "Henné mariage", price: "€30" },
      ],
    },
  ],

  "LASHES & MORE": [
    {
      title: "Fake Eyelashes",
      icon: "👁️",
      subtitle: "Lash services",
      items: [
        { name: "Pose de faux cils normal", price: "€25" },
        { name: "Enlever de faux cils", price: "€10" },
      ],
    },
    {
      title: "Diamond Tooth",
      icon: "💎",
      subtitle: "Decorative tooth jewel",
      items: [{ name: "Diamant pour les dents", price: "€8" }],
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
    useState<keyof typeof pricingData>("NAILS");

  return (
    <section id="menu" className="bg-[#f8eef1] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p
            className={`${nunito.className} flex items-center justify-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#C9A84C]`}
          >
            <span className="inline-block h-px w-8 bg-[#C9A84C]" />
            Price Menu
          </p>
          <h2
            className={`${playfair.className} mt-4 text-5xl md:text-7xl text-[#6B0F2B]`}
          >
            Our <span className="italic text-[#C9A84C]">full price list</span>
          </h2>
          <p className={`${nunito.className} mt-4 text-[#9A6070]`}>
            All prices are inclusive. Walk-ins welcome. We also take appointments by phone.
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