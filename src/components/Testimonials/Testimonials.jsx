import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import './TestimonialCard.css'
import testimonialImage1 from '../../assets/images/sandeep.jpg'
import testimonialImage2 from '../../assets/images/saurabh_visionaryowner.jpg'
import testimonialImage3 from '../../assets/images/avatar.jpg'
const Testimonials = () => {
  //   const data2=[{
  //     id: 1,
  //     image: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
  //     name: "Sandeep Yadav  ",
  //     position: "CEO & Founder  (Sunrise Diagnostic Services)",
  //     testimonial:
  //       "Working with Ziostech Solutions was an absolute game-changer for our business. Their unparalleled software development expertise is commendable, and the final product significantly enhanced our operations. Their deep understanding of our needs and provided valuable insights that greatly improved the outcome of our projects.",
  //   },
  //   {
  //     id: 2,
  //     image: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
  //     name: "MWO(RETD.)Raghubh Singh",
  //     position: "M.D. & CEO   (Saurabh Visionary Ventures) ",
  //     testimonial:
  //       "Ziostech has been exceptional in delivering innovative and user-friendly tech solutions. As a coaching institute, we needed a dynamic online platform, and they exceeded our expectations with their professionalism, timely delivery, and seamless communication. Highly recommended for anyone seeking reliable tech partners. Kudos to the team!",
  //   },
  //   {
  //     id: 3,
  //     image: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
  //     name: "Narendra Singh ",
  //     position: "CEO & Founder (Avni Hospital)",
  //     testimonial:
  //       "Avni Hospital greatly appreciates Ziostech for their excellent tech solutions. They delivered a user-friendly platform tailored to our needs with professionalism and expertise. Highly recommended for reliable and innovative services!",
  //   },
  // ];
  const data = [
    {
      img: testimonialImage1,
      testimonialName: "Sandeep Yadav ",
      testimonialPosition: "CEO & Founder  (Sunrise Diagnostic Services)",
      aboutTestimonial:
        "Working with Ziostech Solutions was an absolute game-changer for our business. Their unparalleled software development expertise is commendable, and the final product significantly enhanced our operations. Their deep understanding of our needs and provided valuable insights that greatly improved the outcome of our projects.",
    },
    {
      img: testimonialImage2,
      testimonialName: "MWO(RETD.)Raghubh Singh",
      testimonialPosition: "M.D. & CEO   (Saurabh Visionary Ventures) ",
      aboutTestimonial:
        "Ziostech has been exceptional in delivering innovative and user-friendly tech solutions. As a coaching institute, we needed a dynamic online platform, and they exceeded our expectations with their professionalism, timely delivery, and seamless communication. Highly recommended for anyone seeking reliable tech partners. Kudos to the team!",
    },
    {
      img: testimonialImage3,
      testimonialName: "Narendra Singh",
      testimonialPosition: "CEO & Founder (Avni Hospital)",
      aboutTestimonial: "Avni Hospital greatly appreciates Ziostech for their outstanding tech solutions. They delivered a highly efficient and user-friendly platform, tailored specifically to our needs. Their professionalism, expertise, and dedication were evident throughout the process. We highly recommend Ziostech for their reliable, innovative services and exceptional customer support.",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonialMainContainer">
      <h1 className="testimonialHeading"><span>Testimonials</span></h1>
      <p className="testimonialHeadingPara">Explore our project case study for your reference to gain insights into the project <br />details, challenges, solutions, and outcomes.</p>
      <div className="carousel">
        <Slider {...settings}>

          {data.map((item, index) => (
            <TestimonialCard key={index} img={item.img} aboutTestimonial={item.aboutTestimonial} testimonialName={item.testimonialName} testimonialPosition={item.testimonialPosition} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
