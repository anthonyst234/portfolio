
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    name: 'Poetry-haven',
    description: 'A lightweight HTML project for displaying poems and micro-poetry — clean UI for readers.',
    imageSeed: 'poetry',
    tags: ['HTML', 'CSS'],
    liveUrl: 'https://anthonyst234.github.io/Poetry-haven',
    repoUrl: 'https://github.com/anthonyst234/Poetry-haven',
  },
  {
    name: 'wallpaper-creator',
    description: 'Create wallpapers from prompts — likely uses TypeScript to generate images or templates.',
    imageSeed: 'wallpaper',
    tags: ['TypeScript', 'API'],
    liveUrl: 'https://anthonyst234.github.io/wallpaper-creator',
    repoUrl: 'https://github.com/anthonyst234/wallpaper-creator',
  },
  {
    name: 'test-5 (ecom)',
    description: 'An e-commerce starter project showing product pages, cart UX and basic checkout flows.',
    imageSeed: 'ecom',
    tags: ['TypeScript', 'React'],
    liveUrl: 'https://anthonyst234.github.io/test-5',
    repoUrl: 'https://github.com/anthonyst234/test-5',
  },
  {
    name: 'tony-dash-board',
    description: 'A dashboard UI project (analytics / management panel) built with TypeScript.',
    imageSeed: 'dashboard',
    tags: ['TypeScript', 'Dashboard'],
    liveUrl: 'https://anthonyst234.github.io/tony-dash-board',
    repoUrl: 'https://github.com/anthonyst234/tony-dash-board',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React', 'JSON', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C++'],
  },
  {
    title: 'Database & Others',
    skills: ['SQL', 'Git', 'REST APIs'],
  },
];

export const CONTACT_INFO = {
  email: 'anthonystunt234@gmail.com',
  phone: '+2348107676542',
  github: 'https://github.com/anthonyst234',
};
