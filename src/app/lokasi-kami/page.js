import FooterComp from '@/components/Home/Footer'
import LokasiKamiBaru from '@/components/LokasiKamiBaru/LokasiKamiBaru'
import NavbarComp from '@/components/NavbarComp'
import NorifReward from '@/components/NorifReward'
import React from 'react'

function LokasiKami() {
  return (
    <div>
        <NavbarComp/>
        <NorifReward/>
        <div className='pl-[120px] flex justify-center pr-[120px]'>
        <LokasiKamiBaru/>
        </div>
        <div className='mt-10'>
            <FooterComp/>
        </div>
    </div>
  )
}

export default LokasiKami