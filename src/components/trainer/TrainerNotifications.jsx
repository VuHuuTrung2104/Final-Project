// src/components/trainer/TrainerNotifications.jsx
import React from "react";

export default function TrainerNotifications() {
  return (
    <div className="card shadow-sm p-3">
      <h4>🔔 Thông báo từ Admin</h4>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          📅 Lịch dạy Yoga Nâng cao ngày 15/10 đổi sang 16/10.
        </li>
        <li className="list-group-item">
          💰 Học viên mới đã đăng ký lớp "Thiền căn bản".
        </li>
        <li className="list-group-item">
          🎉 Giảm giá 20% cho học viên khi giới thiệu bạn mới.
        </li>
      </ul>
    </div>
  );
}
