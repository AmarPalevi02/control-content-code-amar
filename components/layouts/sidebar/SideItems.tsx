import React from 'react'
import { navItems } from '../../../constans/navitems'

const SideItems = () => {
   return (
      <nav className='w-full flex flex-col justify-center items-center'>
         <h2 className='text-2xl font-bold mt-8 text-[#5FA0BE]'>CODE-AMAR</h2>
         <div className="h-[1px] w-full white-dash my-7"></div>
         <ul className=''>
            {navItems.map((item) => (
               <li key={item.name} className='mb-5'>
                  <a href={item.path}
                     className='flex items-center gap-2'
                  >
                     <p className='text-theme-white text-lg'>{item.icon}</p>
                     <p className='text-lg text-theme-white'>{item.name}</p>
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   )
}

export default SideItems