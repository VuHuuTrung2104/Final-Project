// src/components/student/StudentProgress.jsx
import React from "react";

export default function StudentProgress() {
  return (
    <div className="card shadow-sm p-3">
      <h4>📈 Tiến trình học tập</h4>
      <p>Đã tham gia: <b>15/20 buổi</b></p>
      <div className="progress">
        <div className="progress-bar bg-success" style={{ width: "75%" }}>
          75%
        </div>
      </div>
    </div>
  );
}
