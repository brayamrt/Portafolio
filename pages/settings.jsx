import ThemeInfo from '../components/ThemeInfo';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <>
      <h2>Administrar Temas</h2>
      <div className={styles.container}>
        <ThemeInfo
          name="Dracula"
          icon="/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
          description="Tema oficial de Drácula. Un tema oscuro para muchos editores, shells y más."
        />
        <ThemeInfo
          name="GitHub Dark"
          icon="/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
          description="Tema de GitHub para VS Code."
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
          description="Un tema simple con colores brillantes."
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
          description="Un tema simple con colores brillantes."
        />
        <ThemeInfo
          name="Nord"
          icon="/nord.png"
          publisher="arcticicestudio"
          theme="nord"
          description="Un tema ártico, azulado y elegante de Visual Studio Code."
        />
        <ThemeInfo
          name="Night Owl"
          icon="/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
          description="Un tema de VS Code para los noctámbulos por ahí."
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Configuraciones' },
  };
}

export default SettingsPage;
