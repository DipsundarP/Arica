import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blogsection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 at a time
    slidesToScroll: 1, // Scroll 1 at a time
    responsive: [
      {
        breakpoint: 992, // Below desktop
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const blogData = [
    {
      img: "assets/images/blog/blog-1.jpg",
      title: "Pathology",
      alt: "news_1",
    },
    {
      img: "assets/images/blog/blog-2.jpg",
      title: "Biochemical",
      alt: "news_2",
    },
    {
      img: "assets/images/blog/blog-3.jpg",
      title: "Microbiological",
      alt: "news_3",
    },
    {
      img: "assets/images/blog/blog-2.jpg",
      title: "FNAC",
      alt: "news_4",
    },
    {
      img: "assets/images/blog/blog-1.jpg",
      title: "Cytology",
      alt: "news_5",
    },
    {
      img: "assets/images/blog/blog-3.jpg",
      title: "Hematology",
      alt: "news_6",
    },
  ];

  return (
    <section className="blog py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="title mb-4">Our Latest Blogs</h2>
          </div>
          <div className="col-12">
            <Slider {...settings}>
              {blogData.map((blog, idx) => (
                <div key={idx} className="px-3">
                  <BlogCard img={blog.img} title={blog.title} alt={blog.alt} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ img, title, alt }) {
  return (
    <div className="card border p-3 h-100">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body pb-2">
        <h6 className="mb-0">Published on Jun 24, 2023</h6>
        <div className="card-info pt-2 pb-2 border-bottom light-subtle">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
        </div>
        <div className="btn-comment d-flex justify-content-between mt-2 pt-1 align-items-center">
          <a href="pages/blog.html" className="align-items-center read-more">
            Read More <i className="ri-arrow-right-fill"></i>
          </a>
          <p className="mb-0 d-flex align-items-center">
            <i className="fa-solid fa-user pe-2"></i>By Admin
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogsection;
