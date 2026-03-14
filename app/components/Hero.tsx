"use client";
import { nunito, playfair } from "@/app/font";
import { IoHeartCircleSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FaClock } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 bg-gradient-to-br from-[#FDF6F0] via-[#f1d3d3] to-[#e6bcbc] md:grid-cols-2">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center px-5 py-8 sm:px-6 md:px-8 lg:px-10"
      >
        <div className="w-full max-w-[620px] md:ml-10 lg:ml-14 xl:ml-20">
          <div
            className={`${nunito.className} mt-3 flex w-full max-w-[340px] flex-col items-center gap-2 rounded-full border-2 border-[#C9A84C] bg-burgundy/20 px-4 py-2 text-[10px] font-extralight uppercase tracking-[0.18em] text-burgundy/90 sm:text-xs md:mt-0 md:max-w-[320px] md:flex-row md:tracking-widest`}
          >
            <IoHeartCircleSharp className="shrink-0 animate-ping" />
            <p className="text-center leading-4 sm:leading-5">
              Salon de beauté indien
              <br />
              Salon réservé aux femmes
            </p>
          </div>

          <div className="mt-4 w-full">
            <h1
              className={`${playfair.className} text-center text-4xl leading-tight text-burgundy/80 sm:text-5xl md:text-left md:text-6xl`}
            >
              Bienvenue à
            </h1>

            {/* Logo block */}
            <div className="relative mx-auto mt-3 flex w-full max-w-[320px] items-center justify-center sm:max-w-[360px] md:ml-auto md:mr-0 md:max-w-[430px] lg:max-w-[480px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex w-full justify-center md:justify-start"
              >
                <Image
                  src="/logo/logo.png"
                  alt="Logo Sahina Beauté"
                  width={500}
                  height={500}
                  className="h-auto w-full object-contain"
                  priority
                />
              </motion.div>

              {/* Offer badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="absolute -right-3 -top-2 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border-[3px] border-white bg-[#D9BB63] text-center shadow-[0_12px_35px_rgba(91,22,48,0.28)] sm:-right-6 sm:-top-3 sm:h-24 sm:w-24 md:-right-8 md:-top-4 md:h-28 md:w-28 lg:-right-10 lg:-top-5 lg:h-32 lg:w-32"
              >
                <span
                  className={`${playfair.className} my-[1px] text-xl leading-none text-[#6B0F2B] sm:text-2xl md:text-3xl lg:text-4xl`}
                >
                  -20%
                </span>
                <span
                  className={`${nunito.className} text-[6px] font-bold uppercase leading-none tracking-[0.14em] text-[#6B0F2B]/80 sm:text-[7px] md:text-[8px]`}
                >
                  sur tous
                </span>
                <span
                  className={`${nunito.className} text-[6px] font-bold uppercase leading-none tracking-[0.14em] text-[#6B0F2B]/80 sm:text-[7px] md:text-[8px]`}
                >
                  les services
                </span>
              </motion.div>
            </div>

            <p
              className={`${nunito.className} mx-auto mt-4 max-w-[340px] text-center text-sm leading-7 text-burgundy/90 sm:text-base md:mx-0 md:max-w-[560px] md:text-left`}
            >
              Notre institut de beauté indien exclusif à Saint-Denis. Soins
              experts pour les mains, les pieds, le visage, les cheveux,
              épilation, henné et bien plus encore — avec ou sans rendez-vous.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`${nunito.className} mt-6 flex w-full max-w-[360px] flex-wrap items-center justify-center gap-3 text-burgundy/90 md:max-w-[600px] md:justify-start`}
          >
            <span className="rounded-full border border-[#C9A84C]/40 bg-white/50 px-4 py-2 text-sm">
              💅 Nails
            </span>
            <span className="rounded-full border border-[#C9A84C]/40 bg-white/50 px-4 py-2 text-sm">
              🌸 Waxing
            </span>
            <span className="rounded-full border border-[#C9A84C]/40 bg-white/50 px-4 py-2 text-sm">
              ✨ Facials
            </span>
            <span className="rounded-full border border-[#C9A84C]/40 bg-white/50 px-4 py-2 text-sm">
              🌿 Henna
            </span>
            <span className="rounded-full border border-[#C9A84C]/40 bg-white/50 px-4 py-2 text-sm">
              👁️ Lashes
            </span>
          </motion.div>

          <p
            className={`${nunito.className} mt-4 text-center text-xs leading-6 text-burgundy/70 md:text-left`}
          >
            * Offre valable pour l'ouverture, pendant un mois.
          </p>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col items-start justify-center pb-8 md:pb-0"
      >
        <div className="mt-4 grid h-[320px] w-full max-w-[660px] grid-cols-2 grid-rows-3 gap-3 p-3 sm:h-[380px] md:h-[550px] md:p-0 lg:h-[550px]">
          <div className="relative row-span-2 overflow-hidden rounded-2xl">
            <Image
              src="/Images/eye.jpeg"
              alt="lashes"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative row-span-1 overflow-hidden rounded-2xl">
            <Image
              src="/Images/facial.jpeg"
              alt="facial"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative row-span-2 overflow-hidden rounded-2xl">
            <Image
              src="/Images/Nail.jpeg"
              alt="nails"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative row-span-2 overflow-hidden rounded-2xl">
            <Image
              src="/Images/Wax.jpeg"
              alt="waxing"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-3 px-4 text-center md:flex-row md:text-left">
          <div
            className={`${nunito.className} flex items-center gap-1 text-sm text-burgundy/90`}
          >
            <FaClock /> Open 7J/7 DE 10H00 - 20H00
          </div>
          <div
            className={`${nunito.className} flex items-center gap-1 text-sm text-burgundy/90`}
          >
            <FaLocationArrow /> 8 Rue Dezobry - 93200 Saint-Denis
          </div>
        </div>

        <div className="mb-2 mt-4 flex flex-col gap-2 px-4 sm:flex-row">
          <a href="#booking">
            <Button className={`${nunito.className} rounded-full bg-burgundy p-6`}>
              Prendre rendez-vous
            </Button>
          </a>
          <a href="#menu">
            <Button
              className={`${nunito.className} rounded-full border-2 border-burgundy bg-burgundy/10 p-6`}
              variant="outline"
            >
              Voir le menu des tarifs
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;