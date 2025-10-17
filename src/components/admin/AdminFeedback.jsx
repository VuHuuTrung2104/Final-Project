import React from "react";
import "../../assets/css/admin/AdminFeedback.css";

export default function AdminFeedback() {
  const feedbacks = [
    { id: 1, name: "Nguyễn Văn A", content: "Lớp Yoga cơ bản rất bổ ích!", rating: 4, date: "05/10/2025", status: "Đã duyệt" },
    { id: 2, name: "Trần Thị B", content: "Huấn luyện viên nhiệt tình, dễ hiểu.", rating: 5, date: "08/10/2025", status: "Chờ duyệt" },
  ];

  return (
    <div className="admin-feedback container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">💬 Quản lý Feedback</h2>
          <p className="text-muted mb-0">Theo dõi và phản hồi ý kiến từ học viên.</p>
        </div>
      </div>

      {/* Danh sách feedback */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Người gửi</th>
                <th>Nội dung</th>
                <th>Đánh giá</th>
                <th>Ngày gửi</th>
                <th>Trạng thái</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((f, i) => (
                <tr key={f.id}>
                  <td>{i + 1}</td>
                  <td><b>{f.name}</b></td>
                  <td>{f.content}</td>
                  <td>
                    {"⭐".repeat(f.rating)}
                    {"☆".repeat(5 - f.rating)}
                  </td>
                  <td>{f.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        f.status === "Đã duyệt"
                          ? "bg-success-subtle text-success border"
                          : "bg-warning-subtle text-warning border"
                      }`}
                    >
                      {f.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button
                        className="btn btn-sm btn-outline-primary rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#viewFeedbackModal"
                      >
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

      {/* Modal xem feedback chi tiết */}
      <div
        className="modal fade"
        id="viewFeedbackModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">💬 Chi tiết Feedback</h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <p>
                <b>Người gửi:</b> Nguyễn Văn A
              </p>
              <p>
                <b>Đánh giá:</b> ⭐⭐⭐⭐☆
              </p>
              <p>
                <b>Nội dung:</b> Lớp Yoga cơ bản rất bổ ích, huấn luyện viên thân thiện.
              </p>
              <p>
                <b>Ngày gửi:</b> 05/10/2025
              </p>

              <div className="form-group mt-3">
                <label className="form-label fw-semibold">Phản hồi của Admin</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Nhập phản hồi của bạn..."
                ></textarea>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button className="btn btn-success">Gửi phản hồi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
