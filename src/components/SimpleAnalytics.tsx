'use client';

import { useEffect } from 'react';

export default function SimpleAnalytics() {
  useEffect(() => {
    // Track page views
    console.log('📊 Page View:', window.location.pathname);
    
    // Track scroll depth
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > 25 && scrollPercent <= 50) {
        console.log('📊 Scroll: 25% of page');
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        console.log('📊 Scroll: 50% of page');
      } else if (scrollPercent > 75) {
        console.log('📊 Scroll: 75% of page');
      }
    };

    // Track clicks on important links
    const trackClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A') {
        const linkElement = target as HTMLAnchorElement;
        const href = linkElement.href;
        
        if (href.includes('github.com')) {
          console.log('📊 Click: GitHub link');
        } else if (href.includes('linkedin.com')) {
          console.log('📊 Click: LinkedIn link');
        } else if (href.includes('ai-chatbot-dmxq.onrender.com')) {
          console.log('📊 Click: AI Chatbot project');
        } else if (href.includes('mailto:')) {
          console.log('📊 Click: Email link');
        }
      }
    };

    // Track form submissions
    const trackFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      if (form.id === 'contact-form') {
        console.log('📊 Form: Contact form submitted');
      }
    };

    // Add event listeners
    window.addEventListener('scroll', trackScroll);
    document.addEventListener('click', trackClicks);
    document.addEventListener('submit', trackFormSubmit);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScroll);
      document.removeEventListener('click', trackClicks);
      document.removeEventListener('submit', trackFormSubmit);
    };
  }, []);

  return null;
} 