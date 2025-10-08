import React from "react";

export default function StudentPayments() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">💳 Thanh toán</h2>

      <div className="card shadow-sm p-3 mb-4">
        <h5 className="mb-3">Nộp phí</h5>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Khoản</label>
            <select className="form-select">
              <option>Membership</option>
              <option>Course</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Số tiền</label>
            <input className="form-control" placeholder="VD: 1.000.000" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phương thức</label>
            <select className="form-select">
              <option>Thẻ</option><option>Tiền mặt</option><option>Chuyển khoản</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Ngày</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Xác nhận thanh toán</button>
          </div>
        </form>
      </div>

      <div className="card shadow-sm p-3">
        <h5 className="mb-3">🧾 Lịch sử giao dịch</h5>
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead><tr><th>#</th><th>Khoản</th><th>Số tiền</th><th>Ngày</th><th>Phương thức</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Membership 1 tháng</td><td>1.000.000đ</td><td>01/09/2025</td><td>Thẻ</td></tr>
              <tr><td>2</td><td>Yoga nâng cao</td><td>2.500.000đ</td><td>05/09/2025</td><td>Chuyển khoản</td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
