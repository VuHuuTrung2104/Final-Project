import React from "react";
import "../../assets/css/admin/AdminAnalytics.css";

export default function AdminAnalytics() {
  return (
    <div className="admin-analytics container-fluid py-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold text-success mb-1">Thống kê nâng cao</h2>
        <p className="text-muted mb-0">Tổng hợp dữ liệu về học viên, huấn luyện viên, doanh thu và hoạt động.</p>
      </div>

      {/* Tổng quan */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card analytics-card shadow-sm border-0 p-3 text-center">
            <h6 className="text-secondary">Tổng học viên</h6>
            <p className="fw-bold fs-4 text-primary mb-0">250</p>
            <small className="text-muted">+15 trong tháng này</small>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card analytics-card shadow-sm border-0 p-3 text-center">
            <h6 className="text-secondary">Huấn luyện viên</h6>
            <p className="fw-bold fs-4 text-success mb-0">12</p>
            <small className="text-muted">+2 huấn luyện viên mới</small>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card analytics-card shadow-sm border-0 p-3 text-center">
            <h6 className="text-secondary">Doanh thu tháng</h6>
            <p className="fw-bold fs-4 text-danger mb-0">150.000.000đ</p>
            <small className="text-muted">↑ 10% so với tháng trước</small>
          </div>
        </div>
      </div>

      {/* Biểu đồ & Tiến độ */}
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-3 h-100">
            <h5 className="fw-bold mb-3">Biểu đồ doanh thu (Mock)</h5>
            <div className="chart-placeholder d-flex align-items-center justify-content-center text-muted bg-light rounded">
              [Biểu đồ Placeholder]
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-3 h-100">
            <h5 className="fw-bold mb-3">Tiến độ hoạt động</h5>

            <div className="mb-3">
              <p className="mb-1 text-secondary">Doanh thu</p>
              <div className="progress" style={{ height: "10px" }}>
                <div className="progress-bar bg-success" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="mb-3">
              <p className="mb-1 text-secondary">Khóa học đang mở</p>
              <div className="progress" style={{ height: "10px" }}>
                <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div>
              <p className="mb-1 text-secondary">Tỷ lệ tham gia học viên</p>
              <div className="progress" style={{ height: "10px" }}>
                <div className="progress-bar bg-warning" style={{ width: "90%" }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
