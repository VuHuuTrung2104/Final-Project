import React from "react";

export default function AdminRegistrations() {
  const regs = [
    { id: 1, student: "Nguyễn Văn A", course: "Yoga cơ bản", date: "20/10/2025", status: "Active" },
    { id: 2, student: "Trần Thị B", course: "Thiền", date: "22/10/2025", status: "Cancelled" },
  ];

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">📝 Quản lý Đăng ký học</h2>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light"><tr><th>#</th><th>Học viên</th><th>Khóa</th><th>Ngày</th><th>Trạng thái</th><th className="text-end">Hành động</th></tr></thead>
            <tbody>
              {regs.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td><td>{r.student}</td><td>{r.course}</td><td>{r.date}</td>
                  <td>
                    <span className={`badge ${r.status === "Active" ? "bg-success" : r.status === "Cancelled" ? "bg-danger" : "bg-secondary"}`}>{r.status}</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-success">Completed</button>
                      <button className="btn btn-sm btn-outline-danger">Cancelled</button>
                      <button className="btn btn-sm btn-outline-secondary">Active</button>
                    </div>
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
