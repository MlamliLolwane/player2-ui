import { useEffect, useState } from "react";
import NavbarAuthenticated from "../components/NavbarAuthenticated";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";
import VideoPlayer from "../components/VideoPlayer";
import { FidgetSpinner } from "react-loader-spinner";

function AuthenticatedHome() {
  const { state } = useLocation();
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState({});
  const [showOverlay, setShowOverlay] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await api.get("/videos");

    let data = response.data;
    data.sort((a, b) => b.id - a.id);

    // Map to include dynamic episode number starting at 1
    const numberedEpisodes = data.map((ep, index) => ({
      ...ep,
      episodeNumber: index + 1, // 1, 2, 3...
    }));

    setVideos(numberedEpisodes);
    if (numberedEpisodes.length > 0) {
      setVideo(numberedEpisodes[0]);
    }
    setShowOverlay(false);
  }

  function PlayVideo(selectedVideo) {
    setVideo(selectedVideo);
  }

  return (
    <>
      {showOverlay && (
        <div className="modal-backdrop fade show">
          <div
            className="position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
            style={{ zIndex: 1055 }}
          >
            <FidgetSpinner
              visible={showOverlay}
              height="80"
              width="80"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            />
          </div>
        </div>
      )}

      <NavbarAuthenticated />
      {videos.length > 0 && (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
          <div className="row">
            {video?.videoUrl && <VideoPlayer video={video} />}
          </div>
        </div>
      )}
      {!showOverlay && (
        <div className="container mt-5 px-4 border py-5">
          <div className="row gx-5 ps-1">
            <div className="col">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h2 className="mb-0">Player 2 Sample Playlist</h2>
                <Link
                  className="btn btn-primary me-4"
                  to="/authenticated/add-video"
                >
                  Add Video
                </Link>
              </div>

              <p className="fw-lighter fs-5">
                Hi and welcome to the player 2 demo project. This video player
                is designed to provide users with skip buttons for intros,
                recaps, as well as outros.
              </p>
              <p className="fw-lighter fs-5">
                Below are sample videos which you can use to see the player in
                action.
              </p>
            </div>
          </div>
          {videos.length > 0 ? (
            <div className="row gx-5 ms-1 border py-5 me-1">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="col-lg-3 border bg-light-subtle py-3 mx-5 hoverable"
                  onClick={() => PlayVideo(video)}
                >
                  <i className="bi bi-play-circle-fill"></i>{" "}
                  <span className="fw-bold">
                    Episode: {video.episodeNumber}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="row gx-5 ms-1 border py-3 me-1">
              <p className="fs-5 fw-lighter">
                {" "}
                You do not have any videos to play. Add a video to see the
                player in action.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default AuthenticatedHome;
