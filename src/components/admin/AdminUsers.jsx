import React from "react";
import "../../assets/css/admin/AdminUsers.css";

export default function AdminUsers() {
  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "a@example.com", role: "Student", status: "Active" },
    { id: 2, name: "Trần Thị B", email: "b@example.com", role: "Trainer", status: "Active" },
    { id: 3, name: "Admin C", email: "c@example.com", role: "Admin", status: "Inactive" },
  ];

  return (
    <div className="admin-users container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">👥 Quản lý người dùng</h2>
          <p className="text-muted mb-0">Danh sách toàn bộ học viên, huấn luyện viên và quản trị viên.</p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#userModal"
        >
          + Thêm User
        </button>
      </div>

      {/* Bảng danh sách */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Trạng thái</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span
                      className={`badge ${
                        u.role === "Admin"
                          ? "bg-danger-subtle text-danger border"
                          : u.role === "Trainer"
                          ? "bg-warning-subtle text-warning border"
                          : "bg-primary-subtle text-primary border"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        u.status === "Active"
                          ? "bg-success-subtle text-success border"
                          : "bg-secondary-subtle text-secondary border"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
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

      {/* Modal thêm/sửa user */}
      <div className="modal fade" id="userModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">Thêm / Chỉnh sửa User</h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Họ tên</label>
                  <input className="form-control" placeholder="Nhập họ tên..." />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input className="form-control" type="email" placeholder="user@example.com" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Vai trò</label>
                  <select className="form-select">
                    <option>Student</option>
                    <option>Trainer</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Trạng thái</label>
                  <select className="form-select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
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
