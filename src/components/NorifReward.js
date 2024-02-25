import React, { useEffect, useState } from 'react';

function NorifReward() {
    const [NavbarState, setNavbarState] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            // console.log(currentPosition)
            if (currentPosition > 89) {
                console.log('Lebih dari 10');
                setNavbarState(true)
            } else {
                setNavbarState(false)
                console.log('Di bawah 10');
            }
        };

        // Menambahkan event listener ke window untuk mendeteksi scroll
        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener ketika komponen di-unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Dependency array kosong berarti useEffect ini hanya dijalankan sekali saat komponen dimuat

    return (
        <div
            className={`text-center ${NavbarState ? "fixed top-0" : ""} w-full bg-primary-2 h-[3rem] items-center flex justify-center text-neutral-4 font-semibold md:text-[1rem]`}
            style={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.25)',
                zIndex: 10 // Tambahkan z-index jika perlu
            }}>
            Kumpulkan points mu, dapatkan reward menarik dari Batugin!
        </div>
    );
}

export default NorifReward;
