import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'bdricardo71@gmail.com',
    href: 'mailto:bdricardo71@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/brayam-ricardo',
    href: 'https://www.linkedin.com/in/brayam-ricardo/',
  },
  {
    social: 'GitHub',
    link: 'github.com/brayamrt',
    href: 'https://github.com/brayamrt',
  },
  {
    social: 'Sitio Web',
    link: 'bricardo.tech',
    href: 'https://bricardo.tech',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>Redes Sociales</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
