import '../styles/globals.css';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <FooterBar />
    </>
  ) 
}

export default MyApp
