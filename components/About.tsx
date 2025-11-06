
import React from 'react';
import Section, { SectionTitle } from './Section';

const About: React.FC = () => {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/10 dark:from-white/5 to-transparent p-6 sm:p-8 rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
        <p className="text-lg leading-relaxed text-muted-light dark:text-muted-dark">
          I'm <strong>Anthony David</strong>, a Full Stack Developer focused on building performant, maintainable, and delightful user experiences. I use modern frontend libraries like React and TypeScript and build robust backends with Node, Python, or Java depending on needs. I value clean code, accessibility, and products that solve real problems.
        </p>
      </div>
    </Section>
  );
};

export default About;
