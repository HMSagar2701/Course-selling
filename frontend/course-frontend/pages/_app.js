// pages/_app.jsx
import '../styles/globals.css';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar /> {/* Only render NavBar here */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
