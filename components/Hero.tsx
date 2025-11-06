
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[86vh] grid place-items-center text-center pt-24 pb-12 px-5">
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
          Hi — I'm <strong className="text-accent-light dark:text-accent-dark">Anthony David</strong>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-light dark:text-muted-dark">
          Full Stack Developer. I build sleek, modern web apps with React, TypeScript, and reliable backends. Below are some of my projects — feel free to reach out.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-accent-light dark:bg-accent-dark text-panel-light dark:text-panel-dark px-6 py-3 rounded-lg font-semibold shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/20 hover:scale-105 transition-transform"
          >
            See my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
