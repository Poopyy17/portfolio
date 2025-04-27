/**
 * @copyright 2024 James Boac
 * @license Apache-2.0
 */
import SkillCard from './SkillCard';
import figma from '../assets/figma.svg';
import css from '../assets/css3.svg';
import javascript from '../assets/javascript.svg';
import nodejs from '../assets/nodejs.svg';
import express from '../assets/expressjs.svg';
import mongodb from '../assets/mongodb.svg';
import react from '../assets/react.svg';
import tailwind from '../assets/tailwindcss.svg';
import photoshop from '../assets/photoshop.svg';
import illustrator from '../assets/illustrator.svg';
import digitalocean from '../assets/digitalocean.png';
import jwt from '../assets/jwt.png';
import nodecache from '../assets/nodecache.png';
import oAuth from '../assets/oAuth.png';
import postgresql from '../assets/postgresql.png';
import shadcn from '../assets/shadcn.png';
import tanstack from '../assets/tanstack.png';
import vite from '../assets/vite.png';
import github from '../assets/github.png';
import vercel from '../assets/vercel.png';
import neondb from '../assets/neondb.png';
import eventemitter from '../assets/nodejs.svg';

const skillItem = [
  {
    imgSrc: react,
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: javascript,
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: nodejs,
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: express,
    label: 'ExpressJS',
    desc: 'Node Framework',
  },
  {
    imgSrc: mongodb,
    label: 'MongoDB',
    desc: 'Database',
  },
  {
    imgSrc: tailwind,
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
  {
    imgSrc: figma,
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: css,
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: photoshop,
    label: 'Photoshop',
    desc: 'Design tool',
  },
  {
    imgSrc: illustrator,
    label: 'Illustrator',
    desc: 'Design tool',
  },
  {
    imgSrc: digitalocean,
    label: 'Digital Ocean',
    desc: 'DevOps/Cloud',
  },
  {
    imgSrc: github,
    label: 'Github',
    desc: 'Version Control',
  },
  {
    imgSrc: jwt,
    label: 'JWT',
    desc: 'Authentication',
  },
  {
    imgSrc: nodecache,
    label: 'Node Cache',
    desc: 'Backend Caching',
  },
  {
    imgSrc: oAuth,
    label: 'oAuth 2.0',
    desc: 'Authentication',
  },
  {
    imgSrc: postgresql,
    label: 'PostgreSQL',
    desc: 'Database',
  },
  {
    imgSrc: shadcn,
    label: 'Shadcn UI',
    desc: 'User Interface',
  },
  {
    imgSrc: tanstack,
    label: 'Tanstack Query/Table',
    desc: 'Data Management',
  },
  {
    imgSrc: vite,
    label: 'Vite',
    desc: 'Development Tool',
  },
  {
    imgSrc: vercel,
    label: 'Vercel',
    desc: 'DevOps/Cloud',
  },
  {
    imgSrc: neondb,
    label: 'Neon DB',
    desc: 'Database',
  },
  {
    imgSrc: eventemitter,
    label: 'Event Emitter 2',
    desc: 'Scheduled Events',
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Vital Tools in My Workflow</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[60ch]">
          Below are some of the tools I use to build exceptional,
          high-performing websites and applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
