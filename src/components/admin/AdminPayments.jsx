import React from "react";

export default function AdminPayments() {
  const rows = [
    { id: 1, item: "Membership 1 tháng", amount: "1.000.000đ", date: "01/09/2025", method: "Thẻ", user: "Nguyễn Văn A" },
    { id: 2, item: "Yoga nâng cao", amount: "2.500.000đ", date: "05/09/2025", method: "Chuyển khoản", user: "Trần Thị B" },
  ];

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">💵 Quản lý Thanh toán</h2>

      <div className="card shadow-sm p-3 mb-4">
        <h5 className="mb-3">Ghi nhận thanh toán</h5>
        <form className="row g-3">
          <div className="col-md-4"><label className="form-label">Học viên</label><select className="form-select"><option>Nguyễn Văn A</option></select></div>
          <div className="col-md-4"><label className="form-label">Khoản</label><select className="form-select"><option>Membership</option><option>Course</option></select></div>
          <div className="col-md-4"><label className="form-label">Số tiền</label><input className="form-control" placeholder="VD: 1.000.000" /></div>
          <div className="col-md-6"><label className="form-label">Phương thức</label><select className="form-select"><option>Thẻ</option><option>Tiền mặt</option><option>Chuyển khoản</option></select></div>
          <div className="col-md-6"><label className="form-label">Ngày</label><input type="date" className="form-control" /></div>
          <div className="col-12"><button className="btn btn-primary">Lưu</button></div>
        </form>
      </div>

      <div className="card shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0">🧾 Lịch sử thanh toán</h5>
          <button className="btn btn-outline-secondary btn-sm">Xuất báo cáo</button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light"><tr><th>#</th><th>Học viên</th><th>Khoản</th><th>Số tiền</th><th>Ngày</th><th>Phương thức</th></tr></thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td><td>{r.user}</td><td>{r.item}</td><td>{r.amount}</td><td>{r.date}</td><td>{r.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
