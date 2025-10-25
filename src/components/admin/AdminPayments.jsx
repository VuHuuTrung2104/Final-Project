import React from "react";
import "../../assets/css/admin/AdminPayments.css";

export default function AdminPayments() {
  const payments = [
    {
      id: 1,
      item: "Membership 1 tháng",
      amount: "1.000.000đ",
      date: "01/09/2025",
      method: "Thẻ",
      user: "Nguyễn Văn A",
    },
    {
      id: 2,
      item: "Yoga nâng cao",
      amount: "2.500.000đ",
      date: "05/09/2025",
      method: "Chuyển khoản",
      user: "Trần Thị B",
    },
  ];

  return (
    <div className="admin-payments container-fluid py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold text-success mb-1">Quản lý Thanh toán</h2>
          <p className="text-muted mb-0">
            Theo dõi, ghi nhận và xuất báo cáo các khoản thanh toán của học viên.
          </p>
        </div>
      </div>

      {/* Form ghi nhận thanh toán */}
      <div className="card shadow-sm border-0 p-4 mb-4">
        <h5 className="fw-semibold text-success mb-3">Ghi nhận thanh toán</h5>
        <form className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Học viên</label>
            <select className="form-select">
              <option>Nguyễn Văn A</option>
              <option>Trần Thị B</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Khoản</label>
            <select className="form-select">
              <option>Membership</option>
              <option>Course</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Số tiền</label>
            <input className="form-control" placeholder="VD: 1.000.000" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phương thức thanh toán</label>
            <select className="form-select">
              <option>Thẻ</option>
              <option>Tiền mặt</option>
              <option>Chuyển khoản</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Ngày thanh toán</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-12 text-end">
            <button className="btn btn-success rounded-pill px-4">
              Lưu thanh toán
            </button>
          </div>
        </form>
      </div>

      {/* Lịch sử thanh toán */}
      <div className="card shadow-sm border-0 p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-semibold text-success mb-0">
            Lịch sử thanh toán
          </h5>
          <button className="btn btn-outline-success btn-sm rounded-pill">
            <i className="bi bi-download me-1"></i> Xuất báo cáo
          </button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Học viên</th>
                <th>Khoản</th>
                <th>Số tiền</th>
                <th>Ngày</th>
                <th>Phương thức</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{p.user}</td>
                  <td className="text-success">{p.item}</td>
                  <td className="fw-bold text-danger">{p.amount}</td>
                  <td>{p.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        p.method === "Thẻ"
                          ? "bg-primary-subtle text-primary border"
                          : p.method === "Chuyển khoản"
                          ? "bg-info-subtle text-info border"
                          : "bg-secondary-subtle text-secondary border"
                      }`}
                    >
                      {p.method}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
