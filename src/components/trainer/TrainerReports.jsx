// src/components/trainer/TrainerReports.jsx
import React from "react";

export default function TrainerReports() {
  return (
    <div className="card shadow-sm p-3">
      <h4>📊 Thống kê giảng dạy</h4>
      <ul className="list-group mt-3">
        <li className="list-group-item">Số buổi đã dạy: <b>25</b></li>
        <li className="list-group-item">Tổng số học viên đã hướng dẫn: <b>120</b></li>
        <li className="list-group-item">Đánh giá trung bình: <b>4.8/5 ⭐</b></li>
      </ul>

      <div className="mt-4">
        <h6>Tiến độ tháng này</h6>
        <div className="progress">
          <div className="progress-bar bg-info" style={{ width: "80%" }}>
            80%
          </div>
        </div>
      </div>
    </div>
  );
}
