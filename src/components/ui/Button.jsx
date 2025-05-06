import React from 'react';

export const Button = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  onClick,
  ...props 
}) => {
  // Base classes for all button variants
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-60 disabled:cursor-not-allowed';
  
  // Size variations
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded-lg',
    md: 'text-sm px-4 py-2 rounded-lg',
    lg: 'text-base px-6 py-3 rounded-xl',
    icon: 'p-2 rounded-full'
  };
  
  // Variant styles
  const variantClasses = {
    default: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:active:bg-gray-300',
    outline: 'border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:active:bg-gray-700',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700',
    icon: 'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700'
  };
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};