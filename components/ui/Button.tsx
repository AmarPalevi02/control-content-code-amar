import React from 'react'

type ButtonPros = {
   children: React.ReactNode,
   onClick?: () => void,
   loading?: boolean,
   disable?: boolean,
   type: 'button' | 'submit',
   className?: string,
   variant?: 'primary' | 'secondary' | 'danger';
}

const Button = ({
   children,
   onClick,
   loading = false,
   disable = false,
   type,
   className,
   variant = 'primary',
}: ButtonPros) => {
   const baseClasses =
      'px-4 py-2 rounded font-semibold focus:outline-none focus:ring';
   const variantClasses = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
      secondary:
         'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
      danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
   };

   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disable}
         className={`${baseClasses} ${variantClasses[variant]} ${className} ${disable ? 'opacity-50 cursor-not-allowed' : ''
            }`}
      >
         {loading ? 'Loading...' : children}
      </button>
   )
}

export default Button