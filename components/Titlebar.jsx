import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>Archivo</p>
        <p>Editar</p>
        <p>Selección</p>
        <p>Ver</p>
        <p>Ir</p>
        <p>Ejecutar</p>
        <p>Terminal</p>
        <p>Ayuda</p>
      </div>
      <p className={styles.title}>Brayam Ricardo - Portafolio</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
