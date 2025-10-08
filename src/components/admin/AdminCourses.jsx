import React from "react";

export default function AdminCourses() {
  const items = [
    { id: 1, name: "Yoga cơ bản", level: "Cơ bản", fee: "1.000.000đ", duration: "60'" },
    { id: 2, name: "Yoga nâng cao", level: "Nâng cao", fee: "2.000.000đ", duration: "60'" },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="fw-bold">📚 Quản lý Course</h2>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#courseModal">+ Thêm Course</button>
      </div>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light"><tr><th>#</th><th>Tên khóa</th><th>Level</th><th>Học phí</th><th>Thời lượng</th><th className="text-end">Hành động</th></tr></thead>
            <tbody>
              {items.map((c, i) => (
                <tr key={c.id}>
                  <td>{i + 1}</td><td>{c.name}</td><td>{c.level}</td><td>{c.fee}</td><td>{c.duration}</td>
                  <td className="text-end">
                    <div className="btn-group"><button className="btn btn-sm btn-outline-secondary">Sửa</button><button className="btn btn-sm btn-outline-danger">Xóa</button></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="courseModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered"><div className="modal-content">
          <div className="modal-header"><h5 className="modal-title">Course</h5><button className="btn-close" data-bs-dismiss="modal"></button></div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-6"><label className="form-label">Tên khóa</label><input className="form-control" /></div>
              <div className="col-md-6"><label className="form-label">Level</label><select className="form-select"><option>Cơ bản</option><option>Nâng cao</option><option>Mọi trình độ</option></select></div>
              <div className="col-md-6"><label className="form-label">Học phí</label><input className="form-control" /></div>
              <div className="col-md-6"><label className="form-label">Thời lượng (phút)</label><input className="form-control" /></div>
              <div className="col-12"><label className="form-label">Mô tả</label><textarea className="form-control" rows="2" /></div>
            </form>
          </div>
          <div className="modal-footer"><button className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button className="btn btn-primary">Lưu</button></div>
        </div></div>
      </div>

    </div>
  );
}
