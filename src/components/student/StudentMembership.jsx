import React from "react";
import "../../assets/css/student/StudentMembership.css";

export default function StudentMembership() {
  return (
    <div className="modern-membership container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Membership</h2>
          <p className="text-muted mb-0">
            Quản lý gói tập và lịch sử thanh toán của bạn
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          + Mua gói mới
        </button>
      </div>

      <div className="row g-4">
        {/* Gói hiện tại */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-4 current-package">
            <h5 className="fw-bold mb-3">Gói hiện tại</h5>
            <p className="mb-1">
              <b>Tên gói:</b> Yoga Cơ bản (1 tháng)
            </p>
            <p className="mb-1">
              <b>Trạng thái:</b>{" "}
              <span className="badge bg-success-subtle text-success border">
                Còn hạn
              </span>
            </p>
            <p className="mb-3">
              <b>Hết hạn:</b> 01/11/2025
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-warning rounded-pill px-3">
                Gia hạn
              </button>
              <button className="btn btn-outline-success rounded-pill px-3">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>

        {/* Thanh toán */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold mb-3">Thanh toán</h5>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Khoản</label>
                <select className="form-select rounded-3">
                  <option>Membership 1 tháng</option>
                  <option>Membership 3 tháng</option>
                  <option>Khóa Yoga nâng cao</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Số tiền</label>
                <input
                  className="form-control rounded-3"
                  placeholder="VD: 1.000.000"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phương thức</label>
                <select className="form-select rounded-3">
                  <option>Thẻ</option>
                  <option>Tiền mặt</option>
                  <option>Chuyển khoản</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Ngày</label>
                <input type="date" className="form-control rounded-3" />
              </div>
              <div className="col-12 text-end">
                <button className="btn btn-dark rounded-pill px-4">
                  Nộp phí
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Lịch sử giao dịch */}
      <div className="card shadow-sm border-0 p-4 mt-4">
        <h5 className="fw-bold mb-3">Lịch sử giao dịch</h5>
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Khoản</th>
                <th>Số tiền</th>
                <th>Ngày</th>
                <th>Phương thức</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Membership 1 tháng</td>
                <td>1.000.000đ</td>
                <td>01/09/2025</td>
                <td>Thẻ</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Yoga nâng cao</td>
                <td>2.500.000đ</td>
                <td>05/09/2025</td>
                <td>Chuyển khoản</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
