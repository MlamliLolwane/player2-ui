import NavbarUnauthenticated from "./components/NavbarUnauthenticated";
import { useNavigate } from "react-router-dom";
import ConvertToSeconds from "./helpers/conversions";
import { useEffect, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const navigate = useNavigate();
  const [video, setVideo] = useState({});

  const videos = [
    {
      episodeNumber: 1,
      videoUrl: "https://www.youtube.com/watch?v=USOQid7YJ2s",
      introStartTime: 0,
      introEndTime: ConvertToSeconds("00:01:16"),
      recap_start: 0,
      recapEndTime: 0,
      outroStartTime: ConvertToSeconds("00:57:07"),
    },
    {
      episodeNumber: 2,
      videoUrl: "https://www.youtube.com/watch?v=eboH6XXU2eE",
      introStartTime: 0,
      introEndTime: 0,
      recap_start: 0,
      recapEndTime: 0,
      outroStartTime: 0,
    },
    {
      episodeNumber: 3,
      videoUrl: "https://www.youtube.com/watch?v=IjB-T_C3Vuw",
      introStartTime: 0,
      introEndTime: 0,
      recap_start: 0,
      recapEndTime: 0,
      outroStartTime: 0,
    },
  ];
  useEffect(() => {
    setVideo(videos[0]);
  }, []);
  function PlayVideo(selectedVideo) {
    setVideo(selectedVideo);
  }
  return (
    <>
      <NavbarUnauthenticated />
      <div className="container">
        <div className="row my-5 d-flex align-items-center justify-content-center">
          <div className="col-md-9 col-12">
            {video?.videoUrl && (
              <VideoPlayer key={video.videoUrl} video={video} />
            )}
          </div>
        </div>
      </div>
      <div className="container mt-3 px-4 border py-5">
        <div className="row px-2">
          <div className="col-12">
            <h3>Player 2 Sample Playlist</h3>
            <p className="fw-lighter fs-5">
              Hi and welcome to the player 2 demo project. This video player is
              designed to provide users with skip buttons for intros, recaps, as
              well as outros.
            </p>
            <p className="fw-lighter fs-5">
              Below are sample videos which you can use to see the player in
              action.
            </p>
          </div>
        </div>
        <div className="row border pt-5 mx-1 d-flex align-items-center justify-content-center">
          {videos &&
            videos.map((video) => (
              <div
                key={video.id}
                className="col-10 col-lg-3 border bg-light-subtle py-3 mx-3 hoverable mb-5"
                onClick={() => PlayVideo(video)}
              >
                <i className="bi bi-play-circle-fill"></i>{" "}
                <span className="fw-bold">Episode: {video.episodeNumber}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
