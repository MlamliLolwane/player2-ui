import NavbarUnauthenticated from "../components/NavbarUnauthenticated";
import NavbarAuthenticated from "../components/NavbarAuthenticated";
import { useLocation } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { useEffect, useState } from "react";

function Player() {
  const { state } = useLocation();
  const { video, videos } = state || {};
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(video);
    if (token) {
      setAuthenticated(true);
    }
  }, []);
  return (
    <>
      {authenticated ? <NavbarAuthenticated /> : <NavbarUnauthenticated />}
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row">{video && <VideoPlayer video={video} />}</div>
      </div>

      <div className="container mt-2 px-4 border py-5">
        <div className="row gx-5 ms-1 border py-5 me-1">
          {videos &&
            videos.map((d) => (
              <div
                key={d.id}
                className="col-lg-3 border bg-light-subtle py-3 mx-5 hoverable"
                onClick={() => PlayVideo(d, data)}
              >
                <i className="bi bi-play-circle-fill"></i>{" "}
                <span className="fw-bold">Episode: {d.episodeNumber}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Player;
