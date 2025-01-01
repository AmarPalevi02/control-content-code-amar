import Link from 'next/link'
import React from 'react'

interface CountPage {
   count: number,
   title: string,
   topage: string
}

const Card = ({ count, title, topage }: CountPage) => {
   return (
      <div className='bg-secoundary shadow-md rounded-md w-28 py-3 text-center'>
         <Link href={topage}>
            <p className='text-theme-white text-lg font-semibold'>{title}</p>
            <p className='text-emerald-600 text-base'>{count}</p>
         </Link>
      </div>
   )
}

export default Card