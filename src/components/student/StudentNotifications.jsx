// src/components/student/StudentNotifications.jsx
import React from "react";

export default function StudentNotifications() {
  return (
    <div className="card shadow-sm p-3">
      <h4>🔔 Thông báo</h4>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          📅 Lớp Yoga nâng cao ngày 25/10 dời sang 26/10.
        </li>
        <li className="list-group-item">
          🎉 Giảm 20% khi đăng ký gói 3 tháng trước 30/10.
        </li>
      </ul>
    </div>
  );
}
