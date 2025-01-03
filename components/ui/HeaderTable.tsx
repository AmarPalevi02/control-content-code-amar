import React from 'react'

type HeaderTableProps = {
   colums: string[]
}

const HeaderTable: React.FC<HeaderTableProps> = ({ colums }) => {
   return (
      <thead className=''>
         <tr className='bg-[#DFDFDF]'>
            {colums.map((colum, i) => (
               <th key={i} className={`border-none px-4 py-2 text-left text-theme-white ${i === 0 ? 'rounded-tl-md' : ''} ${i === colums.length - 1 ? 'rounded-tr-md' : ''}`}>
                  {colum}
               </th>
            ))}
         </tr>
      </thead>
   )
}

export default HeaderTable