// src/components/student/StudentProfile.jsx
import React from "react";

export default function StudentProfile() {
  return (
    <div className="card shadow-sm p-3">
      <h4>👤 Hồ sơ cá nhân</h4>
      <p><b>Tên:</b> Nguyễn Văn A</p>
      <p><b>Email:</b> nguyenvana@example.com</p>
      <p><b>Điện thoại:</b> 0909 123 456</p>
      <button className="btn btn-primary">Chỉnh sửa hồ sơ</button>
    </div>
  );
}
