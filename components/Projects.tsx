
import React from 'react';
import Section, { SectionTitle } from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
