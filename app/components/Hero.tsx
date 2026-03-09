"use client"
import { nunito, playfair } from '@/app/font'
import { IoHeartCircleSharp } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { FaClock } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#FDF6F0] via-[#f1d3d3] to-[#e6bcbc]'>

            {/* Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-col justify-center items-start px-10 md:mx-36'
            >
                <div className={`${nunito.className} border-2 mt-4 py-1 w-full md:w-[300px] flex-col items-center md:flex-row  md:mt-0 border-[#C9A84C] bg-burgundy/20 tracking-widest uppercase font-extralight px-4 rounded-full text-burgundy/90 flex gap-2 items-center text-xs md:text-sm`}>
                    <IoHeartCircleSharp className='animate-ping' />
                    <p className=' text-center'>Salon de beauté indien <br></br>
                    Salon réserve aux femmes</p>
                    
                </div>

                <div className='mt-2'>
                    <h1 className={`${playfair.className} text-5xl md:text-6xl text-burgundy/80 text-center md:text-left`}>
                        Welcome to
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className='flex justify-center items-center mt-2'
                    >
                        <Image
                            src={"/logo/logo.png"}
                            alt='Logo'
                            height={500}
                            width={500}
                            className='object-contain'
                        />
                    </motion.div>

                    <p className={`${nunito.className} text-burgundy/90 text-center`}>
                        Notre institut de beauté indien exclusif à Saint-Denis. Soins experts pour les mains, les pieds, le visage, les cheveux, épilation, henné et bien plus encore — avec ou sans rendez-vous.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className={`${nunito.className} md:w-[600px] flex flex-wrap gap-3 mt-6 text-burgundy/90 justify-center items-center`}
                >
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">💅 Nails</span>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">🌸 Waxing</span>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">✨ Facials</span>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">🌿 Henna</span>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">👁️ Lashes</span>
                </motion.div>
            </motion.div>

            {/* Right Side */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className='flex flex-col justify-center items-center'
            >
                <div className="grid grid-cols-2 grid-rows-3 gap-3 mt-4 w-full max-w-[660px] h-[320px] sm:h-[380px] md:h-[550px] lg:h-[550px] p-3 md:p-0">
                    <div className="row-span-2 rounded-2xl overflow-hidden relative">
                        <Image src="/Images/eye.jpeg" alt="lashes" fill className="object-cover object-center" />
                    </div>

                    <div className="row-span-1 rounded-2xl overflow-hidden relative">
                        <Image src="/Images/facial.jpeg" alt="facial" fill className="object-cover object-center" />
                    </div>

                    <div className="row-span-2 rounded-2xl overflow-hidden relative">
                        <Image src="/Images/Nail.jpeg" alt="nails" fill className="object-cover object-center" />
                    </div>

                    <div className="row-span-2 rounded-2xl overflow-hidden relative">
                        <Image src="/Images/Wax.jpeg" alt="waxing" fill className="object-cover object-center" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4 mt-4 items-center justify-center'>
                    <div className={`${nunito.className} flex items-center gap-1 text-burgundy/90 text-sm`}>
                        <FaClock /> Open 7J/7 DE 10H00 - 20H00
                    </div>
                    <div className={`${nunito.className} flex items-center gap-1 text-burgundy/90 text-sm`}>
                        <FaLocationArrow /> 8 Rue Dezobry - 93200 Saint -Denis
                    </div>
                </div>

                <div className='flex gap-2 mt-4 flex-col md:flex-row mb-2'>
                    <a href="#booking">
                        <Button className={`${nunito.className} p-6 bg-burgundy rounded-full`}>
                           Prendre rendez-vous
                        </Button>
                    </a>
                    <a href="#menu">
                        <Button
                            className={`${nunito.className} p-6 bg-burgundy/10 border-2 border-burgundy rounded-full`}
                            variant={"outline"}
                        >
                             Voir le menu des tarifs
                        </Button>
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero