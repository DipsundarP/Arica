import React from 'react'

function Banner() {
  return (
    <div>
      {/* Banner and htmlForm */}
      <section className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-slider mb-0 rounded">
                <div>
                  <img
                    src="assets/images/slider.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="assets/images/slider2.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border py-3 px-4 rounded">
                <h5 className="text-center mb-3">BOOK A HOME VISIT NOW!</h5>
                <form action="" method="post" className="collectionform">
                  <div className="mb-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Full Name"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email ID"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Collection Date"
                      className="form-control"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    role="button"
                  >
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
          </div>
        </div>
      </section>
      {/* // end */}
    </div>
  );
}

export default Banner
