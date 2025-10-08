// src/components/admin/AdminAnalytics.jsx
import React from "react";

export default function AdminAnalytics() {
  return (
    <div className="card shadow-sm p-3">
      <h4>📊 Thống kê nâng cao</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h6>👥 Tổng học viên</h6>
            <p className="fw-bold text-primary">250</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h6>🧘 Huấn luyện viên</h6>
            <p className="fw-bold text-success">12</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h6>💰 Doanh thu tháng</h6>
            <p className="fw-bold text-danger">150.000.000đ</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h6>Doanh thu</h6>
        <div className="progress">
          <div className="progress-bar bg-success" style={{ width: "70%" }}>
            70%
          </div>
        </div>
      </div>
    </div>
  );
}
