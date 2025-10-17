import React from "react";
import "../../assets/css/admin/AdminMemberships.css";

export default function AdminMemberships() {
  const memberships = [
    { id: 1, student: "Nguyễn Văn A", plan: "Gói 1 tháng", expire: "01/11/2025", status: "Còn hạn" },
    { id: 2, student: "Trần Thị B", plan: "Gói 3 tháng", expire: "15/12/2025", status: "Còn hạn" },
  ];

  return (
    <div className="admin-membership container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">🎫 Membership của Học viên</h2>
          <p className="text-muted mb-0">Quản lý các gói tập đã được gán cho học viên.</p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#assignModal"
        >
          ➕ Gán gói mới
        </button>
      </div>

      {/* Bảng danh sách membership */}
      <div className="card shadow-sm border-0 p-3">
        <div className="d-flex gap-2 mb-3">
          <button
            className="btn btn-outline-success rounded-pill"
            data-bs-toggle="modal"
            data-bs-target="#assignModal"
          >
            <i className="bi bi-plus-circle me-1"></i> Gán gói
          </button>
          <button className="btn btn-outline-warning rounded-pill">
            <i className="bi bi-arrow-repeat me-1"></i> Gia hạn
          </button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Học viên</th>
                <th>Gói</th>
                <th>Hết hạn</th>
                <th>Trạng thái</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {memberships.map((m, i) => (
                <tr key={m.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{m.student}</td>
                  <td className="text-success fw-semibold">{m.plan}</td>
                  <td>{m.expire}</td>
                  <td>
                    <span
                      className={`badge ${
                        m.status === "Còn hạn"
                          ? "bg-success-subtle text-success border"
                          : "bg-danger-subtle text-danger border"
                      }`}
                    >
                      {m.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-warning rounded-pill">
                        <i className="bi bi-arrow-repeat me-1"></i>Gia hạn
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-pill">
                        <i className="bi bi-x-circle me-1"></i>Hủy
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal gán gói */}
      <div className="modal fade" id="assignModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">🧾 Gán Membership</h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Học viên</label>
                  <select className="form-select">
                    <option>Nguyễn Văn A</option>
                    <option>Trần Thị B</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Gói tập</label>
                  <select className="form-select">
                    <option>Gói 1 tháng</option>
                    <option>Gói 3 tháng</option>
                    <option>Gói 6 tháng</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Ngày bắt đầu</label>
                  <input type="date" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Ngày kết thúc</label>
                  <input type="date" className="form-control" />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button className="btn btn-success">Lưu</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
