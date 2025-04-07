import React from "react";
import { Link } from "react-router-dom";

function Biplab() {
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
              <h1>Biplab Sengupta</h1>
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
                / Biplab Sengupta
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
                src="assets/images/director.jpg"
                className="img-fluid rounded"
                alt="Director Biplab Sengupta"
              />
            </div>
            <div className="col-md-7 col-lg-8 ps-lg-5 drtro-details">
              <div className="border p-3 p-md-4">
                <h2>Biplab Sengupta</h2>
                <p>
                  Professional in the medical industry with over 40 years of
                  experience managing various entities in pharmaceuticals,
                  diagnostics, medical equipment, blood banks, and other liaison
                  services.
                </p>
                <p>
                  <b>Profile History:</b>
                </p>
                <ul>
                  <li>
                    <b>Albachem Pharma (1978-1984)</b>
                    <br />
                    Managed a distribution house for the firm, expanding the
                    reach of Albachem across Eastern India and coordinating with
                    related agents for process planning.
                  </li>
                  <li>
                    <b>Treatment Home Products Pvt. Ltd. (1985-2014)</b>
                    <br />
                    Served as Managing Director of a leading pharmaceutical
                    manufacturer in Eastern India, specializing in medicine
                    production and medical substances for antibiotics and
                    supplements.
                  </li>
                  <li>
                    <b>United Laboratories India Pvt. Ltd. (1985-2018)</b>
                    <br />
                    Led as Managing Director of the largest high-end liquid and
                    medical manufacturing unit in Kolkata, which significantly
                    contributed to the pharmaceutical and chemical industries in
                    Eastern India.
                  </li>
                  <li>
                    <b>
                      Denovo Pharmaceuticals (1990-present, Private Limited
                      since 1995)
                    </b>
                    <br />
                    Managing Director of a leading liaison pharma house for
                    multinational medicine manufacturers, including Glaxo,
                    Dufer, Genome, and Bengal Chemicals. Currently serves in an
                    advisory role.
                  </li>
                  <li>
                    <b>Denovo Medical Devices Pvt. Ltd. (1998-present)</b>
                    <br />
                    Director of an innovative manufacturing unit specializing in
                    medical appliances and precision instruments for
                    measurement, testing, and navigation.
                  </li>
                  <li>
                    <b>Senbo Industries Ltd. (2005-2016)</b>
                    <br />
                    Managed manufacturing operations for AVS, IV, and Generic
                    Active Pharmaceutical Ingredients, supplying over 38
                    countries, including the U.S. and European markets.
                  </li>
                  <li>
                    <b>Kothari Medical Centre (2016-present)</b>
                    <br />
                    Board of Directors member at one of Kolkata’s largest
                    hospitals, overseeing the establishment and management of
                    its blood bank division.
                  </li>
                  <li>
                    <b>SB Healthcare & Pharmacy (2017-present)</b>
                    <br />
                    Proprietor of a pharmaceutical house based in Tripura,
                    handling dialysis and mechanized hospital laundry services
                    through a government PPP model. Expanded to Kolkata in 2020,
                    offering polyclinic and diagnostic services in partnership
                    with Arica Diagnostics.
                  </li>
                  <li>
                    <b>Hygieia Biogenics Pvt. Ltd. (2018-2021)</b>
                    <br />
                    Oversaw operations, ensuring high-quality medical tools and
                    medicines, and expanding the company’s reach.
                  </li>
                  <li>
                    <b>
                      Indian Association of Blood Cancer and Allied Diseases
                      (2018-present)
                    </b>
                    <br />
                    Serves as a trustee, managing blood bank services and
                    thalassemia treatment, along with financial oversight of the
                    institution's blood bank operations.
                  </li>
                  <li>
                    <b>Arica Diagnostic Pvt. Ltd. (2019-present)</b>
                    <br />
                    Managing Director of a NABL/CAP accredited and ISO 9001-2015
                    certified lab, expanding diagnostic services across West
                    Bengal in collaboration with Apollo Diagnostics and Lupin
                    Pharma.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Test section end */}

      {/* Modal Enquire */}
      <div
        className="modal getquoteModal fade"
        id="enquire"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="enquireLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md rounded-4 modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button
                type="button"
                className="btn-close m-0 shadow-none"
                style={{
                  position: "absolute",
                  right: "-8px",
                  top: "-8px",
                  padding: "8px",
                  borderRadius: "50%",
                }}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div className="getquoteModalPanel">
                <div className="sidePart w-100">
                  <h4 className="mb-1 text-center" id="enquireLabel">
                    Home Collection Form
                  </h4>
                  <small className="d-block text-center">
                    We will reach out to you within 24 hours
                  </small>

                  <form method="post" className="mt-3">
                    <div className="row g-3">
                      <div className="col-12">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="form-control"
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <select
                          name="type"
                          className="form-select w-100"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select Type
                          </option>
                          <option value="blood">Blood</option>
                          <option value="urine">Urine</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <select
                          name="test"
                          className="form-select w-100"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select Test
                          </option>
                          <option value="diabetes">Diabetes Test</option>
                          <option value="thyroid">Thyroid Test</option>
                          <option value="malaria">Malaria Test</option>
                          <option value="dengue">Dengue Test</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <textarea
                          name="message"
                          cols="5"
                          rows="3"
                          className="form-control"
                          placeholder="Your message"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Submit Your Query
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Biplab;
