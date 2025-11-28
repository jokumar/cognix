import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'gradient' | 'bordered';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Card({
  children,
  variant = 'default',
  hover = true,
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  // Base styles with modernized border-radius and transition
  const baseStyles = 'rounded-[1.5rem] transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]';

  // Variant styles with glassmorphism and semi-transparent backgrounds
  const variantStyles = {
    default:
      'bg-white/90 backdrop-blur-[12px] border border-gray-200/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]',
    gradient:
      'bg-gradient-to-br from-blue-50/90 to-indigo-50/90 backdrop-blur-[12px] border border-blue-100/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]',
    bordered: 'bg-white/90 backdrop-blur-[12px] border border-indigo-100/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]',
  };

  // Hover styles with lift effect and enhanced shadow
  const hoverStyles = hover 
    ? 'hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]' 
    : '';

  // Padding styles - 1.5rem (p-6) for mobile, 2.5rem (p-10) for desktop
  const paddingStyles = {
    sm: 'p-4 md:p-6',
    md: 'p-6 md:p-10',
    lg: 'p-8 md:p-12',
  };

  // Combined classes
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${paddingStyles[padding]} ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}

// Card subcomponents for common patterns
export function CardIcon({
  children,
  variant = 'default',
  className = '',
}: {
  children: ReactNode;
  variant?: 'default' | 'gradient' | 'rounded';
  className?: string;
}) {
  const variantStyles = {
    default: 'w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg',
    gradient:
      'w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full',
    rounded: 'w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full',
  };

  return (
    <div
      className={`flex items-center justify-center ${variantStyles[variant]} ${className}`}
    >
      <span className="text-xl sm:text-2xl">{children}</span>
    </div>
  );
}

export function CardTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-lg sm:text-xl font-semibold text-gray-900 mb-2 ${className}`}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-gray-600 text-sm leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
