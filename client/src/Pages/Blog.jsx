import React from "react";
import { Link } from "react-router-dom";
import Enquire from "../components/Enquire";

function Blog() {
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
              <h1>Health Blog</h1>
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
                / Health blog
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner banner section end */}

      {/* Blog Section */}
      <section className="blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="title mb-4">Our Latest Blogs</h2>
            </div>
          </div>
          <div className="row g-4">
            {[
              { img: "blog-1.jpg", title: "Pathology", date: "Jun 24, 2023" },
              { img: "blog-2.jpg", title: "Radiology", date: "Jul 10, 2023" },
              { img: "blog-3.jpg", title: "Microbiology", date: "Aug 5, 2023" },
            ].map((blog, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card border p-3">
                  <img
                    src={`assets/images/blog/${blog.img}`}
                    className="card-img-top"
                    alt={`Blog ${index + 1}`}
                  />
                  <div className="card-body pb-0">
                    <h6 className="mb-0">Published on {blog.date}</h6>
                    <div className="card-info pt-2 pb-2 border-bottom">
                      <h4 className="card-title">{blog.title}</h4>
                      <p className="card-text">
                        A brief description of the blog post content goes here.
                      </p>
                    </div>
                    <div className="btn-comment d-flex justify-content-between mt-2 pt-1 align-items-center">
                      <Link
                        to="/blogdetails"
                        className="align-items-center read-more"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          marginLeft: "1px",
                        }}
                      >
                        Read More <i className="ri-arrow-right-fill"></i>
                      </Link>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-solid fa-user pe-2"></i>By Admin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link to="/blogdetails">
              <button className="btn btn-outline-primary">
                Load More Blogs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* // end */}

      {/* Modal Enquire */}
      <Enquire />
    </>
  );
}

export default Blog;
