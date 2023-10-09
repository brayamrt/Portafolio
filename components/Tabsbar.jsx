import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="Inicio.jsx" path="/" />
      <Tab icon="/react_icon.svg" filename="About.jsx" path="/about" />
      <Tab icon="/react_icon.svg" filename="Contacto.jsx" path="/contact" />
      <Tab icon="/react_icon.svg" filename="Proyectos.jsx" path="/projects" />
    </div>
  );
};

export default Tabsbar;
