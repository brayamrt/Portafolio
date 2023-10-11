import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Brayam David Ricardo</h1>
            <h6 className={styles.bio}>Full Stack Developer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Habilidades</h4>
                  <div className={styles.tags}>
                    <span key=' JavaScript' className='Verde'>
                      JavaScript
                    </span>
                    <span key='React' className='Rojo'>
                      React
                    </span>
                    <span key='Node.js' className='Lila'>
                      Node.js
                    </span>
                    <span key='Next.js' className='Rosa'>
                      Next.js
                    </span>
                    <span key='Git' className='Amarillo'>
                      Astro
                    </span>
                    <span key='Git' className='Verde'>
                      Git
                    </span>
                    <span key='HTML' className='Rojo'>
                      HTML
                    </span>
                    <span key='CSS' className='Lila'>
                      CSS
                    </span>
                    <span key='MySQL' className='Rosa'>
                      MySQL
                    </span>
                    <span key='MySQL' className='Amarillo'>
                      NoSQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>Acerca de mi</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contacto</button>
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpeg"
                width={300}
                height={290}
                alt="Brayam' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Inicio' },
  };
}
