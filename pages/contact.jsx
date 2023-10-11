import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Encuentrame En</h3>
        <ContactCode />
      </div>
      
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contacto' },
  };
}

export default ContactPage;
