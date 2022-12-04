import styles from "./style";
import { CTA, Footer, Navbar, Hero } from "./components";
import { useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";
import Clappr from "@clappr/player";
import { Adsense } from "@ctrl/react-adsense";
import ReactGA from "react-ga";
import Iframe from "react-iframe";
import { ads } from "./assets";
import { AdBlockDetectedWrapper } from "adblock-detect-react";

const TRACKING_ID = "G-4P31SHF3RJ"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

const App = () => {
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);
  //

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  //
  var videos = [
    "http://20.234.116.147/live/XYT/playlist.m3u8",
    "http://137.116.209.34/live/XYT/playlist.m3u8",
    "http://4.204.227.72/live/XYT/playlist.m3u8",
    "http://20.199.179.139/live/XYT/playlist.m3u8",
    "http://20.234.125.188/live/XYT/playlist.m3u8",
    "http://20.123.166.178/live/XYT/playlist.m3u8",
    "http://20.220.195.76/live/XYT/playlist.m3u8",
    "http://20.199.181.59/live/XYT/playlist.m3u8",
    "http://20.93.1.219/live/XYT/playlist.m3u8",
    "http://20.50.199.211/live/XYT/playlist.m3u8",
    "http://4.229.232.102/live/XYT/playlist.m3u8",
    "http://51.107.17.42/live/XYT/playlist.m3u8",
    "http://20.223.237.54/live/XYT/playlist.m3u8",
    "http://51.124.209.87/live/XYT/playlist.m3u8",
    "http://20.220.186.37/live/XYT/playlist.m3u8",
    "http://20.203.153.198/live/XYT/playlist.m3u8",
    "http://4.231.250.63/live/XYT/playlist.m3u8",
    "http://20.13.121.197/live/XYT/playlist.m3u8",
    "http://20.63.113.191/live/XYT/playlist.m3u8",
    "http://51.103.211.145/live/XYT/playlist.m3u8",
  ];

  var player = new Clappr.Player({
    source: videos[Math.floor(Math.random() * videos.length)],

    parentId: "#player",
    preload: "auto",
    autoPlay: "true",
    width: "640",
    height: "430",
  });
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary flex-1`}>
        <div className="w-full mt-3 ">
          <img src={ads} alt="ad" width="100%" />
        </div>
        <div className=" w-full">
          {/* <div className="text-white bg-primary">
            <Adsense
              client="ca-pub-8770261708324695"
              slot="2901227363"
              className="block"
              layout="in-article"
              format="fluid"
            />
          </div> */}
          <AdBlockDetectedWrapper>
            <div className=" text-white bg-primary aspect-video border">
              <Iframe
                url="https://www.ovostreams.com/player1.php"
                // url="https://givemenbastreams.com/soccer.php"
                // url="https://bongstreams.com/rntv.php"
                width="100%"
                height="700px"
              />
            </div>
          </AdBlockDetectedWrapper>
          {/* <div className="text-white bg-primary">
            <Adsense
              client="ca-pub-8770261708324695"
              slot="2901227363"
              className="block"
              layout="in-article"
              format="fluid"
            />
          </div> */}
        </div>
        <div className="w-full mt-3">
          <Adsense
            client="ca-pub-8770261708324695"
            slot="2901227363"
            className="block"
            layout="in-article"
            format="fluid"
          />
        </div>
        {/* <iframe
          src="https://bongstreams.com/rntv.php"
         
        ></iframe> */}
        {/* <iframe
          src="https://d3awnlgqz0szay.cloudfront.net/out/v1/b841c366cbe540e6a106c3ba83e5c8d6/index.m3u8"
          width="100%"
          height="500px"
          allowFullScreen
          
          // onContextMenu={(e)=>e.preventDefault()}
        ></iframe> */}
        {/* <video
          src="https://d3awnlgqz0szay.cloudfront.net/out/v1/b841c366cbe540e6a106c3ba83e5c8d6/index.m3u8"
          width="500"
          height="288"
          controls
          autoPlay
        /> */}
        {/* <ReactHlsPlayer
          // src="https://d3awnlgqz0szay.cloudfront.net/out/v1/b841c366cbe540e6a106c3ba83e5c8d6/index.m3u8"
          // src="https://live1.techstribes.com/techstribes/live/15.m3u8"
          // src="https://lele.bongstreams.com/live/adaptive_bong-2/playlist.m3u8"
          // src="https://luinr.bongstreams.com/live/adaptive_bong-1/playlist.m3u8"
          src="https://ovocloud.site/live/abr_s-1/playlist.m3u8"
          autoPlay={true}
          controls={true}
          width="100%"
          height="auto"
        /> */}
        {/* <Iframe
          url="https://www.ovostreams.com/player1.php"
          width="100%"
          height="700px"
        /> */}
        ,{/* <img src={card} alt="bg" /> */}
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
