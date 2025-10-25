import React from "react";
import "../../assets/css/student/StudentPayments.css";

export default function StudentPayments() {
  return (
    <div className="modern-payments container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Thanh toán</h2>
          <p className="text-muted mb-0">
            Quản lý và theo dõi các khoản phí của bạn tại Harmonia Yoga
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          + Nộp phí mới
        </button>
      </div>

      {/* Form thanh toán */}
      <div className="card shadow-sm border-0 p-4 mb-4">
        <h5 className="fw-bold mb-3">Nộp phí</h5>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Khoản</label>
            <select className="form-select rounded-3">
              <option>Membership</option>
              <option>Course</option>
              <option>Workshop</option>
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
            <button className="btn btn-primary rounded-pill px-4">
              Xác nhận thanh toán
            </button>
          </div>
        </form>
      </div>

      {/* Lịch sử giao dịch */}
      <div className="card shadow-sm border-0 p-4">
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
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Membership 1 tháng</td>
                <td>1.000.000đ</td>
                <td>01/09/2025</td>
                <td>Thẻ</td>
                <td>
                  <span className="badge bg-success-subtle text-success border">
                    Đã thanh toán
                  </span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Yoga nâng cao</td>
                <td>2.500.000đ</td>
                <td>05/09/2025</td>
                <td>Chuyển khoản</td>
                <td>
                  <span className="badge bg-warning-subtle text-warning border">
                    Đang xử lý
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
