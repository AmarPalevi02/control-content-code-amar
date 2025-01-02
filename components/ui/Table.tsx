'use client'
import React from "react";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";

const Table: React.FC = () => {
   const data = [
      { id: 1, name: "Amar" },
      { id: 2, name: "Bryan" },
   ];

   const handleEdit = (id: number) => {
      alert(`Edit item with ID: ${id}`);
   };

   const handleDelete = (id: number) => {
      if (confirm(`Delete item with ID: ${id}?`)) {
         alert(`Item with ID: ${id} deleted`);
      }
   };

   return (
      <div className="overflow-x-auto">
         <table className="min-w-full border-collapse border border-gray-300">
            <HeaderTable colums={["No", "Name", "Actions"]} />
            <tbody>
               {data.map((item, index) => (
                  <RowTable
                     key={item.id}
                     data={[`${index + 1}`, item.name]}
                     onEdit={() => handleEdit(item.id)}
                     onDelete={() => handleDelete(item.id)}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
