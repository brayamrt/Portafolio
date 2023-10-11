import ProjectCard from '../components/ProjectCard';
import { getMiscProjects } from './api/misc-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ ml_projects, bots_projects, pypi_projects, misc_projects }) => {
  return (
    <>
      <h3>Proyectos de Codigo Abierto</h3>
      <br/>
      <center><h4>Mis Proyectos</h4></center>
      <hr/>
      <div className={styles.container}>
        {misc_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const misc_projects = getMiscProjects();

  return {
    props: { title: 'Proyectos', misc_projects },
  };
}

export default ProjectsPage;
