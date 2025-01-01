import React from 'react'
import SideItems from './SideItems'

const Sidebar = () => {
   return (
      <div className='h-screen w-1/5 flex justify-center py-5 px-8 sticky top-0'>
         <div className="bg-secoundary h-full w-full rounded-lg shadow-md">
            <SideItems />
         </div>
      </div>
   )
}

export default Sidebar