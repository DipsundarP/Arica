import React, { useState } from "react";
import axios from "axios";

function Appointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    speciality: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      await axios.post("https://arica.onrender.com/appointment", formData);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        speciality: "",
        doctor: "",
        appointmentDate: "",
        appointmentTime: "",
      });
    } catch (err) {
      setError("Something went wrong while booking the appointment.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="docbookPanel py-5 d-flex justify-content-start align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <h2 className="title">Book Your Appointment</h2>
            <p>Get details in your inbox right now</p>
            <form className="row g-3" onSubmit={handleSubmit}>
              {[
                { name: "firstName", placeholder: "First Name" },
                { name: "lastName", placeholder: "Last Name" },
                { name: "email", type: "email", placeholder: "Email ID" },
                { name: "phone", placeholder: "Phone Number" },
                { name: "dob", type: "date", label: "Date of Birth" },
              ].map(({ name, type = "text", placeholder }) => (
                <div key={name} className="col-sm-6">
                  <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              <div className="col-sm-6">
                <select
                  name="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-sm-6">
                <select
                  name="speciality"
                  className="form-select"
                  value={formData.speciality}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Speciality</option>
                  <option>General Medicine</option>
                  <option>Gynaecology and Obstetrices</option>
                  <option>Nephrology</option>
                  <option>Cardiology</option>
                </select>
              </div>

              <div className="col-sm-6">
                <select
                  name="doctor"
                  className="form-select"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Doctor</option>
                  <option>Dr. Smith</option>
                  <option>Dr. Jane</option>
                </select>
              </div>

              <div className="col-sm-6">
                <input
                  type="date"
                  name="appointmentDate"
                  className="form-control"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-sm-6">
                <select
                  name="appointmentTime"
                  className="form-select"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time</option>
                  <option>04:00 PM</option>
                  <option>05:00 PM</option>
                  <option>06:00 PM</option>
                </select>
              </div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
                {submitted && (
                  <p className="text-success mt-2">
                    Appointment booked successfully!
                  </p>
                )}
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
