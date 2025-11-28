import { HTMLAttributes, ReactNode } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: 'white' | 'gray' | 'gradient-blue' | 'gradient-green' | 'gradient-purple';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Section({
  children,
  background = 'white',
  padding = 'lg',
  className = '',
  ...props
}: SectionProps) {
  // Background styles
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    'gradient-blue': 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
    'gradient-green': 'bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50',
    'gradient-purple': 'bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50',
  };

  // Padding styles - Updated to match design system
  // Mobile: 3rem (py-12), Tablet: 4rem (py-16), Desktop: 6rem (py-24)
  // Horizontal: 1rem mobile (px-4), 2rem desktop (px-8)
  const paddingStyles = {
    sm: 'py-8 md:py-12 lg:py-16 px-4 lg:px-8',
    md: 'py-10 md:py-14 lg:py-20 px-4 lg:px-8',
    lg: 'py-12 md:py-16 lg:py-24 px-4 lg:px-8',
  };

  // Combined classes
  const combinedClassName = `${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`;

  return (
    <section className={combinedClassName} {...props}>
      {children}
    </section>
  );
}

// Section subcomponents for common patterns
export function SectionContainer({
  children,
  maxWidth = '7xl',
  className = '',
}: {
  children: ReactNode;
  maxWidth?: '4xl' | '5xl' | '6xl' | '7xl';
  className?: string;
}) {
  const maxWidthStyles = {
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl', // 1280px - matches design system
  };

  return (
    <div className={`${maxWidthStyles[maxWidth]} mx-auto px-4 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({
  title,
  description,
  centered = true,
  className = '',
}: {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  const alignmentClass = centered ? 'text-center' : '';

  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionGrid({
  children,
  columns = 3,
  gap = 'md',
  className = '',
}: {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  // Column styles - ensure proper stacking on mobile
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  // Gap styles - Updated to match design system
  // Mobile: 1rem (gap-4), Tablet: 1.5rem (gap-6), Desktop: 2rem (gap-8)
  const gapStyles = {
    sm: 'gap-3 md:gap-4 lg:gap-5',
    md: 'gap-4 md:gap-6 lg:gap-8',
    lg: 'gap-6 md:gap-8 lg:gap-10',
  };

  return (
    <div className={`grid ${columnStyles[columns]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
}
