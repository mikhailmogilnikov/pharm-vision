import { useEffect } from 'react';

export const useSmoothBehavior = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
};
