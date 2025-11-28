# Reusable UI Components

This directory contains reusable UI components for the Cloud + AI Assessment Landing Page.

## Components

### Button

A flexible button component with primary and secondary variants, supporting both button and anchor tag rendering.

**Features:**
- Primary and secondary variants
- Multiple sizes (sm, md, lg)
- Full width option
- Hover and active states
- Keyboard navigation support
- ARIA labels for accessibility
- Can render as button or anchor tag

**Usage:**
```tsx
import { Button } from '@/components/ui';

// As a button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// As a link
<Button variant="secondary" href="/contact">
  Contact Us
</Button>

// Full width
<Button variant="primary" fullWidth>
  Submit
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'lg')
- `href`: string (optional, renders as anchor if provided)
- `fullWidth`: boolean (default: false)
- `disabled`: boolean (default: false)
- All standard button/anchor attributes

---

### Card

A reusable card component with consistent styling and hover effects.

**Features:**
- Multiple variants (default, gradient, bordered)
- Configurable padding
- Hover effects
- Responsive design
- Subcomponents for common patterns (CardIcon, CardTitle, CardDescription)

**Usage:**
```tsx
import { Card, CardIcon, CardTitle, CardDescription } from '@/components/ui';

<Card variant="default" hover>
  <CardIcon>🚀</CardIcon>
  <CardTitle>Feature Title</CardTitle>
  <CardDescription>
    Description of the feature goes here.
  </CardDescription>
</Card>
```

**Props:**
- `variant`: 'default' | 'gradient' | 'bordered' (default: 'default')
- `hover`: boolean (default: true)
- `padding`: 'sm' | 'md' | 'lg' (default: 'md')
- All standard div attributes

**Subcomponents:**
- `CardIcon`: Icon container with variants
- `CardTitle`: Styled title heading
- `CardDescription`: Styled description text

---

### Section

A section container component with consistent spacing and background options.

**Features:**
- Multiple background options
- Configurable padding
- Responsive design
- Subcomponents for common patterns (SectionContainer, SectionHeader, SectionGrid)

**Usage:**
```tsx
import { Section, SectionContainer, SectionHeader, SectionGrid } from '@/components/ui';

<Section background="gradient-blue" padding="lg">
  <SectionContainer maxWidth="7xl">
    <SectionHeader 
      title="Section Title" 
      description="Section description"
    />
    <SectionGrid columns={3}>
      {/* Grid items */}
    </SectionGrid>
  </SectionContainer>
</Section>
```

**Props:**
- `background`: 'white' | 'gray' | 'gradient-blue' | 'gradient-green' | 'gradient-purple' (default: 'white')
- `padding`: 'sm' | 'md' | 'lg' (default: 'lg')
- All standard section attributes

**Subcomponents:**
- `SectionContainer`: Max-width container with responsive margins
- `SectionHeader`: Styled section title and description
- `SectionGrid`: Responsive grid layout with configurable columns

---

## Accessibility

All components follow accessibility best practices:
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states
- Touch-friendly tap targets (min 44x44px)

## Responsive Design

All components are fully responsive and tested across:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)
