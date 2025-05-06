import React from 'react';

export const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  ...props 
}) => {
  // Base card styles
  const baseStyles = 'rounded-xl overflow-hidden';
  
  // Variant styles
  const variantStyles = {
    default: 'bg-white dark:bg-gray-800 shadow-sm',
    outline: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    flat: 'bg-white dark:bg-gray-800',
    elevated: 'bg-white dark:bg-gray-800 shadow-md',
    glass: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm',
  };
  
  // Hover effect styles
  const hoverStyles = hover 
    ? 'transition-all duration-300 hover:shadow-md hover:-translate-y-1' 
    : '';
  
  // Combine all styles
  const cardClasses = `${baseStyles} ${variantStyles[variant] || variantStyles.default} ${hoverStyles} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

// Card sub-components for more structured usage
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`p-5 ${className}`} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-bold ${className}`} {...props}>
    {children}
  </h3>
);

Card.Description = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 ${className}`} {...props}>
    {children}
  </p>
);

Card.Content = ({ children, className = '', ...props }) => (
  <div className={`p-5 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`p-5 pt-0 flex items-center ${className}`} {...props}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className = '', ...props }) => (
  <div className="relative w-full overflow-hidden">
    <img 
      src={src} 
      alt={alt || 'Card image'} 
      className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${className}`}
      {...props}
    />
  </div>
);