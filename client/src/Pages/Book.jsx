import React from "react";
import { Link } from "react-router-dom";

function Book() {
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
              <h1>Book A Test</h1>
              <p className="m-0">
                <a href="/">Home </a> / Book a test
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner banner section end */}

      {/* Book Your Test section */}
      <section className="py-5 book-your-test">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="shadow p-4 enquiry-sticky-box">
                <form action="">
                  <h4 className="text-center fw-medium mb-3">Booking Form</h4>

                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-group ">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Full Name"
                          className="form-control shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group ">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Email Address"
                          className="form-control shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group ">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Phone Number"
                          className="form-control shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        name=""
                        id=""
                        className="form-select shadow-none w-100"
                        required
                      >
                        <option value="" selected>
                          Select Age
                        </option>
                        <option value="">0 - 10 Years</option>
                        <option value="">11 - 20 Years</option>
                        <option value="">21 - 30 Years</option>
                        <option value="">40+ Years</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        name=""
                        id=""
                        className="form-select shadow-none w-100"
                        required
                      >
                        <option value="India" selected>
                          Select Gender
                        </option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Others</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group date">
                        <input
                          type="text"
                          id="datepicker"
                          className="form-control shadow-none"
                          placeholder="Select date"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group date">
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Enter Time"
                          required
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit Your Booking
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="col-12 text-center mb-4">
                <h2 className="title">Book Your Test</h2>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="shadow p-3 contain rounded-3 text-center">
                    <div className=" mb-3">
                      <img
                        src="assets/images/x-ray.svg"
                        className="test-img"
                        alt=""
                      />
                    </div>
                    <h4 className="mb-2 test-name">X-RAY</h4>
                    <p className="mb-3 test-desc text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea, consectetur!
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Book Test
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="shadow p-3 contain rounded-3 text-center">
                    <div className=" mb-3">
                      <img
                        src="assets/images/usg.svg"
                        className="test-img"
                        alt=""
                      />
                    </div>
                    <h4 className="mb-2 test-name">USG</h4>
                    <p className="mb-3 test-desc text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea, consectetur!
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Book Test
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="shadow p-3 contain rounded-3 text-center">
                    <div className=" mb-3">
                      <img
                        src="assets/images/lab.svg"
                        className="test-img"
                        alt=""
                      />
                    </div>
                    <h4 className="mb-2 test-name">PATHOLOGY</h4>
                    <p className="mb-3 test-desc text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea, consectetur!
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Book Test
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="shadow p-3 contain rounded-3 text-center">
                    <div className=" mb-3">
                      <img
                        src="assets/images/kidneys.svg"
                        className="test-img"
                        alt=""
                      />
                    </div>
                    <h4 className="mb-2 test-name">KIDNEY</h4>
                    <p className="mb-3 test-desc text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea, consectetur!
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Book Test
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="shadow p-3 contain rounded-3 text-center">
                    <div className=" mb-3">
                      <img
                        src="assets/images/red-blood-cells.svg"
                        className="test-img"
                        alt=""
                      />
                    </div>
                    <h4 className="mb-2 test-name">CBC</h4>
                    <p className="mb-3 test-desc text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea, consectetur!
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Book Test
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="shadow p-3 contain rounded-3 text-center">
                    <div className=" mb-3">
                      <img
                        src="assets/images/liver.svg"
                        className="test-img"
                        alt=""
                      />
                    </div>
                    <h4 className="mb-2 test-name">LIVER</h4>
                    <p className="mb-3 test-desc text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea, consectetur!
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Book Test
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="shadow p-3 contain rounded-3 text-center">
                    <div className=" mb-3">
                      <img
                        src="assets/images/heart.svg"
                        className="test-img"
                        alt=""
                      />
                    </div>
                    <h4 className="mb-2 test-name">HEART</h4>
                    <p className="mb-3 test-desc text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea, consectetur!
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Book Test
                    </a>
                  </div>
                </div>
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

export default Book;
