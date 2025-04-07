import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Blogsection from "../components/Blogsection";


function Home() {
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

      {/* Banner and htmlForm */}
      <section className="my-4">
        <div className="container">
          <div className="row">
            {/* Banner Slider */}
            <div className="col-lg-8">
              <Carousel className="banner-slider mb-0 rounded">
                <Carousel.Item interval={1000}>
                  <img
                    src="assets/images/slider.jpg"
                    className="d-block w-100 img-fluid rounded"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    src="assets/images/slider2.jpg"
                    className="d-block w-100 img-fluid rounded"
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            {/* Booking Form */}
            <div className="col-lg-4">
              <div className="border py-3 px-4 rounded">
                <h5 className="text-center mb-3">BOOK A HOME VISIT NOW!</h5>
                <form action="" method="post" className="collectionform">
                  <div className="mb-2">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email ID"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="collectionDate"
                      id="collectionDate"
                      placeholder="Collection Date"
                      className="form-control"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    role="button"
                  >
                    SUBMIT
                  </button>
                  <small className="d-block mt-3 text-center">
                    *All fields are mandatory.
                    <br />
                    Blood sample collection from home will be free.
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // end */}

      {/* Search Panel */}
      <section className="searchPanel">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 text-center">
              <h2 className="title">
                Search Doctor or Lab Tests from the comfort of your Home
              </h2>
              <p>
                Discover the best doctors, clinic & hospital the city nearest to
                you.
              </p>
            </div>
            <div className="col-md-12">
              <form action="" method="post">
                <div className="d-flex justify-content-center my-4">
                  <select name="" id="" className="form-select">
                    <option value="Lab Tests">Lab Tests</option>
                    <option value="Doctors">Doctors</option>
                  </select>
                  <div className="searchBig mx-2">
                    <i className="ri-search-line"></i>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search for doctor, test, health package"
                      autoFocus={true}
                    />
                  </div>
                  <button type="submit" className="btn btn-success px-md-4">
                    Search
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#" className="btn btn-info text-white p-2 px-3">
                    <img
                      src="assets/images/stethoscope.svg"
                      width="30px"
                      alt=""
                      className="me-2"
                    />
                    Doctor Book
                  </a>
                  <a href="#" className="btn btn-info text-white p-2 px-3 mx-2">
                    <img
                      src="assets/images/microscope.svg"
                      width="30px"
                      alt=""
                      className="me-2"
                    />
                    Book Home Collection
                  </a>
                  <a href="#" className="btn btn-info text-white p-2 px-3">
                    <img
                      src="assets/images/prescription.svg"
                      width="30px"
                      alt=""
                      className="me-2"
                    />
                    Upload Prescription
                  </a>
                  <a href="#" className="btn btn-info text-white p-2 px-3 ms-2">
                    <img
                      src="assets/images/file.svg"
                      width="30px"
                      alt=""
                      className="me-2"
                    />
                    Download Report
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* // end */}

      {/* Feature Clinic */}
      <section className="py-5 featurePanel">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="title">Features in Our Clinic</h2>
              <p>We put the extra care in healthcare.</p>
            </div>
            <div className="col-md-12">
              <div className="featurePanel">
                <ul>
                  <li>
                    <img src="assets/images/lab.svg" alt="" />
                    <span>Pathology</span>
                  </li>
                  <li>
                    <img src="assets/images/red-blood-cells.svg" alt="" />
                    <span>CBC</span>
                  </li>
                  <li>
                    <img src="assets/images/kidneys.svg" alt="" />
                    <span>Kidney</span>
                  </li>
                  <li>
                    <img src="assets/images/liver.svg" alt="" />
                    <span>Liver</span>
                  </li>
                  <li>
                    <img src="assets/images/heart.svg" alt="" />
                    <span>Heart</span>
                  </li>
                  <li>
                    <img src="assets/images/x-ray.svg" alt="" />
                    <span>X-Ray</span>
                  </li>
                  <li>
                    <img src="assets/images/usg.svg" alt="" />
                    <span>USG</span>
                  </li>
                  <li>
                    <img src="assets/images/mri.svg" alt="" />
                    <span>MRI</span>
                  </li>
                  <li>
                    <img src="assets/images/lab.svg" alt="" />
                    <span>Pathology</span>
                  </li>
                  <li>
                    <img src="assets/images/red-blood-cells.svg" alt="" />
                    <span>CBC</span>
                  </li>
                  <li>
                    <img src="assets/images/kidneys.svg" alt="" />
                    <span>Kidney</span>
                  </li>
                  <li>
                    <img src="assets/images/liver.svg" alt="" />
                    <span>Liver</span>
                  </li>
                  <li>
                    <img src="assets/images/heart.svg" alt="" />
                    <span>Heart</span>
                  </li>
                  <li>
                    <img src="assets/images/x-ray.svg" alt="" />
                    <span>X-Ray</span>
                  </li>
                  <li>
                    <img src="assets/images/usg.svg" alt="" />
                    <span>USG</span>
                  </li>
                  <li>
                    <img src="assets/images/mri.svg" alt="" />
                    <span>MRI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // end */}

      {/* Doctor Booking */}
      <section className="docbookPanel">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="text-center">
                <h2 className="title">Book Your Appointment</h2>
                <p>Get details in your inbox right now</p>
              </div>
              <form action="" method="post" className="row g-3">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email ID"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="dob"
                    id="dob"
                    placeholder="Date of Birth"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <select
                    name="gender"
                    id="gender"
                    className="form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <select
                    name="speciality"
                    id="speciality"
                    className="form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Speciality
                    </option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Gynaecology and Obstetrices">
                      Gynaecology and Obstetrices
                    </option>
                    <option value="Nephrology">Nephrology</option>
                    <option value="Cardiology">Cardiology</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <select
                    name="doctor"
                    id="doctor"
                    className="form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Doctor
                    </option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Jane">Dr. Jane</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="appointmentDate"
                    id="appointmentDate"
                    placeholder="Select date"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <select
                    name="appointmentTime"
                    id="appointmentTime"
                    className="form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Time
                    </option>
                    <option value="04:00 PM">04:00 PM</option>
                  </select>
                </div>
                <div className="col-12 text-center">
                  <div className="form-check d-inline-flex mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="agree"
                      id="agreeTerms"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="agreeTerms"
                    >
                      I agree all terms & conditions.
                    </label>
                  </div>
                  <div className="clearfix"></div>
                  <button type="button" className="btn btn-danger me-2">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* // end */}

      {/* Our Service */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h2 className="title">Our Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md col-sm-6">
              <a href="#" className="serviceBox">
                <img src="assets/images/pathology.svg" alt="" />
                <h5>Pathological Tests</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a href="#" className="serviceBox">
                <img src="assets/images/microbiology.svg" alt="" />
                <h5>Microbiological Tests</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a href="#" className="serviceBox">
                <img src="assets/images/biochemical.svg" alt="" />
                <h5>Biochemical</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a href="#" className="serviceBox">
                <img src="assets/images/hormones.svg" alt="" />
                <h5>Hormones</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a href="#" className="serviceBox">
                <img src="assets/images/biopsy.svg" alt="" />
                <h5>Biopsy</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a href="#" className="serviceBox">
                <img src="assets/images/fnac.svg" alt="" />
                <h5>FNAC</h5>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* // end */}

      {/* Health Package */}
      <section className="py-5" style={{ background: "rgb(243, 250, 255)" }}>
        <div className="container">
          <div className="row g-md-4 g-3">
            <div className="col-12 text-center">
              <h2 className="title">Popular health checkups</h2>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h4>
                    Health silver package
                    <small className="d-block fs-6 fw-normal text-muted">
                      Include 57 Tests
                    </small>
                  </h4>
                  <ul className="my-4">
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>CBC (Complete
                      Blood Count)
                    </li>
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>Serum
                      Creatinine
                    </li>
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>FBS (Fasting
                      Blood Sugar)
                    </li>
                    <li>
                      <b>More+</b>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary">
                    Quick Book
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h4>
                    Health silver package
                    <small className="d-block fs-6 fw-normal text-muted">
                      Include 57 Tests
                    </small>
                  </h4>
                  <ul className="my-4">
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>CBC (Complete
                      Blood Count)
                    </li>
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>Serum
                      Creatinine
                    </li>
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>FBS (Fasting
                      Blood Sugar)
                    </li>
                    <li>
                      <b>More+</b>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary">
                    Quick Book
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h4>
                    Health silver package
                    <small className="d-block fs-6 fw-normal text-muted">
                      Include 57 Tests
                    </small>
                  </h4>
                  <ul className="my-4">
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>CBC (Complete
                      Blood Count)
                    </li>
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>Serum
                      Creatinine
                    </li>
                    <li className="mb-2">
                      <i className="ri-arrow-right-fill me-2"></i>FBS (Fasting
                      Blood Sugar)
                    </li>
                    <li>
                      <b>More+</b>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary">
                    Quick Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // end */}

      {/* About Us */}
      <section className="py-5">
        <div className="container mb-4">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-lg-6">
              <h2 className="title">Welcome to Arica Diagnostics</h2>
              <h4 className="text-primary">
                Innovative diagnostics, expert insights, your trusted partner in
                health.
              </h4>
              <p>
                <b>A centre for Medical Excellence & Innovation since 2010</b>
              </p>
              <p>
                Arica is an NABL/CAP accredited & ISO 9001-2015 certified Lab
                since 2010and has grown considerably within Kolkata and other
                townships in West Bengal with multiple Labs and collection
                centres.
              </p>
              <p>
                The objective of Arica is to become a world-class centre of
                pathology and also maintain our high quality standardsin
                achieving the same at afordable prices for the general public.
                for this regard, the Company acquires Globally tested
                machineries with extraordinary work quality.
              </p>
              <a href="#" className="btn btn-outline-success btn-sm">
                Read More
              </a>
            </div>
            <div className="col-md-6 col-lg-5">
              <img
                src="assets/images/pathology-lab.svg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="director">
                <img
                  src="assets/images/director.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="content">
                  <h5>Biplab Sengupta</h5>
                  <p>
                    Professional in the medical industry with experience of more
                    than 40 years of working with and managing various entities
                    involved in various sectors of the medical industry, such as
                    pharmaceuticals, diagnostics, medical equipments, blood
                    banks, and other liaisoning services.
                  </p>
                  <Link to="/biplab">
                    <i className="ri-arrow-right-fill me-1"></i> Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="director">
                <img
                  src="assets/images/Pratim-Sengupta.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="content">
                  <h5>
                    Dr.Pratim Sengupta <small>MD,DM (Nephrology)</small>
                  </h5>
                  <p>
                    He has a special interest on conservative nephrology and
                    retarding renal disease progression and renal nutrition and
                    actively involved in multiple research in these field and
                    published multiple original work in national and
                    international peer reviewed journal.
                  </p>
                  <Link to="/drpritam">
                    <i className="ri-arrow-right-fill me-1"></i> Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // end */}

      <Blogsection />

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

export default Home
