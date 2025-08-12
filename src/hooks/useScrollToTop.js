import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Route changed to:', pathname, 'Scrolling to top...');
    
    // Use a small delay to ensure the DOM has fully updated
    const scrollToTop = () => {
      console.log('Executing scroll to top...');
      
      // Use multiple methods to ensure scrolling works
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Fallback for older browsers
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
      
      // Also try scrolling the document element
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      
      if (document.body) {
        document.body.scrollTop = 0;
      }
      
      console.log('Scroll to top completed. Current scroll position:', window.scrollY);
    };

    // Immediate scroll
    scrollToTop();
    
    // Also try after a small delay to ensure everything is rendered
    const timeoutId = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
};

export default useScrollToTop;
