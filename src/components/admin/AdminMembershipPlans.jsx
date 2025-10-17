import React from "react";
import "../../assets/css/admin/AdminMembershipPlans.css";

export default function AdminMembershipPlans() {
  const plans = [
    { id: 1, name: "Gói 1 tháng", price: "1.000.000đ", desc: "Không giới hạn lớp thường." },
    { id: 2, name: "Gói 3 tháng", price: "2.500.000đ", desc: "Tiết kiệm 20%." },
  ];

  return (
    <div className="admin-membership container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">🎟️ Quản lý Gói tập</h2>
          <p className="text-muted mb-0">Thêm, sửa hoặc xóa các gói tập của học viên.</p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#planModal"
        >
          ➕ Thêm Gói
        </button>
      </div>

      {/* Bảng danh sách gói tập */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Tên gói</th>
                <th>Giá</th>
                <th>Mô tả</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold text-success">{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.desc}</td>
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

      {/* Modal thêm/sửa gói tập */}
      <div className="modal fade" id="planModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">📝 Thêm / Chỉnh sửa Gói tập</h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Tên gói</label>
                  <input className="form-control" placeholder="VD: Gói 1 tháng" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Giá</label>
                  <input className="form-control" placeholder="VD: 1.000.000đ" />
                </div>

                <div className="col-12">
                  <label className="form-label">Mô tả</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Nhập mô tả ngắn về gói..."
                  ></textarea>
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
