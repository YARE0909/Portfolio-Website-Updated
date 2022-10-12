import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showSocials = router.pathname === '/about' || '/skills' ? true : false;
  return (
    <>
      <Navbar showSocials={showSocials}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
