import React from "react";
import { Link } from "react-router-dom";

function Contact() {
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
              <h1>Contact</h1>
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
                / Contact
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner banner section end */}

      {/* Contact Section */}
      <section className="contact py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="title mb-4">Contact Us</h2>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <img
                src="assets/images/conntact-avatar.svg"
                className="img-fluid"
                alt="Contact Avatar"
              />
            </div>
            <div className="col-lg-6">
              <form className="form-control shadow p-4 rounded-3 border-0">
                <h4 className="text-center text-primary mb-1">Get In Touch</h4>
                <p className="text-center mb-4 text-muted">
                  We will reach out to you within 24 hours
                </p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="First name"
                      className="form-control shadow-none py-2"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="form-control shadow-none py-2"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="form-control shadow-none py-2"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="form-control shadow-none py-2"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <select
                      className="form-select shadow-none py-2"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select
                      className="form-select shadow-none py-2"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select age
                      </option>
                      <option value="0-10">0 - 10 Years</option>
                      <option value="11-20">11 - 20 Years</option>
                      <option value="21-30">21 - 30 Years</option>
                      <option value="40+">40+ Years</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      style={{ resize: "none" }}
                      className="form-control shadow-none py-2"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit your request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* // end */}

      {/* General info section */}
      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="shadow p-3 rounded-3 text-center">
                <i className="ri-map-pin-fill fs-3 text-danger"></i>
                <h4 className="mb-1 text-danger">Address</h4>
                <p className="mb-0">
                  Lorem ipsum, dolor sit amet consectetur - 700 039
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="shadow p-3 rounded-3 text-center">
                <i className="ri-phone-fill fs-3 text-danger"></i>
                <h4 className="mb-1 text-danger">Phone</h4>
                <p className="mb-0">
                  <a
                    href="tel:1234567890"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      marginLeft: "1px",
                    }}
                  >
                    +123 4567 8900
                  </a>
                </p>
                <p className="mb-0">
                  <a
                    href="tel:1234567890"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      marginLeft: "1px",
                    }}
                  >
                    +123 4567 8900
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="shadow p-3 rounded-3 text-center">
                <i className="ri-mail-send-fill fs-3 text-danger"></i>
                <h4 className="mb-1 text-danger">Email</h4>
                <p className="mb-0">
                  <a
                    href="mailto:info@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      marginLeft: "1px",
                    }}
                  >
                    info@gmail.com
                  </a>
                </p>
                <p className="mb-0">
                  <a
                    href="mailto:support@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      marginLeft: "1px",
                    }}
                  >
                    support@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="shadow p-3 rounded-3 text-center">
                <i className="ri-time-fill fs-3 text-danger"></i>
                <h4 className="mb-1 text-danger">Opening Hours</h4>
                <p className="mb-0">Mon-Fri - 10am to 8pm</p>
                <p className="mb-0">Sat - 10am to 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* General info section end */}

      {/* Map section */}
      <section className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.06263631145!2d88.3639214!3d22.501832999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02710b6d7ed939%3A0x68fc5cc015e46c35!2sTurain%20Software%20Pvt.%20Ltd.%20-%20Bulk%20SMS%20Service%20Provider%2C%20Business%20WhatsApp%20%26%20Digital%20Marketing%20Agency%20in%20Kolkata!5e0!3m2!1sen!2sin!4v1717650597636!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Map section end */}

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

export default Contact;
