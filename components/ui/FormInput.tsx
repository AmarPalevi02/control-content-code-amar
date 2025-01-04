import React from 'react'

type TextInputProps = {
   label?: string,
   type: string,
   placeholder: string,
   value: string | number,
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   className?: string,
   required?: boolean,
   name: string
}

const FormInput = ({
   label,
   type,
   placeholder,
   value,
   onChange,
   className,
   required = false,
   name
}: TextInputProps) => {
   return (
      <div className={`w-full ${className}`}>
         {label && (
            <label className="block text-sm font-medium text-gray-700 mb-1">
               {label}
               {required && <span className="text-red-500">*</span>} {/* Indikator jika required */}
            </label>
         )}
         <input
            name = {name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            required={required}
         />
      </div>
   )
}

export default FormInput