import React from 'react';
import footer from "../../../public/assets/footer.png";
import logo from "../../../public/assets/LOGO BATUGIN-01.png";
import Image from 'next/image';

function FooterComp() {
    return (
        <div className='mt-[20rem] flex justify-center items-center '>
            <div className='h-[19rem] w-full bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url('${footer.src}')` }}>
                <div className='flex justify-center items-center h-full'>
                    <div className='grid grid-cols-5 gap-4 w-full justify-items-center'> 
                        <div className='flex justify-center'> 
                            <Image src={logo} />
                        </div>
                        <div className='flex flex-col text-start'>
                            <div className='font-semibold text-accents-2 text-[1.25rem]'>Tentang</div>
                            <div className='text-[1rem] text-accents-2 '>
                                <div>About</div>
                                <div>Help Center</div>
                                <div>Store</div>
                            </div>
                        </div>
                        <div className='flex flex-col text-start'>
                            <div className='font-semibold text-accents-2 text-[1.25rem]'>Social Media</div>
                            <div className='text-[1rem] text-accents-2 '>
                                <div>Instagram</div>
                                <div>Facebook</div>
                                <div>Twitter</div>
                            </div>
                        </div>
                        <div className='flex flex-col text-start'>
                            <div className='font-semibold text-accents-2 text-[1.25rem]'>Social Media</div>
                            <div className='text-[1rem] text-accents-2 '>
                                <div>Instagram</div>
                                <div>Facebook</div>
                                <div>Twitter</div>
                            </div>
                        </div>
                        <div className='flex flex-col text-start'>
                            <div className='font-semibold text-accents-2 text-[1.25rem]'>Social Media</div>
                            <div className='text-[1rem] text-accents-2 '>
                                <div>Instagram</div>
                                <div>Facebook</div>
                                <div>Twitter</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComp;
