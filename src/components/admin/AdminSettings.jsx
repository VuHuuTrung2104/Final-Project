import React from "react";
import "../../assets/css/admin/AdminSettings.css";

export default function AdminSettings() {
  return (
    <div className="admin-settings container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">Cài đặt hệ thống</h2>
          <p className="text-muted mb-0">
            Quản lý thông tin cơ bản và cấu hình hiển thị của trung tâm Yoga.
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          <i className="bi bi-gear-wide-connected me-2"></i>Cập nhật cấu hình
        </button>
      </div>

      {/* Card content */}
      <div className="card shadow-sm border-0 p-4">
        <form className="row g-4">
          {/* Tên trung tâm */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Tên trung tâm
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue="Harmonia Yoga Studio"
            />
          </div>

          {/* Email liên hệ */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Email liên hệ
            </label>
            <input
              type="email"
              className="form-control"
              defaultValue="contact@harmonia.com"
            />
          </div>

          {/* Logo */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Logo</label>
            <input type="file" className="form-control" />
            <small className="text-muted fst-italic">
              Định dạng được hỗ trợ: JPG, PNG (tối đa 2MB)
            </small>
          </div>

          {/* Màu chủ đạo */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Màu chủ đạo website
            </label>
            <input type="color" className="form-control form-control-color" defaultValue="#198754" />
          </div>

          {/* Thông báo chung */}
          <div className="col-12">
            <label className="form-label fw-semibold">Thông báo mặc định</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="VD: Chào mừng bạn đến với Harmonia Yoga! 🌿"
            ></textarea>
          </div>

          {/* Nút hành động */}
          <div className="col-12 text-end">
            <button type="submit" className="btn btn-success rounded-pill px-4">
              <i className="bi bi-save2 me-2"></i>Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
