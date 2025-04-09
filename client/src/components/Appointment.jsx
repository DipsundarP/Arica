import React from "react";

function Appointment() {
  return (
    <section
      className="docbookPanel py-5 d-flex justify-content-start align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <div className="text-start mb-4">
              <h2 className="title">Book Your Appointment</h2>
              <p>Get details in your inbox right now</p>
            </div>
            <form action="" method="post" className="row g-3">
              {/* First Name */}
              <div className="col-sm-6">
                <label
                  htmlFor="firstName"
                  className="form-label visually-hidden"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="form-control"
                />
              </div>

              {/* Last Name */}
              <div className="col-sm-6">
                <label
                  htmlFor="lastName"
                  className="form-label visually-hidden"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>

              {/* Email */}
              <div className="col-sm-6">
                <label htmlFor="email" className="form-label visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email ID"
                  className="form-control"
                />
              </div>

              {/* Phone */}
              <div className="col-sm-6">
                <label htmlFor="phone" className="form-label visually-hidden">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>

              {/* DOB */}
              <div className="col-sm-6">
                <label htmlFor="dob" className="form-label visually-hidden" placeholder="Date of Birth">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="form-control"
                />
              </div>

              {/* Gender */}
              <div className="col-sm-6">
                <label htmlFor="gender" className="form-label visually-hidden">
                  Gender
                </label>
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
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Speciality */}
              <div className="col-sm-6">
                <label
                  htmlFor="speciality"
                  className="form-label visually-hidden"
                >
                  Speciality
                </label>
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

              {/* Doctor */}
              <div className="col-sm-6">
                <label htmlFor="doctor" className="form-label visually-hidden">
                  Doctor
                </label>
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

              {/* Appointment Date */}
              <div className="col-sm-6">
                <label
                  htmlFor="appointmentDate"
                  className="form-label visually-hidden"
                >
                  Appointment Date
                </label>
                <input
                  type="date"
                  name="appointmentDate"
                  id="appointmentDate"
                  className="form-control"
                />
              </div>

              {/* Appointment Time */}
              <div className="col-sm-6">
                <label
                  htmlFor="appointmentTime"
                  className="form-label visually-hidden"
                >
                  Appointment Time
                </label>
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
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="col-12 text-center">
                <div className="form-check d-inline-flex mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="agree"
                    id="agreeTerms"
                  />
                  <label className="form-check-label ms-2" htmlFor="agreeTerms">
                    I agree to all terms & conditions.
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
  );
}

export default Appointment;
