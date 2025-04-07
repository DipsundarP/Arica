import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row py-3">
            <div className="col-lg-4 col-md-6">
              <h3 className="pb-3 logo">
                <a href="#" className="logo">
                  <img src="/assets/images/logo-2.png" width="150" alt="" />
                </a>
              </h3>
              <p className="mb-4">
                6B, Manmotha Bhattacharjee Street, Kolkata - 700 004 (Near 4 No.
                Shyambazar Metro Gate)
              </p>
              <ul className="list-unstyled mb-3 contact-info">
                <li>
                  <a
                    href="tel:9903336257"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    <i className="ri-smartphone-line me-2"></i> +91 99033 36257
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:aricadiagnos10@gmail.com"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    <i className="ri-mail-fill me-2"></i>{" "}
                    aricadiagnos10@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="pb-3 mt-4">Quick Links</h4>
              <ul className="link-widget p-0">
                <li>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="pb-3 mt-4">Services</h4>
              <ul className="link-widget p-0">
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Pathology
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Biochemical
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Microbiological
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Hormon Test
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    Biopsy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      marginLeft: "1px",
                    }}
                  >
                    FNAC
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4 className="pb-3 mt-4">Opening Time</h4>
              <ul className="link-widget p-0">
                <li>
                  <div className="timing d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Mon-Tue</h6>
                    <p>08:30 AM - 08:30 PM</p>
                  </div>
                </li>
                <li>
                  <div className="timing d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Wed-Thu</h6>
                    <p>08:30 AM - 08:30 PM</p>
                  </div>
                </li>
                <li>
                  <div className="timing d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Fri-Sat</h6>
                    <p>08:30 AM - 08:30 PM</p>
                  </div>
                </li>
                <li>
                  <div className="timing d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Sunday</h6>
                    <p>Emergency Only</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr />
          <div className="container-fluid copyright-section text-center pt-1 pb-3">
            <p className="mb-0 copy">
              © Copyright All Rights Reserved{" "}
              <Link
                to="/"
                className="text-light fw-medium"
                style={{
                  textDecoration: "none",
                  marginLeft: "1px",
                }}
              >
                Arica Diagnostics
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
