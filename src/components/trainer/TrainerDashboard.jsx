import React from "react";

export default function TrainerDashboard() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">🧘 Dashboard Huấn luyện viên</h2>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card shadow-sm p-3 text-center">
            <h6>Tổng số buổi đã dạy</h6>
            <p className="fw-bold text-success">120 buổi</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-3 text-center">
            <h6>Buổi dạy sắp tới</h6>
            <p className="fw-bold text-primary">Yoga nâng cao - 15:00 22/10</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-3 mt-4">
        <h5 className="mb-3">📅 Lịch dạy trong tuần</h5>
        <div className="table-responsive">
          <table className="table table-bordered align-middle mb-0">
            <thead className="table-light">
              <tr><th>Ngày</th><th>Khóa</th><th>Giờ</th><th>Phòng</th><th>Học viên</th></tr>
            </thead>
            <tbody>
              <tr><td>20/10</td><td>Yoga cơ bản</td><td>10:00-11:00</td><td>Phòng 1</td><td>12</td></tr>
              <tr><td>22/10</td><td>Thiền</td><td>15:00-16:00</td><td>Phòng Thiền</td><td>9</td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
