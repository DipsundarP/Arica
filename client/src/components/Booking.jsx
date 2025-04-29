import axios from "axios";
import React, { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    collectionDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(""); // To hold error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError(""); // Reset error message

    try {
      // Basic client-side validation
      if (
        !formData.fullName ||
        !formData.phone ||
        !formData.email ||
        !formData.collectionDate
      ) {
        setError("Please fill out all fields.");
        return;
      }

      // Validate email format
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(formData.email)) {
        setError("Please enter a valid email.");
        return;
      }

      // Send form data to the backend
      await axios.post("https://arica.onrender.com/booking", formData);

      setSubmitted(true);
      // Reset form data on successful submission
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        collectionDate: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <div className="col-lg-4">
      <div className="border py-3 px-4 rounded">
        <h5 className="text-center mb-3">BOOK A HOME VISIT NOW!</h5>
        <form className="collectionform" onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="date"
              name="collectionDate"
              className="form-control"
              value={formData.collectionDate}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
          {submitted && (
            <div className="alert alert-success mt-3 p-2 text-center">
              Booking submitted successfully!
            </div>
          )}
          {error && (
            <div className="alert alert-danger mt-3 p-2 text-center">
              {error}
            </div>
          )}
          <small className="d-block mt-3 text-center">
            *All fields are mandatory.
            <br />
            Blood sample collection from home will be free.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Booking;
