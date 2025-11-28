/**
 * Core TypeScript interfaces and types for the Cloud + AI Assessment Landing Page
 */

// CTA Button Types
export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

// Hero Section Types
export interface HeroSectionProps {
  id?: string;
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  backgroundImage?: string;
}

// Problem Section Types
export interface StatisticCallout {
  value: string;
  description: string;
  icon?: string;
}

export interface ProblemItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ProblemSectionProps {
  id?: string;
  title: string;
  statistic: StatisticCallout;
  problems: ProblemItem[];
}

// Solution Section Types
export interface ModuleItem {
  title: string;
  description?: string;
  icon: string;
}

export interface SolutionSectionProps {
  id?: string;
  title: string;
  description: string;
  modules: ModuleItem[];
}

// Deliverables Section Types
export interface DeliverableItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface DeliverablesSectionProps {
  id?: string;
  title: string;
  deliverables: DeliverableItem[];
}

// Process Section Types
export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ProcessSectionProps {
  id?: string;
  title: string;
  steps: ProcessStep[];
}

// Outcomes Section Types
export interface OutcomeItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface OutcomesSectionProps {
  id?: string;
  title: string;
  outcomes: OutcomeItem[];
}

// Target Audience Section Types
export interface AudienceItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface TargetAudienceSectionProps {
  id?: string;
  title: string;
  audiences: AudienceItem[];
}

// Differentiators Section Types
export interface DifferentiatorItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface ExpertProfile {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

export interface DifferentiatorsSectionProps {
  id?: string;
  title: string;
  differentiators: DifferentiatorItem[];
  expertProfiles?: ExpertProfile[];
}

// Case Studies Section Types
export interface CaseStudy {
  title: string;
  description: string;
  results: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface CaseStudiesSectionProps {
  title: string;
  caseStudies: CaseStudy[];
}

// FAQ Section Types
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  id?: string;
  title: string;
  faqs: FAQItem[];
}

// Bottom CTA Section Types
export interface BottomCTASectionProps {
  id?: string;
  title: string;
  description?: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  contactEmail?: string;
}
