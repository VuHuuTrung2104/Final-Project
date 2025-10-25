import React from "react";
import "../../assets/css/admin/AdminReports.css";

export default function AdminReports() {
  return (
    <div className="admin-reports container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">Báo cáo & Thống kê</h2>
          <p className="text-muted mb-0">
            Tổng quan tình hình hoạt động, doanh thu và học viên trong tháng.
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          <i className="bi bi-download me-2"></i>Xuất báo cáo
        </button>
      </div>

      {/* Charts */}
      <div className="row g-3">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-3 h-100">
            <h5 className="fw-semibold text-success mb-2">
              Doanh thu theo tháng
            </h5>
            <div className="chart-placeholder bg-light rounded p-5 text-center text-muted">
              [Biểu đồ doanh thu]
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-3 h-100">
            <h5 className="fw-semibold text-success mb-2">
              Học viên theo tháng
            </h5>
            <div className="chart-placeholder bg-light rounded p-5 text-center text-muted">
              [Biểu đồ học viên]
            </div>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="card shadow-sm border-0 p-3 mt-4">
        <h5 className="fw-semibold text-success mb-3">Báo cáo tổng hợp</h5>
        <div className="table-responsive">
          <table className="table align-middle table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Chỉ số</th>
                <th>Tháng này</th>
                <th>So với tháng trước</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Doanh thu</td>
                <td className="fw-bold text-danger">120.000.000đ</td>
                <td>
                  <span className="text-success fw-semibold">
                    <i className="bi bi-arrow-up"></i> +12%
                  </span>
                </td>
              </tr>
              <tr>
                <td>Học viên mới</td>
                <td className="fw-bold">45</td>
                <td>
                  <span className="text-success fw-semibold">
                    <i className="bi bi-arrow-up"></i> +8%
                  </span>
                </td>
              </tr>
              <tr>
                <td>Buổi học</td>
                <td className="fw-bold">210</td>
                <td>
                  <span className="text-danger fw-semibold">
                    <i className="bi bi-arrow-down"></i> -3%
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
