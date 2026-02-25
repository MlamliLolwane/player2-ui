import { useEffect, useState } from "react";
import NavbarUnauthenticated from "../components/NavbarUnauthenticated";
import NavbarAuthenticated from "../components/NavbarAuthenticated";

function About() {
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
            <h2>About</h2>
            <p className="fw-lighter fs-5">
              Player 2 is a video player created to give users controls to skip
              recaps, intros as well as outros. I believe that these features
              offer improved user experience and are a nice could haves for any
              video playing platform.
            </p>
            <p className="fw-lighter fs-5">
              The recap, intro, as well as outro times are not required and can
              be left blank if the provided video does not have them.
            </p>
            <p className="fw-lighter fs-5">
              Below is the Entity Relationship Diagram of the Player 2 database.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto mt-4">
            <div className="text-center">
              <img
                src="/erd.png"
                class="img-fluid mx-auto d-block"
                alt="Player 2 Entity Relationship Diagram"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
