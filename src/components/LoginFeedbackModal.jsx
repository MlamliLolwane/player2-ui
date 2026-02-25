import { forwardRef } from "react";

function LoginFeedbackModal() {
  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-1">
            <div className="modal-header">
              <h1 className="fs-5" id="exampleModalLabel">
                LOGIN FAILED
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-lighter fs-5">
              <p>
                There was an error logging you in. Please check your username
                and password then try again.
              </p>
            </div>
            <div class="ms-3 mb-3">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFeedbackModal;
