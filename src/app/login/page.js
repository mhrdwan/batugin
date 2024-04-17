import NavbarComp from '@/components/NavbarComp';
import Image from 'next/image';
import React from 'react';
import gambAr from "../../../public/assets/loginKiri.png";

function page() {
  return (
    <div>
        <NavbarComp/>
        <div className='flex'>
            <div className='relative w-full h-screen bg-red-400'>
                <Image src={gambAr} layout='fill' objectFit='cover'/>
            </div>
            <div className='w-full bg-yellow-400 h-screen'>2</div>
        </div>
    </div>
  );
}

export default page;
