
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-sm text-muted-light dark:text-muted-dark border-t border-black/5 dark:border-white/5">
      <div className="container max-w-6xl mx-auto px-5">
        © {currentYear} Anthony David — Built with React & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
