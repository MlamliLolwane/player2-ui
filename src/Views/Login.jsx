import NavbarUnauthenticated from "../components/NavbarUnauthenticated";

function App() {
  return (
    <>
      <NavbarUnauthenticated />
      <div className="container-fluid mx-auto mt-5">
        <div className="row justify-content-center">
          <div className="col-6 border align-items-center">
            <h2 className="pt-5 pb-3 ps-5">LOGIN</h2>
            <p className="pb-3 px-5 fw-lighter fs-5">
              Use the login credentials that were created for you when you clicked the Try It Out button.
              If you don't have the credentials you can simply click the Try It Out button and they will 
              automatically be generated for you.
            </p>
            <form>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3 mx-5">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Password</label>
              </div>
              <div className="mx-5 mb-5">
                <button type="button" class="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
