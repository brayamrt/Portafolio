import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="Inicio.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="Acerca de mi.html" path="/about" />
      <Tab icon="/html_icon.svg" filename="Contacto.html" path="/contact" />
      <Tab icon="/react_icon.svg" filename="Proyectos.jsx" path="/projects" />
      <Tab icon="/markdown_icon.svg" filename="GitHub.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
