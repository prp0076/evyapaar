import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <div className="container-fluid  p-1">
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{
          background: "linear-gradient(to right,#00093c,#2d0b00",
          color: "#fff",
          borderTopLeftRadius: "60px",
          borderTopRightRadius: "60px",
        }}
      >
        <section className="p-4">
          <div className="container-fluid text-center text-md-start">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 m-50 ">
                {/* Content */}
                <h6 className="text-uppercase fw-bold text-white">
                EVYAPAR E-COMMERCE
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto text-white"
                  style={{ backgroundColor: "#7c4dff", height: 2 }}
                />
                <p className="text-uppercase fw-bold text-white">
                  We are MNC companies with good work environment and supprotive
                  staff
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 text-center col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-white">Links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <Link to="/" className="text-white text-decoration-none">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-white text-decoration-none">
                    About
                  </Link>
                </p>
                <p>
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </Link>
                </p>

                <p>
                  <Link
                    to="/policy"
                    className="text-white text-decoration-none"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 text-center col-lg-2 col-xl-2 mx-auto mb-4 ">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-white">
                  Social links
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />

                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/prp0076/"
                    className="text-white me-4"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://github.com/prp0076/"
                    className="text-white me-4"
                  >
                    <AiFillGoogleCircle />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="text-white me-4"
                  >
                    <AiOutlineInstagram />
                  </a>
                </div>

                <p className="text-center" style={{ margin: "10px" }}>
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none"
                  >
                    Help ?
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-white">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto text-white" />
                <p className="text-white">
                  {" "}
                  Habibganj , Bhopal
                  (462026)
                </p>
                <a
                  href="mailto:prp313918@gmail.com"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  prp313918@gmail.com
                </a>
                <br />
                <a
                  className="text-white"
                  style={{ textDecoration: "none", color: "white" }}
                  href="tel:6260909823"
                >
                  {" "}
                  + 91 6260909823
                </a>
              </div>
              {/* Grid column */}

              <hr />
              <div className="text-center text-white fw-bold fs-5">
                © {currentYear} Copyright : &nbsp;
                <a
                  className="text-white text-decoration-none"
                  href="https://www.linkedin.com/in/prp0076/"
                >
                  Evyapar 
                </a>
              </div>
            </div>
            {/* Grid row */}
          </div>
        </section>

        {/* Section: Links  */}
        {/* Copyright */}

        {/* Copyright */}
      </footer>
    </div>
  );
};
export default Footer;
