import NavbarComp from '@/components/NavbarComp'
import NorifReward from '@/components/NorifReward'
import PointKamu from '@/components/PointKamu/page'
import React from 'react'

export default function page() {
  return (
    <div>
        <NavbarComp/>
        <NorifReward />
        <PointKamu/>
    </div>
  )
}
