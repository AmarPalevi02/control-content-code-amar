import React from "react";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";

type RowTableProps = {
   data: (string | React.ReactNode)[];
   onEdit: () => void;
   onDelete: () => void;
};

const RowTable: React.FC<RowTableProps> = ({ data, onEdit, onDelete }) => {
   return (
      <tr className="hover:bg-gray-100">
         {data.map((item, index) => (
            <td key={index} className=" border-b-2 border-b-gray-300 px-4 py-2 text-theme-white">
               <span className="line-clamp-2">{item}</span>
            </td>
         ))}
         <td className=" px-4 py-2 border-b-2 border-b-gray-300">
            <div className="flex items-center justify-center h-full space-x-2">
               <button
                  className="text-blue-500 hover:underline bg-[#85AFEE] px-2 py-2 rounded-md"
                  onClick={onEdit}
               >
                  <GoPencil />
               </button>
               <button
                  className="text-red-500 hover:underline bg-[#F2A4A4] px-2 py-2 rounded-md"
                  onClick={onDelete}
               >
                  <RiDeleteBin5Line />
               </button>
            </div>
         </td>
      </tr>
   );
};

export default RowTable;
