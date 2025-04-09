import React from "react";
import { Link } from "react-router-dom";
import Enquire from "../components/Enquire";
function Drpritam() {
  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="assets/images/logo.png" alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            data-bs-backdrop="false"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/book">
                    Book a Test
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    style={{ padding: 0 }}
                  >
                    Doctor Book
                  </button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/package">
                    Package
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    style={{ padding: 0 }}
                  >
                    Services
                  </button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Health Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li>
                  <button
                    type="button"
                    data-bs-target="#enquire"
                    data-bs-toggle="modal"
                    className="btn btn-outline-danger"
                  >
                    <i className="ri-truck-line"></i> Home Collection
                  </button>
                </li>
                <li className="ms-2">
                  <button className="btn btn-outline-primary">
                    View Report
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* // end */}

      {/* Inner banner section */}
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1>Dr. Pratim Sengupta</h1>
              <p className="m-0">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Home{" "}
                </Link>{" "}
                / Dr. Pratim Sengupta
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner banner section end */}

      {/* Book Your Test section */}
      <section className="py-5 package">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <img
                src="assets/images/Pratim-Sengupta.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
            <div className="col-md-7 col-lg-8 ps-lg-5 drtro-details">
              <div className="border p-3 p-md-4">
                <h2>Dr. Pratim Sengupta</h2>
                <small className="mb-3 d-block fs-5">MD,DM (Nephrology)</small>
                <ul>
                  <li>
                    Brief Professional Summary:
                    <ol>
                      <li>
                        Accomplished Nephrologist and Renal transplant Physician
                        of the country, Researcher in field of Nephrology and
                        basic science
                      </li>
                    </ol>
                  </li>
                  <li>
                    Current Prof Attributes:
                    <ol>
                      <li>Managing Director Nephrocare India Ltd</li>
                      <li>
                        Consultant Nephrologist and Renal Transplant Physician ,
                        BelleVue Clinic and ILS Hospital Kolkata.
                      </li>
                      <li>President The Kidney Care Society</li>
                    </ol>
                  </li>
                  <li>
                    Publication Authorship , Awards & Accolades:
                    <ol>
                      <li>
                        More than 50 publications in National and international
                        peer reviewed journal
                      </li>
                      <li>
                        Author of Art of living with Kidney disease and Art of
                        cooking htmlFor renal patients
                      </li>
                      <li>Member of Editorial board of the Journal Nephron</li>
                      <li>
                        Awarded with most prestigious Geeta Mukhopadhyay Das
                        memorial award of Calcutta University htmlFor his
                        academic contribution in the field of medicine. Awarded
                        with Best Care Report Award of JAPI , 2015
                      </li>
                      <li>Recipient of Bharat Jyoti Award of the year 2019</li>
                    </ol>
                  </li>
                  <li>
                    He has pioneered in AI based digital decision making portal
                    in Clinical Nephrology
                  </li>
                  <li>
                    He has a special interest on conservative nephrology and
                    retarding renal disease progression and renal nutrition and
                    actively involved in multiple research in these field and
                    published multiple original work in national and
                    international peer reviewed journal
                  </li>
                  <li>
                    Founder Member of Society of Renal Nutrition , life member
                    of ISN,ERA EDTA,TTS
                  </li>
                  <li>
                    National Advisor of NOTTO, his continuous leadership and
                    involvement took cadaver organ donation and successful
                    transplantation to a new height in eastern India.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Book Your Test section end */}

      {/* Modal Enquire */}
      <Enquire />
    </>
  );
}

export default Drpritam;
