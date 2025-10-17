import React from "react";
import "../../assets/css/admin/AdminSchedule.css";

export default function AdminSchedule() {
  const schedules = [
    {
      id: 1,
      date: "20/10/2025",
      time: "10:00 - 11:00",
      course: "Yoga cơ bản",
      trainer: "HLV Hoa",
      room: "Phòng 1",
    },
    {
      id: 2,
      date: "22/10/2025",
      time: "15:00 - 16:00",
      course: "Thiền",
      trainer: "HLV Nam",
      room: "Phòng Thiền",
    },
  ];

  return (
    <div className="admin-schedule container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">📅 Quản lý Lịch học</h2>
          <p className="text-muted mb-0">
            Theo dõi, chỉnh sửa và sắp xếp lịch học cho từng lớp và huấn luyện viên.
          </p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#schedModal"
        >
          <i className="bi bi-plus-circle me-2"></i> Tạo lịch mới
        </button>
      </div>

      {/* Thông báo hướng dẫn */}
      <div className="alert alert-info border-0 shadow-sm mb-4">
        💡 <b>Mẹo:</b> Kiểm tra trùng lịch theo <b>Huấn luyện viên</b> và{" "}
        <b>Phòng học</b> để tránh xung đột thời gian.
      </div>

      {/* Danh sách lịch */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Ngày</th>
                <th>Khung giờ</th>
                <th>Khóa học</th>
                <th>Trainer</th>
                <th>Phòng</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{s.date}</td>
                  <td>
                    <span className="badge bg-success-subtle text-success border fw-semibold">
                      {s.time}
                    </span>
                  </td>
                  <td>{s.course}</td>
                  <td>{s.trainer}</td>
                  <td>{s.room}</td>
                  <td className="text-end">
                    <div className="btn-group gap-2">
                      <button className="btn btn-sm btn-outline-secondary rounded-pill">
                        <i className="bi bi-pencil-square me-1"></i>Sửa
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-pill">
                        <i className="bi bi-trash me-1"></i>Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tạo/Sửa Lịch */}
      <div
        className="modal fade"
        id="schedModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title fw-semibold">🗓️ Tạo / Sửa Lịch học</h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Ngày</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Giờ bắt đầu</label>
                  <input type="time" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Giờ kết thúc</label>
                  <input type="time" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Khóa học</label>
                  <select className="form-select">
                    <option>Yoga cơ bản</option>
                    <option>Thiền</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Huấn luyện viên</label>
                  <select className="form-select">
                    <option>HLV Hoa</option>
                    <option>HLV Nam</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Phòng học</label>
                  <select className="form-select">
                    <option>Phòng 1</option>
                    <option>Phòng Thiền</option>
                  </select>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="chkRepeat"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="chkRepeat"
                    >
                      Lặp lại hàng tuần
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary rounded-pill"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button className="btn btn-success rounded-pill px-4">
                Lưu lịch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
