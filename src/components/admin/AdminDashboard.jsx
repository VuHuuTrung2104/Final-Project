import React from "react";
import "../../assets/css/admin/AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard  py-4 m-5">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold text-success mb-1">Bảng điều khiển quản lý</h2>
        <p className="text-muted mb-0">
          Tổng quan hệ thống Yoga Studio - thống kê học viên, huấn luyện viên và doanh thu
        </p>
      </div>

      {/* Thống kê nhanh */}
      <div className="row g-3">
        <div className="col-md-3">
          <div className="stat-card card shadow-sm text-center p-3">
            <h6 className="text-muted">Học viên</h6>
            <p className="fw-bold fs-4 text-primary mb-0">250</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card card shadow-sm text-center p-3">
            <h6 className="text-muted">Trainer</h6>
            <p className="fw-bold fs-4 text-success mb-0">15</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card card shadow-sm text-center p-3">
            <h6 className="text-muted">Lớp đang mở</h6>
            <p className="fw-bold fs-4 text-warning mb-0">12</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card card shadow-sm text-center p-3">
            <h6 className="text-muted">Doanh thu</h6>
            <p className="fw-bold fs-4 text-danger mb-0">120.000.000đ</p>
          </div>
        </div>
      </div>

      {/* Dòng dưới */}
      <div className="row g-3 mt-1">
        {/* Biểu đồ doanh thu */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold mb-0 text-success">Doanh thu theo tháng</h5>
              <span className="badge bg-light text-success border">2025</span>
            </div>
            <div className="chart-placeholder text-center text-muted p-5 rounded bg-light">
              <i className="bi bi-graph-up fs-1"></i>
              <p className="mt-2 mb-0">Biểu đồ doanh thu sẽ hiển thị tại đây</p>
            </div>
          </div>
        </div>

        {/* Thống kê phụ */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="fw-bold mb-3 text-success">Thống kê nhanh</h5>
            <ul className="list-group list-group-flush small">
              <li className="list-group-item px-0 d-flex justify-content-between">
                <span>Đăng ký mới</span> <b>28</b>
              </li>
              <li className="list-group-item px-0 d-flex justify-content-between">
                <span>Hủy buổi</span> <b>3</b>
              </li>
              <li className="list-group-item px-0 d-flex justify-content-between">
                <span>Gói sắp hết hạn</span> <b>14</b>
              </li>
              <li className="list-group-item px-0 d-flex justify-content-between">
                <span>Doanh thu trung bình / tháng</span> <b>10.000.000đ</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
