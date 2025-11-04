
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: IntersectionObserverOptions = {}
): [RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
  const targetRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else {
            if (!triggerOnce) {
               setIsIntersecting(false);
            }
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [targetRef, isIntersecting];
};
