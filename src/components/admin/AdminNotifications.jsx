// src/components/admin/AdminNotifications.jsx
import React from "react";

export default function AdminNotifications() {
  return (
    <div className="card shadow-sm p-3">
      <h4>🔔 Quản lý Thông báo</h4>
      <button className="btn btn-primary mb-3">➕ Tạo thông báo mới</button>
      <ul className="list-group">
        <li className="list-group-item">
          📅 Hủy lớp Yoga ngày 20/10 do bảo trì phòng.
        </li>
        <li className="list-group-item">
          🎉 Giảm giá 30% cho gói tập 6 tháng.
        </li>
      </ul>
    </div>
  );
}
