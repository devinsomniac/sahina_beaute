import React from 'react'
import { nunito, playfair } from '@/app/font'
import { IoHeartCircleSharp } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { FaClock } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';



const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#FDF6F0] via-[#f1d3d3] to-[#e6bcbc]'>
            {/* Left Side */}
            <div className='flex flex-col justify-center items-start px-10  md:mx-36'>
                <div className={`${nunito.className} border-2 border-[#C9A84C] bg-burgundy/20 tracking-widest uppercase font-extralight px-4 rounded-full text-burgundy/90 flex gap-2  items-center text-xs md:text-sm`}><IoHeartCircleSharp className='animate-ping' />INDIAN BEAUTY SALON <span className='font-bold text-2xl '>.</span> Salon réserve aux femmes</div>
                <div className='mt-2'>
                    <h1 className={`${playfair.className} text-5xl md:text-6xl text-burgundy/80`}>Welcome to</h1>
                    {/* <h1 className={`${playfair.className} text-6xl md:text-8xl text-burgundy font-bold`}>Sahina</h1>
                    <h1 className={`${playfair.className} text-6xl md:text-8xl text-[#C9A84C] italic font-bold`}>Beauté</h1> */}
                    <div className='flex justify-center items-center mt-2'>
                        <Image src={"/logo/logo.png"} alt='Logo' height={400} width={400} className='object-contain' />
                    </div>
                    <p className={`${nunito.className} text-burgundy/90`} >our exclusive Indian beauty sanctuary in Saint-Denis. Expert care for hands,feet, face, hair, waxing, henna and much more — with or without appointment.</p>
                </div>
                <div className={`${nunito.className} flex flex-wrap gap-3 mt-6 text-burgundy/90`}>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">💅 Nails</span>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">🌸 Waxing</span>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">✨ Facials</span>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">🌿 Henna</span>
                    <span className="px-4 py-2 rounded-full bg-white/50 border border-[#C9A84C]/40 text-sm">👁️ Lashes</span>
                </div>


            </div>
            {/* Right Side */}
            <div className='flex flex-col justify-center items-center '>

                <div className="grid grid-cols-2 grid-rows-3 gap-3 mt-4 w-full max-w-[520px] h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] p-3 md:p-0">
                    <div className="row-span-2 rounded-2xl overflow-hidden relative">
                        <Image
                            src="/Images/eye.jpeg"
                            alt="lashes"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="row-span-1 rounded-2xl overflow-hidden relative">
                        <Image
                            src="/Images/facial.jpeg"
                            alt="facial"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="row-span-2 rounded-2xl overflow-hidden relative">
                        <Image
                            src="/Images/Nail.jpeg"
                            alt="nails"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="row-span-2 rounded-2xl overflow-hidden relative">
                        <Image
                            src="/Images/Wax.jpeg"
                            alt="waxing"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                    <div className={`${nunito.className} flex items-center gap-1 text-burgundy/90 text-sm`}><FaClock /> Open 7J/7 DE 10H00 - 20H00</div>
                    <div className={`${nunito.className} flex items-center gap-1 text-burgundy/90 text-sm`}><FaLocationArrow /> 8 Rue Dezobry - 93200 Saint -Denis</div>
                </div>
                <div className='flex gap-2 mt-4 flex-col md:flex-row'>
                    <Button className={`${nunito.className} p-6 bg-burgundy rounded-full`}>Book Appointment</Button>
                    <Button className={`${nunito.className} p-6 bg-burgundy/10 border-2 border-burgundy rounded-full`} variant={'outline'}>View Pricing Menu</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero