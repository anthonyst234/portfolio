
import React from 'react';
import Section, { SectionTitle } from './Section';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';

const SkillPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-block bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark px-4 py-2 rounded-full font-semibold text-sm">
        {children}
    </span>
);

const Skills: React.FC = () => {
    return (
        <Section id="skills">
            <SectionTitle>Skills</SectionTitle>
            <div className="flex flex-wrap justify-center gap-6">
                {SKILLS.map((category: SkillCategory) => (
                    <div key={category.title} className="min-w-[280px] flex-1 bg-gradient-to-b from-white/10 dark:from-panel-dark to-transparent p-6 rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                        <h3 className="text-center text-xl font-bold text-accent-light dark:text-accent-dark">{category.title}</h3>
                        <div className="mt-4 flex flex-wrap justify-center gap-3">
                            {category.skills.map((skill) => (
                                <SkillPill key={skill}>{skill}</SkillPill>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
