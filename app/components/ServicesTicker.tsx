const services = [
  "ÉPILATION AU FIL",
  "TEINTURE SOURCILS",
  "MANUCURE",
  "PÉDICURE",
  "ÉPILATION À LA CIRE",
  "HENNÉ ARTISTIQUE",
  "SOINS DU VISAGE",
  "MASSAGE AYURVÉDIQUE",
  "FAUX ONGLES",
  "FAUX CILS",
];

export default function ServicesTicker() {
  return (
    <div className="w-full overflow-hidden bg-burgundy py-3">
      <div className="flex w-max animate-marquee">
        {[...services, ...services].map((service, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-8 px-6 text-[#C9A84C] uppercase tracking-[0.25em] text-xs md:text-sm whitespace-nowrap"
          >
            <span>✦</span>
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}