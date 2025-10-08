import React from "react";

export default function AdminMemberships() {
  const rows = [
    { id: 1, student: "Nguyễn Văn A", plan: "Gói 1 tháng", expire: "01/11/2025", status: "Active" },
    { id: 2, student: "Trần Thị B", plan: "Gói 3 tháng", expire: "15/12/2025", status: "Active" },
  ];

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">🎫 Membership của Học viên</h2>

      <div className="card shadow-sm p-3">
        <div className="d-flex gap-2 mb-3">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#assignModal">+ Gán gói</button>
          <button className="btn btn-warning">Gia hạn</button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light"><tr><th>#</th><th>Học viên</th><th>Gói</th><th>Hết hạn</th><th>Trạng thái</th><th className="text-end">Hành động</th></tr></thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td><td>{r.student}</td><td>{r.plan}</td><td>{r.expire}</td>
                  <td><span className="badge bg-success">{r.status}</span></td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-warning">Gia hạn</button>
                      <button className="btn btn-sm btn-outline-danger">Hủy</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal gán gói */}
      <div className="modal fade" id="assignModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered"><div className="modal-content">
          <div className="modal-header"><h5 className="modal-title">Gán Membership</h5><button className="btn-close" data-bs-dismiss="modal"></button></div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-6"><label className="form-label">Học viên</label><select className="form-select"><option>Nguyễn Văn A</option></select></div>
              <div className="col-md-6"><label className="form-label">Gói</label><select className="form-select"><option>Gói 1 tháng</option><option>Gói 3 tháng</option></select></div>
              <div className="col-md-6"><label className="form-label">Ngày bắt đầu</label><input type="date" className="form-control" /></div>
              <div className="col-md-6"><label className="form-label">Ngày kết thúc</label><input type="date" className="form-control" /></div>
            </form>
          </div>
          <div className="modal-footer"><button className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button className="btn btn-primary">Lưu</button></div>
        </div></div>
      </div>

    </div>
  );
}
