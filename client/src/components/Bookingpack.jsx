import React from "react";

const packages = [
  {
    title: "Health silver package",
    tests: [
      "CBC (Complete Blood Count)",
      "Serum Creatinine",
      "FBS (Fasting Blood Sugar)",
    ],
    includes: "Include 57 Tests",
  },
  // You can add more package objects here if needed
];

const Bookingpack = () => {
  return (
    <section className="py-5 package">
      <div className="container">
        <div className="row">
          {/* Booking Form */}
          <div className="col-lg-4">
            <div className="shadow p-4 enquiry-sticky-box">
              <form>
                <h4 className="text-center fw-medium mb-3">Booking Form</h4>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control shadow-none"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control shadow-none"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control shadow-none"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <select className="form-select shadow-none w-100" required>
                      <option value="" disabled selected>
                        Select Age
                      </option>
                      <option value="0 - 10">0 - 10 Years</option>
                      <option value="11 - 20">11 - 20 Years</option>
                      <option value="21 - 30">21 - 30 Years</option>
                      <option value="40+">40+ Years</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select className="form-select shadow-none w-100" required>
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Select date"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Enter Time"
                      required
                    />
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

          {/* Package Cards */}
          <div className="col-lg-8">
            <div className="col-12 text-center mb-4">
              <h2 className="title">Our Packages</h2>
            </div>
            <div className="row g-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card border-0 shadow">
                    <div className="card-body p-4">
                      <h4>
                        {packages[0].title}
                        <small className="d-block fs-6 fw-normal text-muted">
                          {packages[0].includes}
                        </small>
                      </h4>
                      <ul className="pt-3">
                        {packages[0].tests.map((test, i) => (
                          <li className="mb-2" key={i}>
                            <i className="ri-arrow-right-fill me-2"></i>
                            {test}
                          </li>
                        ))}
                        <li>
                          <b>More+</b>
                        </li>
                      </ul>
                      <span className="d-block my-3 text-danger">
                        <i className="ri-home-8-line pe-2"></i>Home collection
                        facility available
                      </span>
                      <a href="#" className="btn btn-primary">
                        Quick Book
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-5 text-center">
                <a href="#" className="btn btn-outline-primary">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookingpack;
