export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-105',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white hover:scale-105',
    success: 'bg-green-500 hover:bg-green-600 text-white hover:scale-105',
    danger: 'bg-red-500 hover:bg-red-600 text-white hover:scale-105',
    outline: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-50',
  };
  
  const sizeClasses = {
    small: 'py-2 px-3 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
