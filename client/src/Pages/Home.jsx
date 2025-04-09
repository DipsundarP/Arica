import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Blogsection from "../components/Blogsection";
import Appointment from '../components/Appointment';  
import Booking from '../components/Booking';
import Enquire from '../components/Enquire';


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
             <Booking/>
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
             <Appointment/>
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
              <a
                href="#"
                className="serviceBox"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
                <img src="assets/images/pathology.svg" alt="" />
                <h5>Pathological Tests</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a
                href="#"
                className="serviceBox"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
                <img src="assets/images/microbiology.svg" alt="" />
                <h5>Microbiological Tests</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a
                href="#"
                className="serviceBox"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
                <img src="assets/images/biochemical.svg" alt="" />
                <h5>Biochemical</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a
                href="#"
                className="serviceBox"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
                <img src="assets/images/hormones.svg" alt="" />
                <h5>Hormones</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a
                href="#"
                className="serviceBox"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
                <img src="assets/images/biopsy.svg" alt="" />
                <h5>Biopsy</h5>
              </a>
            </div>
            <div className="col-md col-sm-6">
              <a
                href="#"
                className="serviceBox"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
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
                  <Link
                    to="/biplab"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      marginLeft: "1px",
                    }}
                  >
                    <i className="ri-arrow-right-fill me-1"></i> Read More...
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
                  <Link
                    to="/drpritam"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      marginLeft: "1px",
                    }}
                  >
                    <i className="ri-arrow-right-fill me-1"></i> Read More...
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
        <Enquire />
    </>
  );
}

export default Home
