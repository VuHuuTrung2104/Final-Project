import React from "react";
import "../assets/css/About.css";
import { Link } from "react-router-dom";
import img from "../assets/img/Gallery/KhachHangVaCongDong/2.jpg";

export default function About() {
  return (
    <section className="about-yoga-section ">
      <div className="m-5">
        <div className="row justify-content-center align-items-center">
          {/* Cột nội dung */}
          <div className="col-lg-5  mb-4">
            <h2 className="text-dark mb-4 fw-bold">YOGA</h2>
            <p className="fs-5 text-dark">
              Yoga là một bộ môn tập thể dục và tâm lý được phát triển từ Ấn Độ
              cách đây hàng ngàn năm. Bộ môn này bao gồm các động tác linh hoạt,
              các kỹ thuật thở và thiền định giúp tăng cường sức khỏe và cân
              bằng cảm xúc.
            </p>
            <p className="fs-5 text-dark">
              Các bài tập Yoga thường được thực hiện trên một chiếu Yoga và yêu
              cầu sự tập trung và kiên nhẫn. Trong mỗi buổi tập, người học sẽ
              thực hiện các động tác giúp tăng cường sự linh hoạt và sức mạnh
              cơ thể, đồng thời giảm căng thẳng và giúp tâm trí thư giãn.
            </p>
            <Link
              to="/about"
              className="btn btn-dark rounded-pill px-5 py-2 mt-3"
            >
              Xem thêm
            </Link>
          </div>

          {/* Cột ảnh */}
          <div className="col-lg-5 col-md-10 text-center">
            <img
              src={img}
              alt="Yoga practice"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ maxWidth: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
