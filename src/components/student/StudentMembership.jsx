import React from "react";

export default function StudentMembership() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">🎫 Membership</h2>

      <div className="row g-3">
        <div className="col-lg-6">
          <div className="card shadow-sm p-3">
            <h5 className="mb-2">Gói hiện tại</h5>
            <p className="mb-1"><b>Tên gói:</b> Yoga Cơ bản (1 tháng)</p>
            <p className="mb-3"><b>Hết hạn:</b> 01/11/2025</p>
            <div className="d-flex gap-2">
              <button className="btn btn-warning">Gia hạn</button>
              <button className="btn btn-success">Mua thêm gói</button>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm p-3">
            <h5 className="mb-3">💳 Thanh toán</h5>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Khoản</label>
                <select className="form-select">
                  <option>Membership 1 tháng</option>
                  <option>Membership 3 tháng</option>
                  <option>Khóa Yoga nâng cao</option>
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
                <button className="btn btn-dark">Nộp phí</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-3 mt-4">
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
