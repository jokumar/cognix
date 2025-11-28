import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import DeliverablesSection from '@/components/DeliverablesSection';
import ProcessSection from '@/components/ProcessSection';
import OutcomesSection from '@/components/OutcomesSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import FAQSection from '@/components/FAQSection';
import BottomCTASection from '@/components/BottomCTASection';
import LazySection from '@/components/LazySection';
import ScrollProgress from '@/components/ScrollProgress';

// Force static generation at build time
export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate (pure static)

export default function Home() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Cloud + AI Modernization Assessment",
    "description": "Comprehensive cloud infrastructure and AI readiness assessment service that helps companies reduce costs, optimize architecture, and develop clear AI adoption strategies.",
    "url": "https://example.com",
    "logo": "https://example.com/logo.png",
    "image": "https://example.com/og-image.jpg",
    "priceRange": "$$",
    "areaServed": "Worldwide",
    "serviceType": "Cloud Modernization and AI Assessment",
    "provider": {
      "@type": "Organization",
      "name": "Cloud + AI Modernization Team"
    },
    "offers": {
      "@type": "Offer",
      "name": "Cloud + AI Modernization Assessment",
      "description": "2-4 week comprehensive assessment including architecture review, cost analysis, AI readiness evaluation, and modernization roadmap",
      "category": "Cloud Consulting"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does the assessment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The complete assessment typically takes 2–4 weeks from the initial discovery call to final deliverable presentation. The timeline depends on the complexity of your infrastructure and the availability of your team for interviews and system access."
        }
      },
      {
        "@type": "Question",
        "name": "What systems do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have deep expertise across all major cloud platforms including AWS, Azure, and Google Cloud Platform. We work with a wide range of technologies including containerized applications (Docker, Kubernetes), serverless architectures, traditional VM-based infrastructure, databases (SQL and NoSQL), data pipelines, and modern application frameworks."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help implement the roadmap afterwards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. While the assessment provides you with a comprehensive roadmap and all the information needed to proceed independently, we offer implementation support services for organizations that want our continued partnership."
        }
      },
      {
        "@type": "Question",
        "name": "Do you need access to our code or cloud account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically need read-only access to your cloud infrastructure to perform cost analysis and architecture review. For code, we usually only need to review architecture patterns and key components rather than full codebase access. We work with your security requirements and can conduct assessments with varying levels of access."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is paramount in everything we do. We sign NDAs and can work within your security protocols and compliance requirements. All access is read-only and time-limited. We follow industry best practices for data handling, never store sensitive information unnecessarily, and can work within your VPN or secure access requirements."
        }
      }
    ]
  };

  return (
    <>
      {/* Navigation Header */}
      <Header />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <HeroSection
          headline="Modernize Your Cloud & AI Strategy in 2–4 Weeks"
          subheadline="We uncover bottlenecks, reduce costs, and identify high-impact AI opportunities — fast."
          primaryCTA={{
            text: "Book a Free Consultation",
            href: "#contact",
            variant: "primary"
          }}
          secondaryCTA={{
            text: "Download Sample Report",
            href: "#sample-report",
            variant: "secondary"
          }}
        />
      </div>
      
      {/* Problem Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <ProblemSection
        id="problem"
        title="The Challenge"
        statistic={{
          value: "20–40%",
          description: "Companies waste 20–40% on cloud resources",
          icon: "☁️"
        }}
        problems={[
            {
              title: "Cloud Cost Inefficiencies",
              description: "Organizations struggle with spiraling cloud costs, lacking visibility into where money is being wasted and how to optimize spending effectively.",
              icon: "💸"
            },
            {
              title: "Unclear AI ROI & Poor Data Foundations",
              description: "Companies want to adopt AI but face unclear return on investment and lack the data quality, governance, and infrastructure needed for successful implementation.",
              icon: "🤖"
            },
            {
              title: "Legacy Architecture Bottlenecks",
              description: "Outdated systems and technical debt create bottlenecks that slow down product development and limit scalability.",
              icon: "🔧"
            },
            {
              title: "Impact on Engineering Velocity",
              description: "Teams are buried in manual processes and operational overhead, reducing their ability to deliver features and innovate quickly.",
              icon: "⚡"
            }
          ]}
        />
      </div>

      {/* Solution Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <SolutionSection
        id="solution"
          title="Cloud + AI Modernization Assessment"
          description="A comprehensive evaluation of your cloud infrastructure, AI readiness, and modernization opportunities — delivered in 2–4 weeks."
          modules={[
            {
              title: "Architecture & Infrastructure Review",
              description: "Deep analysis of your current system architecture, identifying bottlenecks, scalability issues, and modernization opportunities.",
              icon: "🏗️"
            },
            {
              title: "Cloud Cost Efficiency Analysis",
              description: "Detailed examination of your cloud spending patterns with actionable recommendations to reduce waste and optimize costs.",
              icon: "💰"
            },
            {
              title: "AI Readiness & Opportunity Assessment",
              description: "Evaluation of your data infrastructure and identification of high-impact AI use cases aligned with your business goals.",
              icon: "🤖"
            },
            {
              title: "Data Quality & Governance Check",
              description: "Assessment of your data foundations, quality standards, and governance practices to ensure AI and analytics readiness.",
              icon: "📊"
            },
            {
              title: "Security & Compliance Scan",
              description: "Review of security posture, compliance requirements, and risk areas across your cloud and data infrastructure.",
              icon: "🔒"
            },
            {
              title: "Quick-Win Automation Identification",
              description: "Discovery of immediate automation opportunities that can deliver fast ROI and reduce operational overhead.",
              icon: "⚡"
            },
            {
              title: "6–12 Month Modernization Roadmap",
              description: "Strategic implementation plan with prioritized initiatives, timelines, and resource requirements for your transformation journey.",
              icon: "🗺️"
            }
          ]}
        />
      </div>

      {/* Deliverables Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <LazySection>
          <DeliverablesSection
          id="deliverables"
          title="What You'll Receive"
          deliverables={[
            {
              title: "Executive Summary Report (pain points, risks, opportunities)",
              description: "A concise overview of key findings, critical risks, and high-impact opportunities tailored for executive stakeholders.",
              icon: "📋"
            },
            {
              title: "ROI-based Recommendation Matrix",
              description: "Prioritized recommendations ranked by expected return on investment, implementation effort, and business impact.",
              icon: "📈"
            },
            {
              title: "Cloud Cost Optimization Report",
              description: "Detailed analysis of current cloud spending with specific recommendations to reduce waste and optimize resource allocation.",
              icon: "💰"
            },
            {
              title: "AI Opportunities Blueprint",
              description: "Strategic plan identifying viable AI use cases, data requirements, and implementation pathways aligned with your business goals.",
              icon: "🤖"
            },
            {
              title: "Target Architecture Diagram",
              description: "Visual representation of your recommended future-state architecture with clear migration paths and technical specifications.",
              icon: "🏗️"
            },
            {
              title: "Modernization Roadmap (90-day, 6-month, 12-month)",
              description: "Phased implementation plan with clear milestones, dependencies, and resource requirements for each stage of your transformation.",
              icon: "🗺️"
            },
            {
              title: "Presentation to stakeholders",
              description: "Professional slide deck summarizing findings and recommendations, ready to present to your leadership team and stakeholders.",
              icon: "📊"
            }
          ]}
          />
        </LazySection>
      </div>

      {/* Process Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <LazySection>
          <ProcessSection
          id="process"
          title="How It Works"
          steps={[
            {
              stepNumber: 1,
              title: "Discovery Call",
              description: "We start by understanding your systems, business goals, current challenges, and what success looks like for your organization."
            },
            {
              stepNumber: 2,
              title: "Deep-Dive Analysis",
              description: "Our team conducts a thorough examination of your architecture, cloud infrastructure, data systems, and workflows to identify opportunities."
            },
            {
              stepNumber: 3,
              title: "Solution Design",
              description: "We design targeted cloud improvements and identify high-impact AI use cases that align with your business objectives and technical capabilities."
            },
            {
              stepNumber: 4,
              title: "Final Blueprint",
              description: "You receive a comprehensive roadmap with quick wins, long-term strategy, and flexible implementation options to drive your modernization forward."
            }
          ]}
          />
        </LazySection>
      </div>

      {/* Outcomes Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <LazySection>
          <OutcomesSection
          id="outcomes"
          title="Expected Business Outcomes"
          outcomes={[
            {
              title: "20–40% cloud cost reduction",
              description: "Eliminate waste and optimize resource allocation to significantly reduce your monthly cloud spending.",
              icon: "💰"
            },
            {
              title: "Improved scalability & reliability",
              description: "Build a robust infrastructure that scales with your business and maintains high availability.",
              icon: "📈"
            },
            {
              title: "Clear AI adoption strategy",
              description: "Get a practical roadmap for implementing AI that delivers measurable business value.",
              icon: "🎯"
            },
            {
              title: "Faster delivery for engineering teams",
              description: "Remove bottlenecks and streamline workflows to accelerate feature development and deployment.",
              icon: "⚡"
            },
            {
              title: "Reduced operational overhead",
              description: "Automate manual processes and eliminate toil to free up your team for strategic work.",
              icon: "🔧"
            },
            {
              title: "Aligned cloud & AI roadmap",
              description: "Ensure your cloud infrastructure and AI initiatives work together to support business goals.",
              icon: "🗺️"
            },
            {
              title: "Elimination of technical debt hotspots",
              description: "Identify and address critical technical debt that's slowing down your organization.",
              icon: "🎯"
            }
          ]}
          />
        </LazySection>
      </div>

      {/* Target Audience Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <LazySection>
          <TargetAudienceSection
          id="audience"
          title="Who This Is For"
          audiences={[
            {
              title: "CTOs of growing SaaS companies",
              description: "Technical leaders scaling their infrastructure and looking to optimize costs while maintaining reliability and performance.",
              icon: "👔"
            },
            {
              title: "CIOs managing legacy or hybrid infrastructure",
              description: "IT executives navigating the complexity of modernizing legacy systems while maintaining business continuity.",
              icon: "🏢"
            },
            {
              title: "Founders struggling with spiraling cloud costs",
              description: "Startup and scale-up founders facing unexpected cloud bills and seeking strategic guidance on infrastructure optimization.",
              icon: "🚀"
            },
            {
              title: "Operations teams buried in manual processes",
              description: "DevOps and platform teams overwhelmed by operational overhead and looking to automate repetitive tasks.",
              icon: "⚙️"
            },
            {
              title: "Companies exploring AI but lacking data readiness",
              description: "Organizations eager to adopt AI technologies but uncertain about their data infrastructure and implementation strategy.",
              icon: "🤖"
            }
          ]}
          />
        </LazySection>
      </div>

      {/* Differentiators Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <LazySection>
          <DifferentiatorsSection
          id="why-us"
          title="Why Us"
          differentiators={[
            {
              title: "Small, senior-only team (no juniors)",
              description: "Every engagement is handled by experienced senior engineers and architects with 10+ years of hands-on expertise.",
              icon: "👥"
            },
            {
              title: "Experience across AWS, Azure, GCP",
              description: "Deep expertise across all major cloud platforms, ensuring vendor-neutral recommendations tailored to your needs.",
              icon: "☁️"
            },
            {
              title: "Fast turnaround (2–4 weeks)",
              description: "We deliver comprehensive assessments quickly without sacrificing quality, so you can act on insights immediately.",
              icon: "⚡"
            },
            {
              title: "Battle-tested methodologies",
              description: "Proven frameworks and assessment processes refined through dozens of successful engagements across diverse industries.",
              icon: "🎯"
            },
            {
              title: "Implementation support available",
              description: "We don't just hand you a report — we can help execute the roadmap and ensure successful transformation.",
              icon: "🚀"
            },
            {
              title: "Focus on ROI and quick wins",
              description: "Every recommendation is prioritized by business impact, with clear paths to immediate value and long-term gains.",
              icon: "💰"
            }
          ]}
          />
        </LazySection>
      </div>

      {/* FAQ Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <LazySection>
          <FAQSection
          id="faq"
          title="Frequently Asked Questions"
          faqs={[
            {
              question: "How long does the assessment take?",
              answer: "The complete assessment typically takes 2–4 weeks from the initial discovery call to final deliverable presentation. The timeline depends on the complexity of your infrastructure and the availability of your team for interviews and system access. We work efficiently to deliver insights quickly while maintaining thoroughness."
            },
            {
              question: "What systems do you work with?",
              answer: "We have deep expertise across all major cloud platforms including AWS, Azure, and Google Cloud Platform. We work with a wide range of technologies including containerized applications (Docker, Kubernetes), serverless architectures, traditional VM-based infrastructure, databases (SQL and NoSQL), data pipelines, and modern application frameworks. Our vendor-neutral approach ensures recommendations are tailored to your specific needs rather than platform preferences."
            },
            {
              question: "Can you help implement the roadmap afterwards?",
              answer: "Absolutely. While the assessment provides you with a comprehensive roadmap and all the information needed to proceed independently, we offer implementation support services for organizations that want our continued partnership. We can help execute the modernization plan, provide ongoing architecture guidance, or augment your team with senior engineering resources to accelerate delivery."
            },
            {
              question: "Do you need access to our code or cloud account?",
              answer: "We typically need read-only access to your cloud infrastructure to perform cost analysis and architecture review. For code, we usually only need to review architecture patterns and key components rather than full codebase access. We work with your security requirements and can conduct assessments with varying levels of access — from full read-only access to working primarily through interviews and documentation review. We'll discuss the optimal approach during the discovery call."
            },
            {
              question: "How do you handle security?",
              answer: "Security is paramount in everything we do. We sign NDAs and can work within your security protocols and compliance requirements. All access is read-only and time-limited. We follow industry best practices for data handling, never store sensitive information unnecessarily, and can work within your VPN or secure access requirements. Our team has experience with SOC 2, HIPAA, and other compliance frameworks, and we're happy to complete your vendor security questionnaires."
            }
          ]}
          />
        </LazySection>
      </div>

      {/* Bottom CTA Section */}
      <LazySection>
        <BottomCTASection
          id="contact"
          title="Ready to Modernize Your Cloud & AI Strategy?"
          description="Get a comprehensive assessment in 2–4 weeks and start reducing costs while unlocking new opportunities."
          primaryCTA={{
            text: "Book a Free Assessment Call",
            href: "#contact",
            variant: "primary"
          }}
          secondaryCTA={{
            text: "Get Sample Deliverables",
            href: "#sample-report",
            variant: "secondary"
          }}
          contactEmail="hello@example.com"
        />
      </LazySection>
    </main>
    </>
  );
}
