// src/pages/trainer/TrainerAttendance.jsx
import React from "react";
import "../../assets/css/trainer/TrainerAttendance.css";

export default function TrainerAttendance() {
  const attendanceData = [
    { id: 1, name: "Nguyễn Văn A", course: "Yoga Cơ bản", date: "10/10/2025", status: "Có mặt" },
    { id: 2, name: "Trần Thị B", course: "Yoga Nâng cao", date: "10/10/2025", status: "Vắng" },
    { id: 3, name: "Lê Văn C", course: "Thiền sâu", date: "10/10/2025", status: "Có mặt" },
  ];

  const totalPresent = attendanceData.filter(s => s.status === "Có mặt").length;
  const totalAbsent = attendanceData.filter(s => s.status === "Vắng").length;

  return (
    <div className="trainer-attendance container-fluid py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">✅ Điểm danh học viên</h2>
          <p className="text-muted mb-0">
            Theo dõi và quản lý tình trạng tham gia lớp học của học viên 🧘‍♀️
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          + Ghi nhận buổi mới
        </button>
      </div>

      {/* Thống kê nhanh */}
      <div className="row g-3 mb-4">
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">👥 Tổng học viên</h6>
            <h4 className="fw-bold">{attendanceData.length}</h4>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">✅ Có mặt</h6>
            <h4 className="fw-bold text-success">{totalPresent}</h4>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">❌ Vắng</h6>
            <h4 className="fw-bold text-danger">{totalAbsent}</h4>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">📅 Ngày học</h6>
            <h4 className="fw-bold">10/10/2025</h4>
          </div>
        </div>
      </div>

      {/* Bảng điểm danh */}
      <div className="card shadow-sm border-0 p-4">
        <h5 className="fw-bold mb-3">🧾 Danh sách điểm danh</h5>
        <div className="table-responsive">
          <table className="table align-middle table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Tên học viên</th>
                <th>Khóa học</th>
                <th>Ngày</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{s.name}</td>
                  <td>{s.course}</td>
                  <td>{s.date}</td>
                  <td>
                    <span
                      className={`badge rounded-pill px-3 py-2 ${
                        s.status === "Có mặt" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
