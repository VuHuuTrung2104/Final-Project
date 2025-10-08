import React, { useState } from "react";
import "../assets/css/Pricing.css";

function Pricing() {
  const [billing, setBilling] = useState("thang"); // mặc định theo tháng

  return (
    <section className="pricing-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold text-success mb-3">
          Chọn Lộ Trình Sức Khỏe Ngay Tại Nhà
        </h2>
        <p className="mb-4">
          Các gói thành viên trực tuyến của chúng tôi không chỉ là quyền truy
          cập — mà còn là lời mời gọi bạn phát triển, hít thở và kết nối lại với
          chính mình. Bạn có thể tập trực tiếp hoặc theo lịch riêng, với sự hỗ
          trợ đầy đủ từ studio số.
        </p>

        {/* Toggle */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
          <span>Theo tháng</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={billing === "nam"}
              onChange={() =>
                setBilling(billing === "thang" ? "nam" : "thang")
              }
            />
          </div>
          <span>Theo năm</span>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Gói Cơ Bản */}
          <div className="col-md-5">
            <div className="pricing-card basic p-4 h-100">
              <h4 className="fw-bold">Gói Cơ Bản</h4>
              <h2 className="price">
                {billing === "thang" ? "60$" : "600$"}
                <span className="period">
                  /{billing === "thang" ? "tháng" : "năm"}
                </span>
              </h2>
              <p className="text-muted small mb-3">
                Dành cho những người mới bắt đầu làm quen với yoga và thiền, gói
                này giúp bạn xây dựng nền tảng một cách nhẹ nhàng và vững chắc.
              </p>
              <a href="#join" className="btn btn-dark w-100 rounded-pill mb-3">
                Đăng ký ngay
              </a>
              <ul className="list-unstyled text-start small">
                <li>✔ Truy cập 8 buổi yoga/thiền trực tuyến mỗi tháng</li>
                <li>✔ Xem lại các bài học thân thiện với người mới</li>
                <li>✔ Hỏi đáp trực tiếp hoặc gặp giảng viên mỗi tháng</li>
                <li>✔ Giảm 10% workshop & e-book trực tuyến</li>
                <li>✔ 2 vé mời bạn bè tham gia lớp học mỗi tháng</li>
                <li>✔ Bài tập thở & nhật ký hướng dẫn trên ứng dụng</li>
              </ul>
            </div>
          </div>

          {/* Gói Toàn Diện */}
          <div className="col-md-5">
            <div className="pricing-card premium p-4 h-100">
              <h4 className="fw-bold">
                Gói Toàn Diện{" "}
                <span className="badge bg-light text-dark ms-2">Phổ biến nhất</span>
              </h4>
              <h2 className="price text-light">
                {billing === "thang" ? "99$" : "899$"}
                <span className="period">
                  /{billing === "thang" ? "tháng" : "năm"}
                </span>
              </h2>
              <p className="text-light small mb-3">
                Truy cập đầy đủ mọi hoạt động trong không gian trực tuyến của
                chúng tôi. Phù hợp cho những ai muốn tích hợp yoga và thiền vào
                cuộc sống hằng ngày.
              </p>
              <a href="#join" className="btn btn-light w-100 rounded-pill mb-3">
                Đăng ký ngay
              </a>
              <ul className="list-unstyled text-start small text-light">
                <li>✔ Không giới hạn lớp học trực tuyến</li>
                <li>✔ Truy cập toàn bộ thư viện video (200+ buổi học)</li>
                <li>✔ Bộ tài liệu sức khỏe hàng tháng (PDF + audio)</li>
                <li>✔ Giảm 15% retreat, masterclass nâng cao và lớp riêng</li>
                <li>✔ Tham gia cộng đồng thành viên độc quyền</li>
                <li>✔ 3 vé mời bạn bè tham gia lớp trực tuyến mỗi tháng</li>
                <li>✔ Theo dõi tiến trình cá nhân & mục tiêu hằng tháng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
