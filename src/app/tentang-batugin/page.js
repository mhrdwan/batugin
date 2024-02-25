import NavbarComp from '@/components/NavbarComp'
import NorifReward from '@/components/NorifReward'
import React from 'react'
import Batugin_Product from '../../../public/assets/Batugin Product.png'
import image1 from '../../../public/assets/image 2.png'
import image2 from '../../../public/assets/image 3.png'
import Image from 'next/image'

function Page() {
  return (
    <div className='bg-primary-1 w-full'>
      <NavbarComp />
      <NorifReward />
      <div className='banner w-full  md:h-[37.1rem] grid grid-cols-1 md:grid-cols-2' style={{ backgroundImage: "url('/assets/Banner AboutUs.png')" }}>
        <div>
          <Image src={Batugin_Product} alt="Batugin Product" />
        </div>
        <div className='mt-5 md:mt-[11rem]'> {/* Contoh mengurangi margin top pada resolusi medium */}
          <p className='text-[4rem] font-semibold leading-tight'>Tentang</p> {/* Contoh mengatur line height */}
          <p className='font-semibold text-secondary-2 text-[8rem] leading-none'>Batugin</p> {/* Contoh mengatur line height menjadi none */}
        </div>
      </div>
      <div className='mt-[5rem]  ml-[5rem]'>
        <p className='text-secondary-2 text-[1.5rem] font-semibold underline decoration-[3px] underline-offset-[6px] decoration-red-500'>
          Apa itu Daun Tempuyung?
        </p>
      </div>
      <div className='mt-[5rem] flex w-full flex-wrap'>
        <div className='w-full md:w-1/3 p-2 hover:cursor-pointer'>
          <Image src={image1} alt="Deskripsi Image 1" layout="responsive" width={700} height={475} /> 
        </div>
        <div className='w-full md:w-1/3 p-2 hover:cursor-pointer'>
          <Image src={image2} alt="Deskripsi Image 2" layout="responsive" width={700} height={475} />
        </div>
        <div className='w-full md:w-1/3 p-2 hover:cursor-pointer'>
          <Image src={image2} alt="Deskripsi Image 3" layout="responsive" width={700} height={475} />
        </div>
      </div>

    </div>
  );
}

export default Page;
