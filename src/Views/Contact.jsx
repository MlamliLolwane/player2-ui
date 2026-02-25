import { useEffect, useState } from "react";
import NavbarUnauthenticated from "../components/NavbarUnauthenticated";
import NavbarAuthenticated from "../components/NavbarAuthenticated";

function Contact() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }
  }, []);
  return (
    <>
      {authenticated ? <NavbarAuthenticated /> : <NavbarUnauthenticated />}
      <div className="container mt-5 px-4 border py-5">
        <div className="row gx-5 ps-1">
          <div className="col">
            <h2>Contact</h2>
            <p className="fw-lighter fs-5">
              I am actively job seeking and open for new opportunities. If you
              like what you see or have any feedback then you can get in touch
              with me through the following channels.
            </p>
          </div>
          <div className="row gx-3">
            <div className="col bg-light-subtle border py-3 mx-3">
              <h3>
                Call <i class="bi bi-telephone-fill"></i>
              </h3>
              <p className="fw-lighter fs-5">
                You can reach me directly through a phone call on the following
                number:{" "}
                <b>
                  <u> 067 1974 979</u>
                </b>{" "}
                alternatively{" "}
                <b>
                  <u> 072 1997 807</u>
                </b>
              </p>
            </div>
            <div className="col bg-light-subtle border py-3 mx-3">
              <h3>
                Email <i class="bi bi-envelope-fill"></i>
              </h3>
              <p className="fw-lighter fs-5">
                Get in touch with me through email on the following address:
                <b>
                  <u> mrlolwane96@gmail.com</u>
                </b>{" "}
                and I will get back to you swiftly.
              </p>
            </div>
            <div className="col bg-light-subtle border py-3 mx-3">
              <h3>
                LinkedIn <i class="bi bi-linkedin"></i>
              </h3>
              <p className="fw-lighter fs-5">
                You can send me a direct message on linked in through the
                following profile LinkedIn and I will get back to you as soon as
                I get a notification from the LinkedIn app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
