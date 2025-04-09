import React from "react";

const Contactus = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation or API calls here
    console.log("Contact form submitted");
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

              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control shadow-none py-2"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control shadow-none py-2"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-control shadow-none py-2"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="form-control shadow-none py-2"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select shadow-none py-2"
                    defaultValue=""
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
                    className="form-select shadow-none py-2"
                    defaultValue=""
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
                    style={{ resize: "none" }}
                    className="form-control shadow-none py-2"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit your request
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
