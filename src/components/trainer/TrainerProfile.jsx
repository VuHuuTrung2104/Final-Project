// src/components/trainer/TrainerProfile.jsx
import React from "react";

export default function TrainerProfile() {
  return (
    <div className="card shadow-sm p-3">
      <h4>👤 Hồ sơ Huấn luyện viên</h4>
      <p><b>Họ tên:</b> Trần Văn C</p>
      <p><b>Email:</b> tranvanc@example.com</p>
      <p><b>Chuyên môn:</b> Yoga trị liệu, Thiền</p>
      <p><b>Kinh nghiệm:</b> 5 năm giảng dạy</p>
      <p><b>Số điện thoại:</b> 0909 456 789</p>
      <button className="btn btn-primary">Chỉnh sửa hồ sơ</button>
    </div>
  );
}
