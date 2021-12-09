import React from 'react'

const baseClasses = 'inline-flex items-center border shadow-sm px-4 py-2 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
const variants = {
  primary: 'border-transparent text-white bg-blue-600 hover:bg-blue-700',
  secondary: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
}

export function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
      type={'button'}
    >
      {children}
    </button>
  )
}
