import NavbarUnauthenticated from "../components/NavbarUnauthenticated";

function Contact() {
  return (
    <>
      <NavbarUnauthenticated />
      <div className="container-fluid mx-auto mt-5">
        <div className="row justify-content-center">
          <div className="col-6 border align-items-center">
            <h2 className="pt-5 pb-3 ps-5">ADD VIDEO</h2>
            <p className="pb-3 px-5 fw-lighter fs-5">
              Use the form below to add a video to the system and see the player in action.
              Please note that the video will have to be 
            </p>
            <form>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Video URL</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="time"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Recap Start Time</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="time"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Recap End Time</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="time"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Intro Start Time</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="time"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Intro End Time</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="time"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Outro Start Time</label>
              </div>
              <div className="mx-5 mb-5">
                <button type="button" class="btn btn-primary">
                  Add Video
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddVideo;
