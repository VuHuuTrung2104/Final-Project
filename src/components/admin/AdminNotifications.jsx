import React from "react";
import "../../assets/css/admin/AdminNotifications.css";

export default function AdminNotifications() {
  const notifications = [
    {
      id: 1,
      title: "Hủy lớp Yoga ngày 20/10",
      content: "Do bảo trì phòng tập.",
      date: "18/10/2025",
      status: "Đã gửi",
    },
    {
      id: 2,
      title: "Giảm giá 30% cho gói tập 6 tháng",
      content: "Ưu đãi đặc biệt đến 30/10.",
      date: "10/10/2025",
      status: "Nháp",
    },
  ];

  return (
    <div className="admin-notifications container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">Quản lý Thông báo</h2>
          <p className="text-muted mb-0">
            Gửi thông báo đến học viên và huấn luyện viên.
          </p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#createNoticeModal"
        >
          Tạo thông báo mới
        </button>
      </div>

      {/* Danh sách thông báo */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Tiêu đề</th>
                <th>Nội dung</th>
                <th>Ngày tạo</th>
                <th>Trạng thái</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((n, i) => (
                <tr key={n.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{n.title}</td>
                  <td>{n.content}</td>
                  <td>{n.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        n.status === "Đã gửi"
                          ? "bg-success-subtle text-success border"
                          : "bg-warning-subtle text-warning border"
                      }`}
                    >
                      {n.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary rounded-pill">
                        <i className="bi bi-eye me-1"></i>Xem
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

      {/* Modal tạo thông báo */}
      <div
        className="modal fade"
        id="createNoticeModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">Tạo thông báo mới</h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form className="row g-3">
                <div className="col-12">
                  <label className="form-label">Tiêu đề</label>
                  <input
                    className="form-control"
                    placeholder="Nhập tiêu đề thông báo..."
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Nội dung</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Nhập nội dung thông báo..."
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Trạng thái</label>
                  <select className="form-select">
                    <option>Nháp</option>
                    <option>Đã gửi</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Ngày tạo</label>
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
