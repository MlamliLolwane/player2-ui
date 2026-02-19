import { useLayoutEffect, useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";

function VideoPlayer({ video }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [showSkipIntro, setShowSkipIntro] = useState(false);
  const [showSkipRecap, setShowSkipRecap] = useState(false);
  const [showNextEpisode, setShowNextEpisode] = useState(false);

  const { src, intro_start, intro_end, recap_start, recap_end, outro_start } = video;

  useLayoutEffect(() => {
    if (playerRef.current) return;

    const videoElement = document.createElement("video");
    videoElement.className = "video-js vjs-big-play-centered";

    videoRef.current.appendChild(videoElement);

    const player = (playerRef.current = videojs(videoElement, {
      controls: true,
      autoplay: false,
      preload: "auto",
      fluid: true,
      responsive: true,
      techOrder: ["youtube"],
      sources: [
        {
          src,
          type: "video/youtube",
        },
      ],
      youtube: {
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
      },
    }));

    // Show / hide skip button
    // player.on("play", () => setShowSkipIntro(true));
    player.on("pause", () => setShowSkipIntro(false));
    player.on("ended", () => {
      setShowSkipIntro(false);
      setShowNextEpisode(false);
    });

    // Show skip button when intro starts
    player.on("timeupdate", () => {
      if (player.currentTime() >= intro_start) {
        setShowSkipIntro(true);
      } else {
        setShowSkipIntro(false);
      }
    });

    // Hide once intro is over
    player.on("timeupdate", () => {
      if (player.currentTime() >= intro_end) {
        setShowSkipIntro(false);
      }
    });

    // Show skip button when recap starts
    player.on("timeupdate", () => {
      if (player.currentTime() >= recap_start) {
        setShowSkipRecap(true);
      } else {
        setShowSkipRecap(false);
      }
    });

    // Hide once recap is over
    player.on("timeupdate", () => {
      if (player.currentTime() >= recap_end) {
        setShowSkipRecap(false);
      }
    });

    // Hide once recap is over
    // player.on("timeupdate", () => {
    //   if (player.currentTime() >= outro_start) {
    //     setShowNextEpisode(true);
    //   } else {
    //     setShowNextEpisode(false);
    //   }
    // });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  // Update source safely
  useEffect(() => {
    if (playerRef.current && src) {
      playerRef.current.src({
        src,
        type: "video/youtube",
      });
    }
  }, [src]);

  const skipIntro = () => {
    if (!playerRef.current) return;
    playerRef.current.currentTime(INTRO_END_TIME);
  };

  const skipRecap = () => {
    if (!playerRef.current) return;
    playerRef.current.currentTime(RECAP_END_TIME);
  };

  return (
    <>
      <div className="video-wrapper position-relative">
        <div ref={videoRef} />

        {showSkipIntro && (
          <button className="vjs-skip" onClick={skipIntro}>
            Skip Intro
          </button>
        )}

        {showSkipRecap && (
          <button className="vjs-skip" onClick={skipRecap}>
            Skip Recap
          </button>
        )}

        {showNextEpisode && (
          <button className="vjs-skip" onClick={skipRecap}>
            Next Episode
          </button>
        )}
      </div>
    </>
  );
}

export default VideoPlayer;
