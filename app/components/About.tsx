import React from "react";
import { playfair, nunito } from "@/app/font";
import Image from "next/image";

const aboutPoints = [
    "Exclusively for women — private and comfortable",
    "Open 7 days a week, 10:00 to 20:00",
    "Walk-ins welcome — no appointment necessary",
    "Authentic Indian beauty techniques and quality care",
    "Bridal packages available — henna, beauty and more",
];

const About = () => {
    return (
        <section
            id="about"
            className="bg-[#FDF6F0] px-6 py-16 md:px-10 lg:px-16 xl:px-20"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="relative">
                    <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden">
                        <Image
                            src="/Images/bridal.jpeg"
                            alt="Sahina Beauté"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 flex items-end p-8">
                            <p
                                className={`${playfair.className} max-w-md text-lg italic leading-8 text-white md:text-xl`}
                            >
                                “Every woman deserves to feel beautiful — with or without an appointment.”
                            </p>
                        </div>
                    </div>

                    <div className="absolute -right-4 -top-4 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#d9bb63] text-center shadow-xl md:h-32 md:w-32">
                        <span
                            className={`${nunito.className} text-[10px] uppercase tracking-[0.22em] text-[#6B0F2B]/70`}
                        >
                            Open
                        </span>
                        <span
                            className={`${playfair.className} text-4xl leading-none text-[#6B0F2B]`}
                        >
                            7/7
                        </span>
                        <span
                            className={`${nunito.className} mt-1 text-[10px] uppercase tracking-[0.18em] text-[#6B0F2B]/70`}
                        >
                            Every Day
                        </span>
                    </div>
                </div>

                <div>
                    <p
                        className={`${nunito.className} flex items-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#C9A84C]`}
                    >
                        <span className="inline-block h-px w-8 bg-[#C9A84C]" />
                        About Us
                    </p>

                    <h2
                        className={`${playfair.className} mt-5 text-4xl leading-tight text-[#6B0F2B] md:text-5xl xl:text-6xl`}
                    >
                        Your <span className="italic text-[#C9A84C]">Indian beauty</span>{" "}
                        home in Saint-Denis
                    </h2>

                    <p
                        className={`${nunito.className} mt-6 text-base leading-8 text-[#9A6070]`}
                    >
                        Sahina Beauté is a women-only Indian beauty salon located in
                        Saint-Denis. The salon offers a wide range of beauty and wellness
                        services including hand beauty, foot beauty, facials, fake nails,
                        manicure, épilation, henna, massage, lashes and more.
                    </p>

                    <p
                        className={`${nunito.className} mt-5 text-base leading-8 text-[#9A6070]`}
                    >
                        From everyday self-care to special-event preparation, the salon
                        combines traditional Indian beauty elements with modern salon
                        treatments. The menu also shows bridal henna and multiple premium
                        beauty packages, making it suitable for both regular visits and
                        occasion-based bookings.
                    </p>

                    <p
                        className={`${nunito.className} mt-5 text-base leading-8 text-[#9A6070]`}
                    >
                        Clients can visit for walk-in appointments, and the salon is open
                        seven days a week from 10:00 to 20:00. The branding and service menu
                        also clearly position it as a women-reserved Indian beauty salon.
                    </p>

                    <div className="mt-8 flex flex-col gap-4">
                        {aboutPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;