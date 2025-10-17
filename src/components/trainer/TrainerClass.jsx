// src/pages/trainer/TrainerClass.jsx
import React from "react";
import "../../assets/css/trainer/TrainerClass.css";

export default function TrainerClass() {
  const classInfo = {
    name: "Yoga cơ bản",
    room: "Phòng 1",
    time: "10:00 - 11:00",
    date: "20/10/2025",
    trainer: "Trần Văn C",
    students: 12,
  };

  const students = [
    { id: 1, name: "Nguyễn Văn A", status: "Đăng ký" },
    { id: 2, name: "Trần Thị B", status: "Đăng ký" },
    { id: 3, name: "Lê Văn C", status: "Đăng ký" },
  ];

  return (
    <div className="trainer-class container-fluid py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">👥 Quản lý lớp học</h2>
          <p className="text-muted mb-0">
            Theo dõi danh sách học viên và điểm danh buổi học hiện tại 🧘‍♀️
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          + Thêm học viên
        </button>
      </div>

      {/* Thông tin lớp */}
      <div className="card shadow-sm border-0 p-4 mb-4">
        <h5 className="fw-bold mb-3">📘 Thông tin lớp học</h5>
        <div className="row small text-muted">
          <div className="col-md-6">
            <p><b>Tên lớp:</b> {classInfo.name}</p>
            <p><b>Ngày học:</b> {classInfo.date}</p>
            <p><b>Giờ học:</b> {classInfo.time}</p>
          </div>
          <div className="col-md-6">
            <p><b>Phòng học:</b> {classInfo.room}</p>
            <p><b>Huấn luyện viên:</b> {classInfo.trainer}</p>
            <p><b>Số học viên:</b> {classInfo.students}</p>
          </div>
        </div>
      </div>

      {/* Bảng học viên */}
      <div className="card shadow-sm border-0 p-4">
        <h5 className="fw-bold mb-3">👩‍🎓 Danh sách học viên</h5>
        <div className="table-responsive">
          <table className="table align-middle table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Họ tên</th>
                <th>Trạng thái</th>
                <th>Điểm danh</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{s.name}</td>
                  <td>
                    <span className="badge bg-success">{s.status}</span>
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`chk-${s.id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`chk-${s.id}`}
                      >
                        Có mặt
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-end mt-3">
          <button className="btn btn-success rounded-pill px-4">
            💾 Lưu điểm danh
          </button>
        </div>
      </div>
    </div>
  );
}
