/**
 * @copyright 2024 James Boac
 * @license Apache-2.0
 */

import ProjectCard from './ProjectCard';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';

const works = [
  {
    imgSrc: project1,
    title: 'Multi-vendor E-commerce Website',
    tags: ['API', 'CAPSTONE-PROJECT', 'Development'],
    projectLink: 'https://github.com/Poopyy17/ERP',
  },
  {
    imgSrc: project2,
    title: 'Rotary Club of Las Piñas Website (WordPress)',
    tags: ['WORDPRESS', 'CLIENT'],
    projectLink: 'https://rclaspinas.com',
  },
  {
    imgSrc: project3,
    title: 'Tax Transferral Web App',
    tags: ['Development', 'API', 'CLIENT'],
    projectLink: 'https://github.com/Poopyy17/taxtransfer1',
  },
  {
    imgSrc: project4,
    title: 'Rotary Club of Las Piñas Website (React)',
    tags: ['Web-design', 'Development', 'CLIENT'],
    projectLink: 'https://rotary-beta.vercel.app',
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
