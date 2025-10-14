import React from "react";
import "../assets/css/Hero.css";

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">

      <div className=" position-relative content-wrapper">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-box">
              <h1 className="hero-title">
                Sự hài hòa của bạn bắt đầu từ đây — hãy tham gia ngay
              </h1>
              <p className="hero-subtitle lead mb-4">
                Các khóa học của chúng tôi sẽ giúp bạn tìm lại sự cân bằng, cải thiện độ dẻo dai,
                tăng cường sức mạnh cho cơ thể và giải tỏa căng thẳng.
              </p>
              <a href="#signup" className="btn rounded-pill px-4 py-2 hero-btn">
                Thử miễn phí 7 ngày <span className="ms-1">&rarr;</span>
              </a>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="hero-stats-box p-4">
              <div className="row text-center text-white">
                <div className="col-4 stat-item">
                  <h3 className="fw-bold">5.000+</h3>
                  <p>Classes Streamed Monthly</p>
                </div>
                <div className="col-4 stat-item">
                  <h3 className="fw-bold">10.000</h3>
                  <p>Happy Students</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold">95%</h3>
                  <p>Member Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
