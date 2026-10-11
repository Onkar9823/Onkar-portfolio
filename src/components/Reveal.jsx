import { useEffect, useRef, useState } from 'react';

// Fades content in once when it scrolls into view. Respects reduced motion via CSS.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={shown && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
