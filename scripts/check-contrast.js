/**
 * Color Contrast Checker
 * Verifies WCAG AA compliance for color combinations
 */

// Convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate relative luminance
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

// WCAG AA Standards
const WCAG_AA_NORMAL = 4.5;  // Normal text (< 18pt or < 14pt bold)
const WCAG_AA_LARGE = 3.0;   // Large text (>= 18pt or >= 14pt bold)

// Color combinations to test
const colorTests = [
  // Primary text on white background
  { fg: '#0f172a', bg: '#ffffff', context: 'Body text on white', size: 'normal' },
  { fg: '#475569', bg: '#ffffff', context: 'Secondary text on white', size: 'normal' },
  { fg: '#64748b', bg: '#ffffff', context: 'Muted text on white', size: 'normal' },
  
  // Headings on white background
  { fg: '#0f172a', bg: '#ffffff', context: 'Headings on white', size: 'large' },
  
  // Text on card backgrounds
  { fg: '#0f172a', bg: '#f8fafc', context: 'Text on gray-50 card', size: 'normal' },
  { fg: '#475569', bg: '#f8fafc', context: 'Secondary text on gray-50', size: 'normal' },
  
  // Primary button (white text on blue)
  { fg: '#ffffff', bg: '#1e40af', context: 'Primary button text', size: 'large' },
  { fg: '#ffffff', bg: '#1e3a8a', context: 'Primary button text (dark)', size: 'large' },
  
  // Secondary button (blue text on white)
  { fg: '#1e40af', bg: '#ffffff', context: 'Secondary button text', size: 'large' },
  
  // Text on gradient backgrounds (using lightest color)
  { fg: '#0f172a', bg: '#f8fafc', context: 'Text on blue-50 gradient', size: 'normal' },
  { fg: '#0f172a', bg: '#faf5ff', context: 'Text on purple-50 gradient', size: 'normal' },
  
  // Hero section text (on glassmorphism - testing worst case with light bg)
  { fg: '#0f172a', bg: '#e0e7ff', context: 'Hero text on indigo-100 (worst case)', size: 'large' },
  { fg: '#374151', bg: '#e0e7ff', context: 'Hero subtext on indigo-100', size: 'normal' },
  
  // Accent colors on white (updated for WCAG AA compliance)
  { fg: '#2563eb', bg: '#ffffff', context: 'Accent blue on white', size: 'normal' },
  { fg: '#4f46e5', bg: '#ffffff', context: 'Accent indigo on white', size: 'normal' },
  { fg: '#7c3aed', bg: '#ffffff', context: 'Accent purple on white', size: 'normal' },
  { fg: '#0e7490', bg: '#ffffff', context: 'Accent cyan on white', size: 'normal' },
];

console.log('='.repeat(80));
console.log('COLOR CONTRAST ACCESSIBILITY AUDIT');
console.log('WCAG AA Standards: 4.5:1 for normal text, 3:1 for large text (18pt+)');
console.log('='.repeat(80));
console.log('');

let passCount = 0;
let failCount = 0;
const failures = [];

colorTests.forEach(test => {
  const ratio = getContrastRatio(test.fg, test.bg);
  const required = test.size === 'large' ? WCAG_AA_LARGE : WCAG_AA_NORMAL;
  const passes = ratio >= required;
  
  if (passes) {
    passCount++;
  } else {
    failCount++;
    failures.push({ ...test, ratio, required });
  }
  
  const status = passes ? '✓ PASS' : '✗ FAIL';
  const statusColor = passes ? '\x1b[32m' : '\x1b[31m';
  const resetColor = '\x1b[0m';
  
  console.log(`${statusColor}${status}${resetColor} ${ratio.toFixed(2)}:1 (need ${required}:1) - ${test.context}`);
  console.log(`     FG: ${test.fg} on BG: ${test.bg} (${test.size} text)`);
  console.log('');
});

console.log('='.repeat(80));
console.log(`SUMMARY: ${passCount} passed, ${failCount} failed`);
console.log('='.repeat(80));

if (failures.length > 0) {
  console.log('');
  console.log('FAILURES REQUIRING ATTENTION:');
  console.log('-'.repeat(80));
  failures.forEach(f => {
    console.log(`• ${f.context}`);
    console.log(`  Current: ${f.ratio.toFixed(2)}:1, Required: ${f.required}:1`);
    console.log(`  Colors: ${f.fg} on ${f.bg}`);
    console.log('');
  });
  
  process.exit(1);
} else {
  console.log('');
  console.log('✓ All color combinations meet WCAG AA standards!');
  process.exit(0);
}
