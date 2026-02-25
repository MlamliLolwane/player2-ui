import { useNavigate } from "react-router-dom";
import NavbarUnauthenticated from "../components/NavbarUnauthenticated";
import { useState } from "react";
import api from "../api/axios";
import { FidgetSpinner } from "react-loader-spinner";

function AddVideo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    videoUrl: "",
    videoType: "",
    introStartTime: "",
    introEndTime: "",
    recapStartTime: "",
    recapEndTime: "",
    outroStartTime: "",
  });
  const [showOverlay, setShowOverlay] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setShowOverlay(true);
      const response = await api.post("/videos/transactional", formData);
      setShowOverlay(false);
      navigate("/authenticated/home");
    } catch (err) {
      console.error(err);
    }
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
      <NavbarUnauthenticated />
      <div className="container-fluid mx-auto my-5">
        <div className="row justify-content-center">
          <div className="col-6 border align-items-center">
            <h2 className="pt-5 pb-3 ps-5">ADD VIDEO</h2>
            <p className="pb-3 px-5 fw-lighter fs-5">
              Use the form below to add a video to the system and see the player
              in action. Please note that only YouTube videos are supported. All
              time inputs are in seconds.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="text"
                  className="form-control"
                  id="videoUrl"
                  name="videoUrl"
                  value={formData.videoUrl}
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="videoUrl">Video URL</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="number"
                  className="form-control"
                  id="recapStartTime"
                  name="recapStartTime"
                  value={formData.recapStartTime}
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="recapStartTime">Recap Start Time</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="number"
                  className="form-control"
                  id="recapEndTime"
                  name="recapEndTime"
                  value={formData.recapEndTime}
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="recapEndTime">Recap End Time</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="number"
                  className="form-control"
                  id="introStartTime"
                  name="introStartTime"
                  value={formData.introStartTime}
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="introStartTime">Intro Start Time</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="number"
                  className="form-control"
                  id="introEndTime"
                  name="introEndTime"
                  value={formData.introEndTime}
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="introEndTime">Intro End Time</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="number"
                  className="form-control"
                  id="outroStartTime"
                  name="outroStartTime"
                  value={formData.outroStartTime}
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="outroStartTime">Outro Start Time</label>
              </div>
              <div className="mx-5 mb-5">
                <button type="submit" className="btn btn-primary">
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
