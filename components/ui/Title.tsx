import Link from 'next/link';
import React from 'react'
import { TiPlusOutline } from "react-icons/ti";

interface TitleProps {
   title: string,
   nextpage: string,
}

const Title = ({ title, nextpage }: TitleProps) => {
   return (
      <div className='w-full flex justify-between items-center pr-4 mb-5'>
         <h1 className='text-xl font-bold text-theme-white'>{title}</h1>
         <Link className='bg-[#B3E1B6] px-2 py-2 rounded-md' href={nextpage}>
            <TiPlusOutline className='text-2xl font-semibold text-theme-white'/>
         </Link>
      </div>
   )
}

export default Title