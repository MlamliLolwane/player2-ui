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
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          {video?.videoUrl && (
            <VideoPlayer key={video.videoUrl} video={video} />
          )}
        </div>
      </div>
      <div className="container mt-5 px-4 border py-5">
        <div className="row gx-5 ps-1">
          <div className="col-8">
            <h2>Player 2 Sample Playlist</h2>
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
        <div className="row gx-5 ms-1 border py-5 me-1">
          {videos &&
            videos.map((video) => (
              <div
                key={video.id}
                className="col-lg-3 border bg-light-subtle py-3 mx-5 hoverable"
                onClick={() => PlayVideo(video)}
              >
                <i className="bi bi-play-circle-fill"></i>{" "}
                <span className="fw-bold">Episode: {video.episodeNumber}</span>
              </div>
            ))}
        </div>
      </div>
      {/* <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <VideoPlayer
            video={video}
          />
        </div>
      </div> */}
    </>
  );
}

export default App;
