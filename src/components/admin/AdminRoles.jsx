import React from "react";
import "../../assets/css/admin/AdminRoles.css";

export default function AdminRoles() {
  const roles = [
    { id: 1, name: "Nguyễn Văn A", role: "Student" },
    { id: 2, name: "Trần Thị B", role: "Trainer" },
    { id: 3, name: "Admin C", role: "Admin" },
  ];

  return (
    <div className="admin-roles container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">🛡️ Quản lý Phân quyền</h2>
          <p className="text-muted mb-0">
            Quản lý vai trò và quyền truy cập của người dùng trong hệ thống.
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          <i className="bi bi-plus-lg me-2"></i>Thêm quyền mới
        </button>
      </div>

      {/* Bảng phân quyền */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Người dùng</th>
                <th>Vai trò hiện tại</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{r.name}</td>
                  <td>
                    <span
                      className={`badge role-badge ${
                        r.role === "Admin"
                          ? "bg-danger-subtle text-danger border"
                          : r.role === "Trainer"
                          ? "bg-info-subtle text-info border"
                          : "bg-success-subtle text-success border"
                      }`}
                    >
                      {r.role}
                    </span>
                  </td>
                  <td className="text-end">
                    {r.role === "Student" ? (
                      <button className="btn btn-sm btn-outline-warning rounded-pill">
                        <i className="bi bi-arrow-up-circle me-1"></i>Nâng cấp Trainer
                      </button>
                    ) : r.role === "Trainer" ? (
                      <button className="btn btn-sm btn-outline-danger rounded-pill">
                        <i className="bi bi-arrow-down-circle me-1"></i>Hạ xuống Student
                      </button>
                    ) : (
                      <button className="btn btn-sm btn-outline-secondary rounded-pill" disabled>
                        <i className="bi bi-shield-lock me-1"></i>Admin
                      </button>
                    )}
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
