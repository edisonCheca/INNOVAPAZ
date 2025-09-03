import { useCallback } from 'react';

interface UseScrollToOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
  offset?: number;
}

export const useScrollTo = () => {
  const scrollToElement = useCallback((elementId: string, options: UseScrollToOptions = {}) => {
    const { behavior = 'smooth', offset = 0 } = options;

    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior,
    });
  }, []);

  const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, []);

  return { scrollToElement, scrollToTop };
};
