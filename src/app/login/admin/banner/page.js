'use client'
import React from 'react'
import Sidebar from '../page'
import { usePathname } from 'next/navigation';

export default function Banner() {
    const routerr = usePathname()
    const pathSegments = routerr.split('/');
    const adminIndex = pathSegments.indexOf('admin');
    const partAfterAdmin = adminIndex !== -1 && adminIndex + 1 < pathSegments.length
      ? pathSegments.slice(adminIndex + 1).join('/')
      : '';
  return (
    <div>
        <Sidebar title={partAfterAdmin}>

        </Sidebar>
    </div>
  )
}
