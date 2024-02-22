import React from 'react'
import Batugin_Product from '../../../public/assets/Batugin Product.png'
import Image from 'next/image'

function ApaItu() {
    return (
        <div className='bg-primary-1 h-[53.5rem] '>
            <div className='warpnya grid grid-cols-1 md:grid-cols-2 ml-[7.5rem] mr-[7.5rem] '>
                <div>

                    <Image className='mt-[15.6rem]' height={373} width={486} src={Batugin_Product} alt="Gambar Produk Batugin" />
                </div>
                <div className='mt-[17.6rem]'>
                    <p className='text-secondary-2 text-[2.25rem] font-semibold underline decoration-[3px] underline-offset-[6px] decoration-red-500'>
                        Apa itu Batugin?
                    </p>
                    <p className='text-[1.25rem] text-black'>Batugin itu adalah sediaan elixir yang mengandung bahan herbal, seperti ekstrak daun tempuyung, ekstrak daun keji beling, dan bahan-bahan lainnya. Fungsi Batugin adalah untuk membantu meluruhkan batu urine yang terdapat di ginjal dan saluran kemih, serta membuat buang air kecil lebih lancar.</p>
                    <button className='bg-accents-2 border text-[1.25rem] border-accents-2 text-white font-semibold text-base leading-normal w-[10rem] h-[3.75rem] px-2 py-2 mt-[2rem] hover:bg-accents-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Beli Produk</button>
                </div>


            </div>
        </div>
    )
}

export default ApaItu