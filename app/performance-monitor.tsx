'use client';

import { useEffect } from 'react';

/**
 * Performance monitoring component that tracks Web Vitals
 * and logs performance metrics in development mode
 */
export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development') {
      // Monitor page load performance
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          const perfData = window.performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
          const connectTime = perfData.responseEnd - perfData.requestStart;
          const renderTime = perfData.domComplete - perfData.domLoading;

          console.log('🚀 Performance Metrics:');
          console.log(`  Page Load Time: ${(pageLoadTime / 1000).toFixed(2)}s`);
          console.log(`  Connect Time: ${(connectTime / 1000).toFixed(2)}s`);
          console.log(`  Render Time: ${(renderTime / 1000).toFixed(2)}s`);

          // Check if page loads within 3 seconds requirement
          if (pageLoadTime > 3000) {
            console.warn(`⚠️  Page load time (${(pageLoadTime / 1000).toFixed(2)}s) exceeds 3 second target`);
          } else {
            console.log(`✅ Page load time meets 3 second requirement`);
          }
        });
      }

      // Monitor Web Vitals if available
      if ('PerformanceObserver' in window) {
        try {
          // Largest Contentful Paint (LCP)
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            console.log(`📊 LCP: ${lastEntry.renderTime || lastEntry.loadTime}ms`);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay (FID)
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              console.log(`📊 FID: ${entry.processingStart - entry.startTime}ms`);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift (CLS)
          let clsScore = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const layoutShiftEntry = entry as any;
              if (!layoutShiftEntry.hadRecentInput) {
                clsScore += layoutShiftEntry.value;
              }
            }
            console.log(`📊 CLS: ${clsScore.toFixed(4)}`);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // PerformanceObserver not fully supported
          console.log('Performance monitoring not fully supported in this browser');
        }
      }
    }
  }, []);

  return null;
}
