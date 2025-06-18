'use client';

import { useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    // Track page views
    const trackPageView = (url: string) => {
      console.log('Page View:', url);
      // Send to your analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-002SJRKF7E', {
          page_path: url,
        });
      }
    };

    // Track custom events
    const trackEvent = (eventData: AnalyticsEvent) => {
      console.log('Custom Event:', eventData);
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventData.event, {
          event_category: eventData.category,
          event_label: eventData.label,
          value: eventData.value,
        });
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > 25 && scrollPercent <= 50) {
        trackEvent({
          event: 'scroll',
          category: 'engagement',
          action: 'scroll_25_percent',
          label: window.location.pathname,
        });
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        trackEvent({
          event: 'scroll',
          category: 'engagement',
          action: 'scroll_50_percent',
          label: window.location.pathname,
        });
      } else if (scrollPercent > 75) {
        trackEvent({
          event: 'scroll',
          category: 'engagement',
          action: 'scroll_75_percent',
          label: window.location.pathname,
        });
      }
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 30) {
        trackEvent({
          event: 'timing',
          category: 'engagement',
          action: 'time_on_page',
          label: window.location.pathname,
          value: timeSpent,
        });
      }
    };

    // Track clicks on important elements
    const trackClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A') {
        const linkElement = target as HTMLAnchorElement;
        const href = linkElement.href;
        if (href.includes('github.com')) {
          trackEvent({
            event: 'click',
            category: 'social',
            action: 'github_click',
            label: href,
          });
        } else if (href.includes('linkedin.com')) {
          trackEvent({
            event: 'click',
            category: 'social',
            action: 'linkedin_click',
            label: href,
          });
        } else if (href.includes('ai-chatbot-dmxq.onrender.com')) {
          trackEvent({
            event: 'click',
            category: 'project',
            action: 'ai_chatbot_click',
            label: href,
          });
        }
      }
    };

    // Initialize tracking
    trackPageView(window.location.pathname);
    
    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth);
    window.addEventListener('beforeunload', trackTimeOnPage);
    document.addEventListener('click', trackClicks);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
      document.removeEventListener('click', trackClicks);
    };
  }, []);

  return null;
} 