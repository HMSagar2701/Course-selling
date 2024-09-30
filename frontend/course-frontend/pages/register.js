import Layout from '../components/Layout';
import SignUpForm from '../components/SignUpForm';
import styles from '../styles/Auth.module.css'; // Use the same module as for the login

export default function Register() {
  return (
    <Layout>
      <div className={styles.formContainer}>
        <SignUpForm />
      </div>
    </Layout>
  );
}
