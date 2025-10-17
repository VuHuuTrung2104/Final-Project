import React from "react";
import "../../assets/css/admin/AdminClassrooms.css";

export default function AdminClassrooms() {
  const rooms = [
    { id: 1, name: "Phòng 1", capacity: 15, note: "Phòng tập chính" },
    { id: 2, name: "Phòng Thiền", capacity: 12, note: "Không gian yên tĩnh" },
  ];

  return (
    <div className="admin-classrooms container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">🏫 Quản lý Phòng học</h2>
          <p className="text-muted mb-0">Theo dõi và chỉnh sửa danh sách các phòng tập của trung tâm.</p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#roomModal"
        >
          + Thêm Phòng
        </button>
      </div>

      {/* Bảng danh sách phòng học */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Tên phòng</th>
                <th>Sức chứa</th>
                <th>Ghi chú</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td>
                  <td>
                    <span className="fw-semibold text-dark">{r.name}</span>
                  </td>
                  <td>
                    <span className="badge bg-success-subtle text-success border">
                      {r.capacity} người
                    </span>
                  </td>
                  <td>{r.note}</td>
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

      {/* Modal thêm/sửa phòng */}
      <div className="modal fade" id="roomModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">Thêm / Chỉnh sửa Phòng học</h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Tên phòng</label>
                  <input className="form-control" placeholder="VD: Phòng Yoga 1" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Sức chứa</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="VD: 15"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Ghi chú</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Mô tả hoặc ghi chú thêm..."
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
