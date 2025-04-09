import React from "react";

const Bookingfrom = () => {
  const testList = [
    { name: "X-RAY", img: "x-ray.svg" },
    { name: "USG", img: "usg.svg" },
    { name: "PATHOLOGY", img: "lab.svg" },
    { name: "KIDNEY", img: "kidneys.svg" },
    { name: "CBC", img: "red-blood-cells.svg" },
    { name: "LIVER", img: "liver.svg" },
    { name: "HEART", img: "heart.svg" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here (form validation, API call, etc.)
    console.log("Form Submitted");
  };

  return (
    <section className="py-5 book-your-test">
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
                    <select className="form-select shadow-none w-100" required>
                      <option value="" disabled>
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
                      id="datepicker"
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

          {/* Test Cards Section */}
          <div className="col-lg-8">
            <div className="col-12 text-center mb-4">
              <h2 className="title">Book Your Test</h2>
            </div>
            <div className="row g-4">
              {testList.map((test, index) => (
                <div className="col-md-4" key={index}>
                  <div className="shadow p-3 contain rounded-3 text-center">
                    <div className="mb-3">
                      <img
                        src={`assets/images/${test.img}`}
                        className="test-img"
                        alt={test.name}
                      />
                    </div>
                    <h4 className="mb-2 test-name">{test.name}</h4>
                    <p className="mb-3 test-desc text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Book Test
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default  Bookingfrom;
