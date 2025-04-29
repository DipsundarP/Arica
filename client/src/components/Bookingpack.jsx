import React, { useState } from "react";
import axios from "axios";

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
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:9000/package",
        formData
      );
      setSuccessMessage(response.data.message);
      setLoading(false);
      // Clear the form data after submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        date: "",
        time: "",
      });
    } catch (error) {
      setErrorMessage("Failed to submit booking. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="py-5 package">
      <div className="container">
        <div className="row">
          {/* Booking Form */}
          <div className="col-lg-4">
            <div className="shadow p-4 enquiry-sticky-box">
              <form onSubmit={handleSubmit}>
                <h4 className="text-center fw-medium mb-3">Booking Form</h4>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control shadow-none"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control shadow-none"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control shadow-none"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <select
                      className="form-select shadow-none w-100"
                      required
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Age
                      </option>
                      <option value="0 - 10">0 - 10 Years</option>
                      <option value="11 - 20">11 - 20 Years</option>
                      <option value="21 - 30">21 - 30 Years</option>
                      <option value="40+">40+ Years</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select
                      className="form-select shadow-none w-100"
                      required
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  {/* Updated Date Input */}
                  <div className="col-md-6">
                    <input
                      type="date"
                      className="form-control shadow-none"
                      required
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Updated Time Input */}
                  <div className="col-md-6">
                    <input
                      type="time"
                      className="form-control shadow-none"
                      required
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Your Booking"}
                    </button>
                  </div>
                </div>
              </form>
              {successMessage && (
                <div className="alert alert-success mt-3">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="alert alert-danger mt-3">{errorMessage}</div>
              )}
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
                  Load More...
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
