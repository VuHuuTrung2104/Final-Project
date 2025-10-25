// src/pages/trainer/TrainerSchedule.jsx
import React from "react";
import "../../assets/css/trainer/TrainerSchedule.css";

export default function TrainerSchedule() {
  const sessions = [
    {
      id: 1,
      date: "20/10/2025",
      course: "Yoga cơ bản",
      time: "10:00 - 11:00",
      room: "Phòng 1",
      students: 12,
      status: "Hoàn thành",
      color: "success",
    },
    {
      id: 2,
      date: "22/10/2025",
      course: "Thiền",
      time: "15:00 - 16:00",
      room: "Phòng Thiền",
      students: 9,
      status: "Sắp diễn ra",
      color: "primary",
    },
    {
      id: 3,
      date: "24/10/2025",
      course: "Yoga nâng cao",
      time: "18:00 - 19:00",
      room: "Phòng 2",
      students: 10,
      status: "Đã hủy",
      color: "danger",
    },
  ];

  return (
    <div className="trainer-schedule container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Lịch dạy của bạn</h2>
          <p className="text-muted mb-0">
            Quản lý, cập nhật và theo dõi lịch giảng dạy của bạn trong tuần này.
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          + Tạo buổi dạy mới
        </button>
      </div>

      <div className="card shadow-sm border-0 p-4">
        <h5 className="fw-bold mb-3">Danh sách buổi dạy</h5>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Ngày</th>
                <th>Khóa</th>
                <th>Giờ</th>
                <th>Phòng</th>
                <th>Học viên</th>
                <th>Trạng thái</th>
                <th className="text-end">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.date}</td>
                  <td className="fw-bold text-success">{s.course}</td>
                  <td>{s.time}</td>
                  <td>{s.room}</td>
                  <td>{s.students}</td>
                  <td>
                    <span className={`badge bg-${s.color}`}>{s.status}</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-success rounded-pill">
                        ✅ Hoàn thành
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-pill">
                        ❌ Hủy
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lịch tháng tổng quan */}
      <div className="calendar-section card shadow-sm border-0 p-4 mt-4">
        <h5 className="fw-bold mb-3">Lịch tổng quan tháng 10/2025</h5>
        <div className="calendar-grid">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
            const isTeachingDay = [4, 10, 20, 22, 24].includes(d);
            return (
              <div
                key={d}
                className={`calendar-day ${
                  isTeachingDay ? "active" : ""
                }`}
              >
                {d}
              </div>
            );
          })}
        </div>
        <p className="text-muted small mt-3">
          <span className="badge bg-success me-2">&nbsp;</span> Ngày có lớp dạy
        </p>
      </div>
    </div>
  );
}
