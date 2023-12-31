// pages/about/About.js
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles['about-container']}>
      <header className={styles['about-header']}>
        <h1>About</h1>
      </header>

      <main className={styles['about-main']}>
        <section className={styles['about-content']}>
          <h2 className={styles['about-h2']}>Next.js Project</h2>
          <p>
            This is the frontend for the CICD project. This 
            project utilizes MongoDB, Springboot for the backend server-side functionality.
          </p>
          <p>
            The frontend is built using Next js, providing a seamless and interactive user experience.
          </p>
        </section>
      </main>

      <footer className={styles['about-footer']}>
        <p>&copy; All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
