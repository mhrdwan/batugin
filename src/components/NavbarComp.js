import React from 'react'
import logo from "../../public/assets/LOGO BATUGIN-01.png"
import Image from 'next/image'

function NavbarComp() {
    const heightInPx = 3 * 16;
    const widthInPx = 6.25 * 16; 

    return (
        <div className='bg-white text-black md:h-[5.5rem] px-32 grid grid-cols-2 items-center'>
            <div className='flex justify-start items-center'>
                <Image height={heightInPx} width={widthInPx} src={logo} alt="Logo Batugin" />
            </div>
            <div className='flex justify-end gap-6 items-center text-[1rem]'>
                <div>About</div>
                <div>Store</div>
                <div>Points</div>
                <button className='bg-accents-2 text-white font-semibold text-base leading-normal px-5 py-2 rounded hover:bg-accents-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' style={{ width: '100px', height: '48px' }}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default NavbarComp
