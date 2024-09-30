// components/Layout.jsx
import Head from 'next/head';
import styles from '../styles/Layout.module.css'; // Create this file for layout-specific styles

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Course Selling App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
