import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


function SwipperDashboard({ KataMereka }) {
    const [spaceBetween, setSpaceBetween] = useState(400); // State awal untuk spaceBetween

    useEffect(() => {
        // Fungsi untuk memeriksa ukuran layar dan mengatur spaceBetween
        const checkMediaQuery = () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                setSpaceBetween(600); // spaceBetween untuk ukuran md ke atas
            } else {
                setSpaceBetween(400); // spaceBetween untuk ukuran di bawah md
            }
        };

        // Memanggil fungsi saat komponen dimount
        checkMediaQuery();

        // Menambahkan event listener untuk resize window
        window.addEventListener('resize', checkMediaQuery);

        // Membersihkan event listener saat komponen di-unmount
        return () => window.removeEventListener('resize', checkMediaQuery);
    }, []);

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={spaceBetween}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop

            modules={[Autoplay]} className="mySwiper">
            {KataMereka.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex gap-4 md:h-[19rem] md:w-[43rem] relative border bg-white shadow-lg  '>
                        <div className='h-full w-full relative'>
                            <Image src={item.foto} alt="Image Description" layout="fill" objectFit="cover" />
                        </div>
                        <div className='flex flex-col justify-center ml-4'>
                            <p className='text-[1.6rem] text-accents-2 font-semibold underline'>Apa kata mereka?</p>
                            <p className='mt-4 text-neutral-4'>{item.desc}</p>
                            <p className='text-secondary-2 mt-[5rem]'>{item.name}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default SwipperDashboard;
