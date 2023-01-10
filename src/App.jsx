import styles from "./style";
import { CTA, Footer, Navbar, Hero } from "./components";
import { useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";
import Clappr from "@clappr/player";
import { Adsense } from "@ctrl/react-adsense";
import ReactGA from "react-ga";
import Iframe from "react-iframe";
import { ads } from "./assets";

ReactGA.initialize(TRACKING_ID);

const App = () => {
  

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  //

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary flex-1`}>
        <div className=" w-full">
          <div className=" text-white bg-primary aspect-video border">
            <Iframe
              url="https://www.ovostreams.com/player1.php"
              width="100%"
              height="700px"
            />
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
