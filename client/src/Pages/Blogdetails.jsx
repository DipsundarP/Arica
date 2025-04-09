import React from "react";
import { Link } from "react-router-dom";
import Enquire from "../components/Enquire";

function Blogdetails() {
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
              <h1>Health Blog Details</h1>
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
                / Health blog details
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner banner section end */}

      {/* Events details */}
      <section className="blog-det py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fw-bold">
                NATIONAL INSTITUTE OF BIOMEDICAL SCIENCES - ROADSHOW
              </h2>
              <img
                src="assets/images/blog/blog-1.jpg"
                className="w-100 my-3 rounded-3 img-fluid"
                alt="Latest blog post image"
              />
              <div className="d-flex justify-content-between date-cat mb-2">
                <div className="d-flex align-items-center date-event">
                  <i className="ri-stack-fill pe-2"></i>
                  <small>Pathology</small>
                </div>
                <div className="d-flex align-items-center date-event">
                  <i className="ri-calendar-todo-fill pe-2"></i>
                  <small>April 12, 2024</small>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                laudantium ad earum nihil dolorum tempora necessitatibus ex,
                corporis veniam cupiditate ipsum quidem asperiores debitis
                quibusdam culpa voluptate explicabo vel. Nisi eum earum modi
                nesciunt harum quia dolor ratione alias numquam?
              </p>
              <h4 className="fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur voluptas suscipit sit non, necessitatibus laborum, aut
                repudiandae mollitia nisi veritatis quam ipsa! Commodi neque quo
                magni at laudantium aliquam in. Maxime provident amet
                reprehenderit tempore consequuntur, asperiores sed optio. Optio
                modi fugiat obcaecati, suscipit maiores nemo ut praesentium eos
                provident?
              </p>
              <h4 className="fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus aspernatur dolorem voluptates quo quos esse,
                commodi architecto molestiae doloremque veniam perferendis
                deleniti dignissimos minima, praesentium, id aliquid explicabo
                odit sequi nesciunt. Illum fuga quasi facere nisi mollitia hic
                sequi, iure natus harum consequuntur, fugit optio aut
                reprehenderit excepturi sit eligendi explicabo quo inventore
                porro, voluptates aspernatur? Ipsum id deserunt harum.
              </p>
            </div>
            <div className="col-lg-4 left ps-lg-5">
              <div className="row">
                <div className="col-12">
                  <div className="latest">
                    <h5>Latest Blog</h5>
                    <a className="lat-post" href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="Latest blog post image"
                      />
                      <div className="lat-info">
                        <h6>Lorem ipsum dolor sit.</h6>
                        <p>19th July</p>
                      </div>
                    </a>
                    <a className="lat-post" href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-2.jpg"
                        alt="Latest blog post image"
                      />
                      <div className="lat-info">
                        <h6>Lorem ipsum dolor sit.</h6>
                        <p>19th July</p>
                      </div>
                    </a>
                    <a className="lat-post" href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-3.jpg"
                        alt="Latest blog post image"
                      />
                      <div className="lat-info">
                        <h6>Lorem ipsum dolor sit.</h6>
                        <p>19th July</p>
                      </div>
                    </a>
                  </div>

                  <div className="latest">
                    <h5>Related Blog</h5>
                    <a className="lat-post" href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="Related blog post image"
                      />
                      <div className="lat-info">
                        <h6>Lorem ipsum dolor sit.</h6>
                        <p>19th July</p>
                      </div>
                    </a>
                    <a className="lat-post" href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-2.jpg"
                        alt="Related blog post image"
                      />
                      <div className="lat-info">
                        <h6>Lorem ipsum dolor sit.</h6>
                        <p>19th July</p>
                      </div>
                    </a>
                    <a className="lat-post" href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-3.jpg"
                        alt="Related blog post image"
                      />
                      <div className="lat-info">
                        <h6>Lorem ipsum dolor sit.</h6>
                        <p>19th July</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Events details end */}

      {/* Modal Enquire */}
      <Enquire />
    </>
  );
}

export default Blogdetails;
