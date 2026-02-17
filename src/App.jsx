import VideoPlayer from "./components/VideoPlayer";
import NavbarUnauthenticated from "./components/NavbarUnauthenticated";

function App() {
  const video = {
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    intro_start: 0
  }
  return (
    <>
      <NavbarUnauthenticated />
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
              Below are sample videos which you can use to see the player in action.
            </p>
          </div>
        </div>
        <div className="row gx-5 ms-1 border py-5 me-1">
          <div className="col border bg-light-subtle py-3 mx-5">
            <i class="bi bi-play-circle-fill"></i>{" "}
            <span className="fw-bold">Eps: 1</span> <span>Pilot</span>
          </div>
          <div className="col border bg-light-subtle py-3 mx-5">
            <i class="bi bi-play-circle-fill"></i>{" "}
            <span className="fw-bold">Eps: 2</span>{" "}
            <span> Are we there yet</span>
          </div>
          <div className="col border bg-light-subtle py-3 mx-5">
            <i class="bi bi-play-circle-fill"></i>{" "}
            <span className="fw-bold">Eps: 3</span>{" "}
            <span>Test Of Friendship</span>
          </div>
        </div>
      </div>
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <VideoPlayer
            video={video}
          />
        </div>
      </div>
    </>
  );
}

export default App;
