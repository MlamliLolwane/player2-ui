function CredentialsModal() {
  return (
    <>
      <div
        className="modal fade"
        id="credentialsModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-1">
            <div className="modal-header">
              <h1 className="fs-5" id="exampleModalLabel">
                DEMO ACCOUNT CREATED
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
              Your demo account has been created. You can copy the created
              credentials and use them later to login.</p>
              <p> Username: user01djfbhjd</p>
              <p> Password: user01djfbhjd</p>
            </div>
            <div class="modal-footer mx-auto">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Copy Credentials
              </button>
              <button type="button" class="btn btn-primary">
                Proceed To Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CredentialsModal;
