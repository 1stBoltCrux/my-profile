import React from 'react';
import styles from './projects.scss';
import ProjectCard from './ProjectCard.js'

export default function Projects(){
  const projectArray = [
    {
    name: 'Better Doctor',
    description: 'A demonstration of API calls and data mining.',

  },
  {
    name: 'Better Doctor',
    description: 'A demonstration of API calls and data mining.',

  },
  {
    name: 'Better Doctor',
    description: 'A demonstration of API calls and data mining.',

  },
  {
    name: 'Better Doctor',
    description: 'A demonstration of API calls and data mining.',

  },
  ]

  return(
    <div className={styles.projectsWrapper}>
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
      />
      )}
      </div>
      <div className={styles.line}>
      </div>
    </div>
  );
}
