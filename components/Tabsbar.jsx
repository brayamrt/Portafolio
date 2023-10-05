import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="Inicio.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="Acerca de mi.html" path="/about" />
      <Tab icon="/yml_icon.svg" filename="Contacto.html" path="/contact" />
      <Tab icon="/py_icon.svg" filename="Proyectos.jsx" path="/projects" />
      {/* <Tab icon="/json_icon.svg" filename="articles.json" path="/articles" /> */}
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
