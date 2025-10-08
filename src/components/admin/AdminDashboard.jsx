import React from "react";

export default function AdminDashboard() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">🛠️ Dashboard Quản lý</h2>

      <div className="row g-3">
        <div className="col-md-3"><div className="card shadow-sm text-center p-3"><h6>Học viên</h6><p className="fw-bold text-primary">250</p></div></div>
        <div className="col-md-3"><div className="card shadow-sm text-center p-3"><h6>Trainer</h6><p className="fw-bold text-success">15</p></div></div>
        <div className="col-md-3"><div className="card shadow-sm text-center p-3"><h6>Lớp đang mở</h6><p className="fw-bold text-warning">12</p></div></div>
        <div className="col-md-3"><div className="card shadow-sm text-center p-3"><h6>Doanh thu</h6><p className="fw-bold text-danger">120.000.000đ</p></div></div>
      </div>

      <div className="row g-3 mt-1">
        <div className="col-lg-8">
          <div className="card shadow-sm p-3 h-100">
            <h5 className="mb-3">📈 Doanh thu theo tháng (mock)</h5>
            <div className="bg-light rounded p-5 text-center text-muted">[Biểu đồ Placeholder]</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm p-3 h-100">
            <h5 className="mb-3">💡 Thống kê nhanh</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item px-0 d-flex justify-content-between"><span>Đăng ký mới</span><b>28</b></li>
              <li className="list-group-item px-0 d-flex justify-content-between"><span>Hủy buổi</span><b>3</b></li>
              <li className="list-group-item px-0 d-flex justify-content-between"><span>Gói sắp hết hạn</span><b>14</b></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
