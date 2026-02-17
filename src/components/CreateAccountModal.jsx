function CreateAccountModal() {
  return (
    <>
      <div
        className="modal fade"
        id="createAccountModal"
        tabindex="-1"
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
            <div className="modal-body fw-lighter pb-5 fs-5">Hang on while we create an account for your demo.
                You will be automatically logged in when done.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccountModal;
