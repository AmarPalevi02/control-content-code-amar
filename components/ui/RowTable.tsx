import React from "react";

type RowTableProps = {
   data: (string | React.ReactNode)[];
   onEdit: () => void;
   onDelete: () => void;
};

const RowTable: React.FC<RowTableProps> = ({ data, onEdit, onDelete }) => {
   return (
      <tr className="hover:bg-gray-100">
         {data.map((item, index) => (
            <td key={index} className="border border-gray-300 px-4 py-2">
               {item}
            </td>
         ))}
         <td className="border border-gray-300 px-4 py-2 flex space-x-2">
            <button className="text-blue-500 hover:underline" onClick={onEdit}>
               Edit
            </button>
            <button className="text-red-500 hover:underline" onClick={onDelete}>
               Delete
            </button>
         </td>
      </tr>
   );
};

export default RowTable;
