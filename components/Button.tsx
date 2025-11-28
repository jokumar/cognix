'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { handleAnchorClick } from '@/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      href,
      children,
      fullWidth = false,
      size = 'lg',
      className = '',
      onClick,
      type = 'button',
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Base styles - modernized with new design system
    const baseStyles =
      'font-semibold text-center flex items-center justify-center touch-manipulation focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';

    // Size styles - updated to match new design requirements
    const sizeStyles = {
      sm: 'px-6 py-2 text-base min-h-[44px] rounded-[0.75rem]',
      md: 'px-8 py-3 text-lg min-h-[52px] rounded-[0.75rem]',
      lg: 'px-6 sm:px-10 py-3 text-lg min-h-[56px] rounded-[0.75rem]',
    };

    // Variant styles - redesigned with gradient and modern effects
    const variantStyles = {
      primary:
        'bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-[0_4px_6px_-1px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(30,64,175,0.4)] hover:scale-[1.03] active:scale-[0.98] focus:ring-blue-300 transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] font-semibold',
      secondary:
        'bg-transparent hover:bg-[rgba(30,64,175,0.05)] active:bg-[rgba(30,64,175,0.1)] text-[var(--primary)] border-2 border-[var(--primary)] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15)] hover:scale-[1.03] active:scale-[0.98] focus:ring-blue-300 transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] font-semibold',
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : 'w-full sm:w-auto';

    // Combined classes
    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`;

    // ARIA label for accessibility
    const ariaLabel = props['aria-label'] || (typeof children === 'string' ? children : undefined);

    // If href is provided, render as anchor tag
    if (href) {
      return (
        <a
          href={href}
          onClick={(e) => {
            if (!disabled) {
              handleAnchorClick(e);
              onClick?.(e as any);
            } else {
              e.preventDefault();
            }
          }}
          className={combinedClassName}
          aria-label={ariaLabel}
          aria-disabled={disabled}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
              e.preventDefault();
              onClick?.(e as any);
            }
          }}
        >
          {children}
        </a>
      );
    }

    // Otherwise render as button
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
