import Layout from '../components/Layout';
import SignInForm from '../components/SignInForm';
import styles from '../styles/Auth.module.css'; // Use the same module as for the sign-up

export default function Login() {
  return (
    <Layout>
      <div className={styles.formContainer}>
        <SignInForm />
      </div>
    </Layout>
  );
}
