import { Link, useNavigate } from "react-router-dom";

function NavbarAuthenticated() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/authenticated/home">
            Player 2
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/authenticated/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item px-5">
                <Link className="nav-link" to="/authenticated/contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://bit.ly/MLolwane" target="_blank">PORTFOLIO</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  aria-current="page"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate('/login')
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAuthenticated;
