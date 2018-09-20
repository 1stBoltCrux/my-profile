import React from 'react';
import styles from './projects.scss';
import ProjectCard from './ProjectCard.js'
import ozone1 from './assets/ozone1.png'

export default function Projects(){
  const projectArray = [
    {
    name: 'Ozone',
    description: 'Portland area rock climbing guidebook app - Built with React/Redux/Firebase.',
    image: {ozone1},
    link: 'https://github.com/1stBoltCrux/capstone-UI/blob/master/README.md'

  },
  {
    name: 'Ozone',
    description: 'Portland area rock climbing guidebook app - Built with React/Redux/Firebase.',
    image: {ozone1},
    link: 'https://github.com/1stBoltCrux/capstone-UI/blob/master/README.md'

  },
  {
    name: 'Ozone',
    description: 'Portland area rock climbing guidebook app - Built with React/Redux/Firebase.',
    image: {ozone1},
    link: 'https://github.com/1stBoltCrux/capstone-UI/blob/master/README.md'

  },
  {
    name: 'Ozone',
    description: 'Portland area rock climbing guidebook app - Built with React/Redux/Firebase.',
    image: {ozone1},
    link: 'https://github.com/1stBoltCrux/capstone-UI/blob/master/README.md'

  },
  ]

  return(
    <div className={styles.projectsWrapper}>
      <a name='work'/>
      <div className={styles.title}>
        <h1>My Work : </h1>
      </div>
      <div className={styles.line}>
      </div>
      <div className={styles.cardContainer}>


      {projectArray.map((project, index) =>
        <ProjectCard
        name={project.name}
        description={project.description}
        image={project.image}
        link={project.link}
      />
      )}
      </div>
      <div className={styles.line}>
      </div>
    </div>
  );
}
