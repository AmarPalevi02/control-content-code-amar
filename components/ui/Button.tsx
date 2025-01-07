import React from 'react'

type ButtonPros = {
   children: React.ReactNode,
   onClick?: () => void,
   loading?: boolean,
   disable?: boolean,
   type: 'button' | 'submit',
   className?: string
}

const Button = ({
   children,
   onClick,
   loading = false,
   disable = false,
   type,
   className
}: ButtonPros) => {
   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disable}
         className={className}
      >
         {loading ? 'Loading...' : children}
      </button>
   )
}

export default Button