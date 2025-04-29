import React, { useState } from "react";
import axios from "axios";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState(null); // "success" or "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      await axios.post("http://localhost:9000/contact", formData);
      setResponseMessage("Message sent successfully.");
      setResponseType("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        age: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setResponseMessage("Failed to send message. Please try again.");
      setResponseType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
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
            <form
              onSubmit={handleSubmit}
              className="form-control shadow p-4 rounded-3 border-0"
            >
              <h4 className="text-center text-primary mb-1">Get In Touch</h4>
              <p className="text-center mb-4 text-muted">
                We will reach out to you within 24 hours
              </p>

              {/* Display response message */}
              {responseMessage && (
                <div
                  className={`alert text-center ${
                    responseType === "success"
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {responseMessage}
                </div>
              )}

              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="form-control shadow-none py-2"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="form-control shadow-none py-2"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="form-control shadow-none py-2"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    className="form-control shadow-none py-2"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <select
                    name="gender"
                    className="form-select shadow-none py-2"
                    value={formData.gender}
                    onChange={handleChange}
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
                    name="age"
                    className="form-select shadow-none py-2"
                    value={formData.age}
                    onChange={handleChange}
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
                    name="message"
                    style={{ resize: "none" }}
                    className="form-control shadow-none py-2"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      "Submit your request"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
