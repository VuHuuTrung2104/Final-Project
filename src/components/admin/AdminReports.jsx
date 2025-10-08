import React from "react";

export default function AdminReports() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">📊 Báo cáo & Thống kê</h2>

      <div className="row g-3">
        <div className="col-lg-6">
          <div className="card shadow-sm p-3 h-100">
            <h5 className="mb-2">Doanh thu theo tháng</h5>
            <div className="bg-light rounded p-5 text-center text-muted">[Biểu đồ Placeholder]</div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm p-3 h-100">
            <h5 className="mb-2">Số học viên theo tháng</h5>
            <div className="bg-light rounded p-5 text-center text-muted">[Biểu đồ Placeholder]</div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-3 mt-3">
        <h5 className="mb-3">Báo cáo tổng hợp</h5>
        <div className="table-responsive">
          <table className="table table-bordered align-middle mb-0">
            <thead className="table-light"><tr><th>Chỉ số</th><th>Tháng này</th><th>So với tháng trước</th></tr></thead>
            <tbody>
              <tr><td>Doanh thu</td><td>120.000.000đ</td><td><span className="text-success">+12%</span></td></tr>
              <tr><td>Học viên mới</td><td>45</td><td><span className="text-success">+8%</span></td></tr>
              <tr><td>Buổi học</td><td>210</td><td><span className="text-danger">-3%</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
