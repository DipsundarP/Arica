import React, { useState } from "react";

function Enquire() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    type: "",
    test: "",
    message: "",
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
    // Handle form submission (API call, etc.)
    console.log("Submitted:", formData);
  };

  return (
    <div
      className="modal getquoteModal fade"
      id="enquire"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="enquireLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md rounded-4 modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <button
              type="button"
              className="btn-close m-0 shadow-none"
              style={{
                position: "absolute",
                right: "-8px",
                top: "-8px",
                padding: "8px",
                borderRadius: "50%",
              }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div className="getquoteModalPanel">
              <div className="sidePart w-100">
                <h4 className="mb-1 text-center" id="enquireLabel">
                  Home Collection Form
                </h4>
                <small className="d-block text-center">
                  We will reach out to you within 24 hours
                </small>

                <form onSubmit={handleSubmit} className="mt-3">
                  <div className="row g-3">
                    <div className="col-12">
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

                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <select
                        name="type"
                        className="form-select"
                        value={formData.type}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Type
                        </option>
                        <option value="blood">Blood</option>
                        <option value="urine">Urine</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <select
                        name="test"
                        className="form-select"
                        value={formData.test}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Test
                        </option>
                        <option value="diabetes">Diabetes Test</option>
                        <option value="thyroid">Thyroid Test</option>
                        <option value="malaria">Malaria Test</option>
                        <option value="dengue">Dengue Test</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        rows="3"
                        className="form-control"
                        placeholder="Your message"
                        style={{ resize: "none" }}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit Your Query
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquire;
