import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToElement = () => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Get the main element
    mainRef.current = document.querySelector('main');

    // If there's a hash in the URL, scroll to that element
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Scroll the element into view
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Focus the element if it's focusable
        if (element instanceof HTMLElement) {
          element.focus();
        }
      }
    } else {
      // If no hash, scroll to top of the page immediately
      // Use multiple methods to ensure cross-browser compatibility
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // For Safari
      if (mainRef.current) {
        mainRef.current.scrollTop = 0;
      }
      
      // Focus the main content area
      if (mainRef.current) {
        mainRef.current.focus();
      }
    }
  }, [location]);

  return mainRef;
}; 