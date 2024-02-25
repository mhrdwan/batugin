'use client'
import NavbarComp from '@/components/NavbarComp'
import NorifReward from '@/components/NorifReward'
import React, { useEffect, useRef } from 'react'
import fotoPros from "../../../public/assets/foto-prostad.png"
import Image from 'next/image'
import Orang from "../../../public/assets/orang.png"
import Orang2 from "../../../public/assets/orang 2.png"
import SwipperDashboard from '@/components/Swipper'
import FooterComp from '@/components/Home/Footer'
function page() {
  const apaItuRef = useRef(null);
  useEffect(() => {
    if (apaItuRef.current) {
      apaItuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const KataMereka = [
    {
      id: 1,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang
    },
    {
      id: 2,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang2
    },
    {
      id: 2,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang
    },
    {
      id: 2,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang2
    },
  ]

  return (
    <div>
      <div ref={apaItuRef}>
        <NavbarComp />
      </div>
      <NorifReward />
      <div className='warp-batugin grid grid-cols-2 mt-4  max-w-screen-xl  mx-auto bg-white'>
        <div>
          <Image src={fotoPros} />
        </div>
        <div>
          <h3 className='text-[2.25rem] text-secondary-3 font-semibold'>Batugin Elixir Regular Size</h3>
          <div className='mt-10'>
            <p className='text-neutral-4 text-[1.25rem] font-medium'>Ukuran produk</p>
            <p className='mt-3 text-[1rem]'>120ml</p>
            <p className='mt-7 text-neutral-4 text-[1.25rem] font-medium'>Desktipsi Produk</p>
            <div className='mt-5 text-neutral-3'>Batugin Elixir merupakan elixir herbal dengan kandungan ekstrak Sonchus arventis folia dan ekstrak Strobilanthus crispus folia. Batugin digunakan untuk membantu meluruhkan batu urin (nefrolitiasis) dan batu saluran kemih (uretrolitisis), serta membantu melancarkan buang air kecil.</div>
          </div>
          <button className='bg-accents-2 border text-[1.25rem] border-accents-2 text-white font-semibold text-base leading-normal w-[10rem] h-[3.75rem] px-2 py-2 mt-[2.5rem] hover:bg-accents-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
            Beli Sekarang
          </button>
        </div>
      </div>
      <div className='big-size bg-primary-2 h-[44rem] mt-[10rem] flex justify-center items-center'>
        <div className=' md:max-w-[90rem] md:w-full w-[30rem] h-[33rem] mx-auto p-4 grid grid-cols-2 '>
          <div>
            <h3 className='text-accents-2 text-[2.25rem] font-medium'>Batugin Elixir Big Size</h3>
            <p className='text-neutral-4 text-[1.25rem] font-medium mt-10'>Ukuran produk</p>
            <p className='text-neutral-3 text-[1rem] text-base mt-4'>300 ml</p>
            <p className='text-neutral-4 text-[1.25rem] font-medium mt-10'>Desktipsi Produk</p>
            <p className='text-neutral-3 text-[1rem] text-base mt-3'>Batugin Elixir merupakan elixir herbal dengan kandungan ekstrak Sonchus arventis folia dan ekstrak Strobilanthus crispus folia. Batugin digunakan untuk membantu meluruhkan batu urin (nefrolitiasis) dan batu saluran kemih (uretrolitisis), serta membantu melancarkan buang air kecil.</p>
            <button className='bg-accents-2 border text-[1.25rem] border-accents-2 text-white font-semibold text-base leading-normal w-[10rem] h-[3.75rem] px-2 py-2 mt-[2.5rem] hover:bg-accents-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
              Beli Sekarang
            </button>
          </div>
          <div className='foto-produk'>
            <Image src={fotoPros} />
          </div>
        </div>
      </div>
      <div className='carousel md:mt-[10rem]'>
        <SwipperDashboard KataMereka={KataMereka} />
      </div>
      <div className='carousel '>
        <FooterComp />
      </div>
    </div>
  )
}

export default page