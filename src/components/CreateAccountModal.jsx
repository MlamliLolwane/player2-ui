import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function CreateAccountModal() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  async function createDemoAccount() {
    try {
      const response = await api.post("/auth/register-and-login");

      const token = response.data.token;
      if (!token) {
        throw new Error("Token not returned from API");
      }

      localStorage.setItem("token", token);

      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  function copyCredentials() {
    const loginData = {
      username: data.username,
      password: data.password,
    };

    localStorage.setItem("loginData", JSON.stringify(loginData));

    document.getElementById('copyButton').innerHTML = "Copied";
  }

  function navigateAway() {
    const modalEl = document.getElementById("createAccountModal");

    const modalInstance =
      window.bootstrap.Modal.getInstance(modalEl) ||
      new window.bootstrap.Modal(modalEl);

    modalInstance.hide();
    setTimeout(() => {
      navigate("/authenticated/home");
    }, 200);
  }

  useEffect(() => {
    const modal = document.getElementById("createAccountModal");

    if (!modal) return;

    const handleModalShown = () => {
      createDemoAccount();
    };

    modal.addEventListener("shown.bs.modal", handleModalShown);

    return () => {
      modal.removeEventListener("shown.bs.modal", handleModalShown);
    };
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id="createAccountModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-1">
            <div className="modal-header">
              <h1 className="fs-5" id="exampleModalLabel">
                CREATING DEMO ACCOUNT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {!data.token ? (
              <div className="modal-body fw-lighter pb-5 fs-5">
                Hang on while we create an account for your demo. You will be
                automatically logged in when done.
              </div>
            ) : (
              <>
                <div className="modal-body fw-lighter fs-5">
                  <p>
                    Your demo account has been created. You can copy the created
                    credentials and use them later to login.
                  </p>
                  <p> Username: {data.username}</p>
                  <p> Password: {data.password}</p>
                </div>

                <div class="modal-footer mx-auto">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    id="copyButton"
                    onClick={copyCredentials}
                  >
                    Copy Credentials
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={navigateAway}
                  >
                    Proceed To Demo
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccountModal;
