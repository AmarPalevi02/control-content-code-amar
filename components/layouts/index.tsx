import React, { ReactNode } from 'react'
import Sidebar from './sidebar'
import Breadcrumb from '../ui/Breadcrumb'
interface LayoutsProps {
   children: ReactNode
}

const Layouts = ({ children }: LayoutsProps) => {
   return (
      <div className='flex bg-primary '>
         <Sidebar />
         <div className="mt-3 flex-1">
            <Breadcrumb />
            <main className='py-5'>
               {children}
            </main>
         </div>
      </div>
   )
}

export default Layouts