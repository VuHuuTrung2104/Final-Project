import React from "react";
import "../../assets/css/admin/AdminContent.css";

export default function AdminContent() {
  const posts = [
    { id: 1, title: "Lợi ích của Yoga mỗi ngày", date: "05/10/2025", status: "Xuất bản" },
    { id: 2, title: "Bí quyết duy trì năng lượng tích cực", date: "08/10/2025", status: "Bản nháp" },
  ];

  return (
    <div className="admin-content-page container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">📰 Quản lý Nội dung (CMS)</h2>
          <p className="text-muted mb-0">
            Thêm, chỉnh sửa và quản lý các bài viết hiển thị trên trang web Yoga.
          </p>
        </div>
        <button
          className="btn btn-success rounded-pill px-3"
          data-bs-toggle="modal"
          data-bs-target="#postModal"
        >
          <i className="bi bi-plus-circle me-2"></i> Thêm bài viết
        </button>
      </div>

      {/* Danh sách bài viết */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Tiêu đề</th>
                <th>Ngày đăng</th>
                <th>Trạng thái</th>
                <th className="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{p.title}</td>
                  <td>{p.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        p.status === "Xuất bản"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group gap-1">
                      <button className="btn btn-sm btn-outline-secondary rounded-pill">
                        <i className="bi bi-pencil"></i> Sửa
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-pill">
                        <i className="bi bi-trash"></i> Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal thêm/sửa bài viết */}
      <div
        className="modal fade"
        id="postModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title fw-semibold">
                📝 Thêm / Sửa Bài Viết
              </h5>
              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label className="form-label fw-semibold">Tiêu đề</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập tiêu đề bài viết"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label fw-semibold">Nội dung</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Nhập nội dung bài viết..."
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Ảnh minh họa</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Trạng thái</label>
                  <select className="form-select">
                    <option>Xuất bản</option>
                    <option>Bản nháp</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary rounded-pill"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button className="btn btn-success rounded-pill px-4">
                <i className="bi bi-save2 me-2"></i>Lưu bài viết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
