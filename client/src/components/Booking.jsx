import React, { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    collectionDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission logic here
    console.log("Form Submitted:", formData);
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
              id="fullName"
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
              id="phone"
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
              id="email"
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
              id="collectionDate"
              placeholder="Collection Date"
              className="form-control"
              value={formData.collectionDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" role="button">
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
  );
}

export default Booking
