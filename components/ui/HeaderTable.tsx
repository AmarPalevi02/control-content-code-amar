import React from 'react'

type HeaderTableProps = {
   colums: string[]
}

const HeaderTable: React.FC<HeaderTableProps> = ({ colums }) => {
   return (
      <thead>
         <tr>
            {colums.map((colum, i) => (
               <th key={i} className='border border-gray-300 px-4 py-2 text-left'>
                  {colum}
               </th>
            ))}
         </tr>
      </thead>
   )
}

export default HeaderTable