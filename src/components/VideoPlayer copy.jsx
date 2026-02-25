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

  const {
    videoUrl,
    introStartTime,
    introEndTime,
    recap_start,
    recapEndTime,
    outroStartTime,
  } = video;

  // Initialize player once
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
          src: videoUrl,
          type: "video/youtube",
        },
      ],
      youtube: {
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
      },
    }));

    // Single optimized timeupdate listener
    player.on("timeupdate", () => {
      const currentTime = player.currentTime();

    // Show skip button when intro starts
      if (currentTime >= intro_start) {
        setShowSkipIntro(true);
      } else {
        setShowSkipIntro(false);
      }

    // Hide once intro is over
      if (currentTime >= intro_end) {
        setShowSkipIntro(false);
      }

    // Show skip button when recap starts
      if (currentTime >= recap_start) {
        setShowSkipRecap(true);
      } else {
        setShowSkipRecap(false);
      }

    // Hide once recap is over
      if (currentTime >= recap_end) {
        setShowSkipRecap(false);
      }
    });

    player.on("pause", () => {
      setShowSkipIntro(false);
      setShowSkipRecap(false);
    });

    player.on("ended", () => {
      setShowSkipIntro(false);
      setShowSkipRecap(false);
      setShowNextEpisode(false);
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  // Update video source when videoUrl changes
  useEffect(() => {
    if (playerRef.current && videoUrl) {
      playerRef.current.src({
        src: videoUrl,
        type: "video/youtube",
      });
    }
  }, [videoUrl]);

  const skipIntro = () => {
    if (!playerRef.current) return;
    playerRef.current.currentTime(introEndTime);
  };

  const skipRecap = () => {
    if (!playerRef.current) return;
    playerRef.current.currentTime(recapEndTime);
  };

  return (
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

      {showNextEpisode && <button className="vjs-skip">Next Episode</button>}
    </div>
  );
}

export default VideoPlayer;
