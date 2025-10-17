import React from "react";
import "../../assets/css/admin/AdminTrainers.css";

export default function AdminTrainers() {
  const trainers = [
    { id: 1, name: "HLV Hoa", phone: "0901 234 567", email: "hoa@studio.com", specialty: "Yoga cơ bản" },
    { id: 2, name: "HLV Nam", phone: "0902 345 678", email: "nam@studio.com", specialty: "Thiền" },
  ];

  return (
    <div className="admin-trainers container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">🧑‍🏫 Quản lý Huấn luyện viên</h2>
          <p className="text-muted mb-0">Danh sách các HLV đang hoạt động tại trung tâm.</p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#trainerModal"
        >
          + Thêm Trainer
        </button>
      </div>

      {/* Bảng danh sách HLV */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Họ tên</th>
                <th>Chuyên môn</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {trainers.map((t, i) => (
                <tr key={t.id}>
                  <td>{i + 1}</td>
                  <td>{t.name}</td>
                  <td>
                    <span className="badge bg-success-subtle text-success border">{t.specialty}</span>
                  </td>
                  <td>{t.phone}</td>
                  <td>{t.email}</td>
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

      {/* Modal thêm/sửa Trainer */}
      <div className="modal fade" id="trainerModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">Thêm / Chỉnh sửa Trainer</h5>
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
                  <label className="form-label">Chuyên môn</label>
                  <input className="form-control" placeholder="VD: Yoga cơ bản" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Điện thoại</label>
                  <input className="form-control" placeholder="VD: 090x xxx xxx" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="trainer@studio.com" />
                </div>
                <div className="col-12">
                  <label className="form-label">Ghi chú</label>
                  <textarea className="form-control" rows="2" placeholder="Ghi chú thêm..."></textarea>
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
