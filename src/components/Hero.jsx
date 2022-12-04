import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../style";
import Clappr from "@clappr/player";
const Hero = () => {
  // var playerElement = document.getElementById("player");

  // useEffect(() => {
  //   const source = "http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8";
  //   let player = null;
  //  player = new Clappr.Player({
  //     parentId: `#player`,
  //     source: source,
  //     autoPlay: true,
  //     width: "100%",
  //     height: "300px",
  //     disableErrorScreen: true,
  //   });
  //   player.attachTo(playerElement);

  //   player.play();
  //   // return () => {
  //   //   player.destroy();
  //   //   player = null;
  //   // };
  //   console.log(source);
  // }, []);

  // clappr
  // var player = new Clappr.player({
  //   source: "https://lele.bongstreams.com/live/adaptive_bong-1/playlist.m3u8",
  //   parentId: "#player",
  // });

  // let clappr_player = null;

  // useEffect(() => {
  //   clappr_player = new Clappr.Player({
  //     parentId: `#video`,
  //     source: "http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8",
  //     width: "100%",
  //     height: "300px",
  //     playbackRateConfig: {
  //       defaultValue: 1,
  //       options: [
  //         { value: 0.5, label: "0.5x" },
  //         { value: 1, label: "1x" },
  //         { value: 2, label: "2x" },
  //       ],
  //       // rateSuffix: 'x',
  //     },
  //   });

  //   return () => {
  //     clappr_player.destroy();
  //     clappr_player = null;
  //   };
  // }, []);
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      > */}
        {/* <p
          id="video"
         
        ></p> */}
        {/* <iframe
          src="https://bongstreams.com/rntv.php"
         width='100%' 
         height='100%'
        ></iframe> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
