import React from "react";
import "../../assets/css/admin/AdminCourses.css";

export default function AdminCourses() {
  const courses = [
    { id: 1, name: "Yoga cơ bản", level: "Cơ bản", fee: "1.000.000đ", duration: "60 phút" },
    { id: 2, name: "Yoga nâng cao", level: "Nâng cao", fee: "2.000.000đ", duration: "75 phút" },
  ];

  return (
    <div className="admin-courses container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">Quản lý Khóa học</h2>
          <p className="text-muted mb-0">Danh sách các khóa đang mở và có thể chỉnh sửa / thêm mới.</p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#courseModal"
        >
          + Thêm khóa học
        </button>
      </div>

      {/* Bảng danh sách */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Tên khóa học</th>
                <th>Level</th>
                <th>Học phí</th>
                <th>Thời lượng</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr key={c.id}>
                  <td>{i + 1}</td>
                  <td>{c.name}</td>
                  <td>
                    <span
                      className={`badge ${
                        c.level === "Nâng cao"
                          ? "bg-warning-subtle text-warning border"
                          : c.level === "Cơ bản"
                          ? "bg-primary-subtle text-primary border"
                          : "bg-success-subtle text-success border"
                      }`}
                    >
                      {c.level}
                    </span>
                  </td>
                  <td>{c.fee}</td>
                  <td>{c.duration}</td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary rounded-pill">
                        <i className="bi bi-pencil-square me-1"></i>Sửa
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-pill">
                        <i className="bi bi-trash3 me-1"></i>Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal thêm/sửa khóa học */}
      <div className="modal fade" id="courseModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">Thêm / Chỉnh sửa Khóa học</h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Tên khóa</label>
                  <input className="form-control" placeholder="VD: Yoga Cơ bản" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Level</label>
                  <select className="form-select">
                    <option>Cơ bản</option>
                    <option>Nâng cao</option>
                    <option>Mọi trình độ</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Học phí</label>
                  <input className="form-control" placeholder="VD: 1.000.000đ" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Thời lượng (phút)</label>
                  <input className="form-control" placeholder="VD: 60" />
                </div>
                <div className="col-12">
                  <label className="form-label">Mô tả</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Mô tả ngắn gọn về khóa học..."
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button className="btn btn-success">Lưu thay đổi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
