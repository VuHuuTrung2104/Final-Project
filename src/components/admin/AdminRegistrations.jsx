import React from "react";
import "../../assets/css/admin/AdminRegistrations.css";

export default function AdminRegistrations() {
  const regs = [
    {
      id: 1,
      student: "Nguyễn Văn A",
      course: "Yoga cơ bản",
      date: "20/10/2025",
      status: "Active",
    },
    {
      id: 2,
      student: "Trần Thị B",
      course: "Thiền",
      date: "22/10/2025",
      status: "Cancelled",
    },
  ];

  return (
    <div className="admin-registrations container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">Quản lý Đăng ký học</h2>
          <p className="text-muted mb-0">
            Theo dõi trạng thái đăng ký và cập nhật nhanh cho học viên.
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          Thêm đăng ký
        </button>
      </div>

      {/* Danh sách đăng ký */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Học viên</th>
                <th>Khóa học</th>
                <th>Ngày đăng ký</th>
                <th>Trạng thái</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {regs.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{r.student}</td>
                  <td>{r.course}</td>
                  <td>{r.date}</td>
                  <td>
                    <span
                      className={`badge status-badge ${
                        r.status === "Active"
                          ? "bg-success-subtle text-success border"
                          : r.status === "Cancelled"
                          ? "bg-danger-subtle text-danger border"
                          : "bg-secondary-subtle text-secondary border"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group gap-2">
                      <button className="btn btn-sm btn-outline-success rounded-pill">
                        <i className="bi bi-check2-circle me-1"></i>Hoàn tất
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-pill">
                        <i className="bi bi-x-circle me-1"></i>Hủy
                      </button>
                      <button className="btn btn-sm btn-outline-secondary rounded-pill">
                        <i className="bi bi-arrow-repeat me-1"></i>Kích hoạt
                      </button>
                    </div>
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
