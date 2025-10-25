// src/pages/trainer/TrainerReports.jsx
import React from "react";
import "../../assets/css/trainer/TrainerReports.css";

export default function TrainerReports() {
  const report = {
    totalSessions: 25,
    totalStudents: 120,
    rating: 4.8,
    progress: 80,
  };

  return (
    <div className="trainer-reports container-fluid py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Thống kê giảng dạy</h2>
          <p className="text-muted mb-0">
            Theo dõi kết quả và hiệu suất giảng dạy của bạn trong tháng này 🧘‍♂️
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          Xuất báo cáo
        </button>
      </div>

      {/* Cards thống kê tổng quan */}
      <div className="row g-3 mb-4">
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Buổi đã dạy</h6>
            <h3 className="fw-bold text-success">{report.totalSessions}</h3>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Học viên đã hướng dẫn</h6>
            <h3 className="fw-bold text-primary">{report.totalStudents}</h3>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Đánh giá trung bình</h6>
            <h3 className="fw-bold text-warning">{report.rating}/5</h3>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Tiến độ tháng</h6>
            <h3 className="fw-bold text-info">{report.progress}%</h3>
          </div>
        </div>
      </div>

      {/* Biểu đồ tiến độ tháng */}
      <div className="card shadow-sm border-0 p-4">
        <h5 className="fw-bold mb-3">Hiệu suất giảng dạy tháng này</h5>
        <div className="progress rounded-pill" style={{ height: "22px" }}>
          <div
            className="progress-bar bg-info fw-bold"
            style={{ width: `${report.progress}%` }}
          >
            {report.progress}%
          </div>
        </div>
        <p className="text-muted small mt-2">
          Đạt <b>{report.progress}%</b> mục tiêu giảng dạy tháng này.
        </p>
      </div>

      {/* Báo cáo chi tiết */}
      <div className="card shadow-sm border-0 p-4 mt-4">
        <h5 className="fw-bold mb-3">Chi tiết hoạt động</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span>Tổng buổi giảng dạy</span>
            <b>{report.totalSessions}</b>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Tổng học viên tham gia</span>
            <b>{report.totalStudents}</b>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Đánh giá trung bình học viên</span>
            <b>{report.rating}/5 ⭐</b>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Tiến độ tháng hiện tại</span>
            <b>{report.progress}%</b>
          </li>
        </ul>
      </div>
    </div>
  );
}
