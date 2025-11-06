
import React, { useRef } from 'react';
import { Project } from '../types';
import { ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = -10 * ((y - height / 2) / height);
    const rotateY = 10 * ((x - width / 2) / width);

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-gradient-to-b from-white/5 to-transparent rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-300 ease-out will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <img
        src={`https://picsum.photos/seed/${project.imageSeed}/800/600`}
        alt={`${project.name} screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="mt-2 text-muted-light dark:text-muted-dark text-sm">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-bold bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex justify-between items-center text-sm font-semibold text-muted-light dark:text-muted-dark">
          <div>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
              Live
            </a>
            <span className="mx-2">•</span>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
              Repo
            </a>
          </div>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
