import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-15 bg-[#FDF6F0]/90 backdrop-blur-md grid grid-cols-2'>
        <div className=''>
            <Image src={"/logo/logo.jpeg"} alt='logo' height={100} width={100} />
        </div>
        <div className='flex items-center justify-center'>
            <ul className='flex justify-center gap-2 items-center'>
                <li>SERVICES</li>
                <li>PRICINGS</li>
                <li>ABOUT</li>
                <li>REVIEWS</li>
                <li>CONTACT</li>
            </ul>
            <Butto
        </div>
    </div>
  )
}

export default Navbar