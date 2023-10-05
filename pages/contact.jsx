import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   console.log(process.env.NEXT_PUBLIC_API_URL);
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
  //     method: 'POST',
  //     body: JSON.stringify({ name, email, subject, message }),
  //   });
  //   if (res.ok) {
  //     alert('Your response has been received!');
  //     setName('');
  //     setEmail('');
  //     setSubject('');
  //     setMessage('');
  //   } else {
  //     alert('There was an error. Please try again in a while.');
  //   }
  // };

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
    props: { title: 'Contact' },
  };
}

export default ContactPage;
