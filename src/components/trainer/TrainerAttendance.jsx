// src/components/trainer/TrainerAttendance.jsx
import React from "react";

export default function TrainerAttendance() {
  return (
    <div className="card shadow-sm p-3">
      <h4>✅ Điểm danh học viên</h4>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên học viên</th>
            <th>Khóa học</th>
            <th>Ngày</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, name: "Nguyễn Văn A", course: "Yoga Cơ bản", date: "10/10/2025", status: "Có mặt" },
            { id: 2, name: "Trần Thị B", course: "Yoga Nâng cao", date: "10/10/2025", status: "Vắng" },
          ].map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.date}</td>
              <td>
                <span className={`badge ${s.status === "Có mặt" ? "bg-success" : "bg-danger"}`}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
