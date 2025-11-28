/**
 * Utility functions for the Cloud + AI Assessment Landing Page
 */

/**
 * Combines class names conditionally
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smooth scroll to a section by ID with optional offset
 * @param sectionId - The ID of the target section (without the # prefix)
 * @param offset - Optional offset from the top in pixels (default: 0)
 */
export function scrollToSection(sectionId: string, offset: number = 0): void {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Handle anchor link clicks with smooth scrolling
 * @param event - The click event
 * @param offset - Optional offset from the top in pixels (default: 0)
 */
export function handleAnchorClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  offset: number = 0
): void {
  const href = event.currentTarget.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    event.preventDefault();
    const targetId = href.substring(1);
    scrollToSection(targetId, offset);
  }
}

/**
 * Track CTA click events (placeholder for analytics integration)
 */
export function trackCTAClick(ctaName: string, ctaType: 'primary' | 'secondary'): void {
  // Analytics integration would go here
  console.log(`CTA clicked: ${ctaName} (${ctaType})`);
}

/**
 * Format phone numbers
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
