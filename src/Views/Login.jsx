import { useEffect, useState } from "react";
import NavbarUnauthenticated from "../components/NavbarUnauthenticated";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { FidgetSpinner } from "react-loader-spinner";
import LoginFeedbackModal from "../components/LoginFeedbackModal";

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [showOverlay, setShowOverlay] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));

    if (loginData) {
      setFormData({
        userName: loginData.username,
        password: loginData.password,
      });
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setShowOverlay(true);

      const response = await api.post("/auth/login", formData);

      const token = response.data.token;

      // if (!token) {
      //   throw new Error("Token not returned from API");
      // }

      // Store token
      localStorage.setItem("token", token);
      setShowOverlay(false);

      // Redirect after login
      navigate("/authenticated/home");
    } catch (err) {
      document.getElementById("openLoginModal").click();
      setFormData({
        userName: "",
        password: "",
      });
      console.error(err);
      setShowOverlay(false);
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
      <LoginFeedbackModal />
      <NavbarUnauthenticated />
      <div className="container-fluid mx-auto mt-5">
        <div className="row justify-content-center">
          <div className="col-6 border align-items-center">
            <h2 className="pt-5 pb-3 ps-5">LOGIN</h2>
            <p className="pb-3 px-5 fw-lighter fs-5">
              Use the login credentials that were created for you when you
              clicked the Try It Out button. If you don't have the credentials
              you can simply click the Try It Out button and they will
              automatically be generated for you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={formData.userName}
                  name="userName"
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="userName">Username</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="mx-5 mb-5">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <button
              className="btn btn-primary d-none"
              aria-current="page"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              id="openLoginModal"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
