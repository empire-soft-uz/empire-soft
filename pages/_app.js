import "../styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
