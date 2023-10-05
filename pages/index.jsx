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
                    <span key=' JavaScript' className='Research'>
                      JavaScript
                    </span>
                    <span key='React' className='PyTorch'>
                      React
                    </span>
                    <span key='Node.js' className='Apache-Spark'>
                      Node.js
                    </span>
                    <span key='Next.js' className='SQL'>
                      Next.js
                    </span>
                    <span key='  Git' className='Computer-Vision'>
                      Git
                    </span>
                    <span key=' HTML' className='Research'>
                      HTML
                    </span>
                    <span key='CSS' className='PyTorch'>
                      CSS
                    </span>
                    <span key='MySQL' className='Apache-Spark'>
                      MySQL
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
