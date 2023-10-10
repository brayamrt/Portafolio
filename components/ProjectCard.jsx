import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={project.image}
          alt={project.name}
          width={500} 
          height={170} 
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Codigo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

