import React from "react";
import { playfair, nunito } from "@/app/font";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: "📍",
    label: "Adresse",
    value: ["8 Rue Dezobry", "93200 Saint-Denis, France"],
  },
  {
    icon: "📞",
    label: "Téléphone",
    value: ["09 56 94 01 69", "07 58 50 65 61"],
  },
  {
    icon: "📱",
    label: "Instagram",
    value: ["@sahina_beaute"],
  },
  {
    icon: "🎵",
    label: "TikTok",
    value: ["@sahina.beaute"], 
  },
];

const Contact = () => {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-[#f6e9eb] px-6 py-16 md:px-10 lg:px-16 xl:px-20">
        <p
          className={`${nunito.className} flex items-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#C9A84C]`}
        >
          <span className="inline-block h-px w-8 bg-[#C9A84C]" />
          Nous trouver
        </p>

        <h2
          className={`${playfair.className} mt-5 text-4xl leading-tight text-[#6B0F2B] md:text-5xl xl:text-6xl`}
        >
          Venez chez <span className="italic text-[#C9A84C]">Sahina Beauté</span>
        </h2>

        <div className="mt-10 flex flex-col gap-7">
          {contactItems.map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#efc0c9] text-lg">
                {item.icon}
              </div>

              <div>
                <p
                  className={`${nunito.className} uppercase tracking-[0.25em] text-[11px] text-[#C9A84C]`}
                >
                  {item.label}
                </p>
                <div
                  className={`${nunito.className} mt-1 space-y-1 text-[#9A6070]`}
                >
                  {item.value.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://maps.google.com/?q=8+Rue+Dezobry+93200+Saint-Denis"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className={`${nunito.className} rounded-full bg-[#7c0828] px-8 uppercase tracking-[0.18em] text-xs text-white hover:bg-[#8f1236]`}
            >
              📍 Ouvrir dans Google Maps
            </Button>
          </a>
        </div>
      </div>

      <div className="bg-[#fcf9fa] px-6 py-16 md:px-10 lg:px-16 xl:px-20">
        <div
          className={`${nunito.className} inline-flex items-center gap-2 rounded-full border border-[#e3cfd5] bg-[#f7eef1] px-4 py-2 uppercase tracking-[0.2em] text-xs text-[#9A6070]`}
        >
          🕘 Ouvert 7j/7
        </div>

        <h3 className={`${playfair.className} mt-12 text-4xl text-[#6B0F2B]`}>
          Horaires d’ouverture
        </h3>

        <div className="mt-8 border-b border-[#eadfe2] pb-5">
          <div className="flex items-center justify-between gap-4">
            <p className={`${nunito.className} text-[#6B0F2B]`}>
              Lundi – Dimanche
            </p>
            <p className={`${playfair.className} text-2xl text-[#7c0f2f]`}>
              10:00 – 20:00
            </p>
          </div>
        </div>

        <p
          className={`${nunito.className} mt-8 max-w-2xl leading-8 text-[#9A6070]`}
        >
          Les visites sans rendez-vous sont toujours les bienvenues. Pour les
          forfaits mariée ou les rendez-vous en groupe, il est recommandé
          d’appeler à l’avance afin de garantir la disponibilité.
        </p>

        <div className="mt-10">
          <a href="#booking">
            <Button
              className={`${nunito.className} h-12 w-full rounded-full bg-[#7c0828] uppercase tracking-[0.18em] text-xs text-white shadow-lg hover:bg-[#8f1236]`}
            >
              Prendre rendez-vous →
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;