import React from "react";

export default function AdminUsers() {
  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "a@example.com", role: "Student", status: "Active" },
    { id: 2, name: "Trần Thị B", email: "b@example.com", role: "Trainer", status: "Active" },
    { id: 3, name: "Admin C", email: "c@example.com", role: "Admin", status: "Active" },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="fw-bold">👥 Quản lý User</h2>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">+ Thêm User</button>
      </div>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light">
              <tr><th>#</th><th>Họ tên</th><th>Email</th><th>Role</th><th>Trạng thái</th><th className="text-end">Hành động</th></tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id}>
                  <td>{i + 1}</td><td>{u.name}</td><td>{u.email}</td><td>{u.role}</td>
                  <td><span className="badge bg-success">{u.status}</span></td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-secondary">Sửa</button>
                      <button className="btn btn-sm btn-outline-danger">Xóa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal thêm/sửa */}
      <div className="modal fade" id="userModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header"><h5 className="modal-title">User</h5><button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6"><label className="form-label">Họ tên</label><input className="form-control" /></div>
                <div className="col-md-6"><label className="form-label">Email</label><input className="form-control" type="email" /></div>
                <div className="col-md-6"><label className="form-label">Role</label><select className="form-select"><option>Student</option><option>Trainer</option><option>Admin</option></select></div>
                <div className="col-md-6"><label className="form-label">Trạng thái</label><select className="form-select"><option>Active</option><option>Inactive</option></select></div>
              </form>
            </div>
            <div className="modal-footer"><button className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button className="btn btn-primary">Lưu</button></div>
          </div>
        </div>
      </div>

    </div>
  );
}
