import React from 'react'
import FollowBatugin from '../Home/Follow'
import FooterComp from '../Home/Footer'

function KolaborasiBatugin() {
  return (
    <div className='bg-white'>
        <div className='w-full h-[50rem]  mt-10'>
            <FollowBatugin/>
        </div>
        <div className='mt-10'>
            <FooterComp/>
        </div>
    </div>
  )
}

export default KolaborasiBatugin