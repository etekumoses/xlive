import React, { useEffect } from "react";
import Clappr from "@clappr/player";

const ClapprComponent = ({ id, source, mute, height, width }) => {
  let clappr_player = null;

  useEffect(() => {
    clappr_player = new Clappr.Player({
      parentId: `#${id}`,
      source: source,
      mute,
      height,
      width,

      playbackRateConfig: {
        defaultValue: 1,
        options: [
          { value: 0.5, label: "0.5x" },
          { value: 1, label: "1x" },
          { value: 2, label: "2x" },
        ],
        // rateSuffix: 'x',
      },
    });

    return () => {
      clappr_player.destroy();
      clappr_player = null;
    };
  }, []);

  return (
    <div>
      <p id={id}></p>
    </div>
  );
};
export default ClapprComponent;
