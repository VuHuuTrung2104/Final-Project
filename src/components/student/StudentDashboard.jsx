import React from "react";

export default function StudentDashboard() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">🎓 Dashboard Học viên</h2>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card shadow-sm text-center p-3">
            <h6>Membership</h6>
            <p className="fw-bold text-success">Còn hạn (01/11/2025)</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm text-center p-3">
            <h6>Lịch học sắp tới</h6>
            <p className="fw-bold text-primary">Yoga cơ bản - 10:00 20/10</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm text-center p-3">
            <h6>Khóa học đã đăng ký</h6>
            <p className="fw-bold text-warning">3 khóa</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-3 mt-4">
        <h5 className="mb-3">📅 Lịch học tuần này</h5>
        <div className="table-responsive">
          <table className="table table-bordered align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Ngày</th><th>Khóa</th><th>Giờ</th><th>Phòng</th><th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>20/10</td><td>Yoga cơ bản</td><td>10:00-11:00</td><td>Phòng 1</td><td><span className="badge bg-success">Đã đăng ký</span></td></tr>
              <tr><td>22/10</td><td>Thiền</td><td>15:00-16:00</td><td>Phòng Thiền</td><td><span className="badge bg-secondary">Chưa đăng ký</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
