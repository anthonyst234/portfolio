
import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = 'py-20' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`container max-w-6xl mx-auto px-5 transition-all duration-700 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-bold">{children}</h2>
        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-accent-light dark:from-accent-dark to-transparent mt-3"></div>
    </div>
);


export default Section;
