
import React from 'react';
import Section, { SectionTitle } from './Section';
import { CONTACT_INFO } from '../constants';

const ContactCard: React.FC<{ title: string; link: string; linkText: string }> = ({ title, link, linkText }) => (
    <div className="min-w-[260px] flex-1 bg-gradient-to-b from-panel-light dark:from-panel-dark to-transparent p-6 rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-center">
        <div className="text-lg font-bold text-accent-light dark:text-accent-dark">{title}</div>
        <div className="mt-2">
            <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                {linkText}
            </a>
        </div>
    </div>
);

const Contact: React.FC = () => {
    return (
        <Section id="contact">
            <SectionTitle>Contact</SectionTitle>
            <div className="flex flex-wrap justify-center gap-6">
                <ContactCard title="Email" link={`mailto:${CONTACT_INFO.email}`} linkText={CONTACT_INFO.email} />
                <ContactCard title="Phone" link={`tel:${CONTACT_INFO.phone}`} linkText={CONTACT_INFO.phone.replace('+234', '0')} />
                <ContactCard title="GitHub" link={CONTACT_INFO.github} linkText="github.com/anthonyst234" />
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm text-muted-light dark:text-muted-dark">
                    I don't have direct access to your accounts — links point to your public GitHub profile and repos.
                </p>
            </div>
        </Section>
    );
};

export default Contact;
