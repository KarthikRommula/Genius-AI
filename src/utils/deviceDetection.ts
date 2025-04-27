import { useState, useEffect } from 'react';

// Extend the Navigator interface to include deviceMemory property
interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number;
}

export const isMobile = () => {
  return window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

export const isSlowDevice = () => {
  const hardwareConcurrency = navigator.hardwareConcurrency || 1;
  const deviceMemory = (navigator as NavigatorWithMemory).deviceMemory || 2;
  
  return hardwareConcurrency <= 2 || deviceMemory <= 2;
};

// Regular function to check reduced motion preference
export const checkReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Proper React Hook for reduced motion
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check initial value
    setPrefersReducedMotion(checkReducedMotion());
    
    // Set up listener for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);
  
  return prefersReducedMotion;
};