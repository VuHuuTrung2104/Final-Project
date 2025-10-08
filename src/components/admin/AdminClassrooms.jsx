import React from "react";

export default function AdminClassrooms() {
  const rooms = [
    { id: 1, name: "Phòng 1", capacity: 15, note: "Phòng tập chính" },
    { id: 2, name: "Phòng Thiền", capacity: 12, note: "Không gian yên tĩnh" },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="fw-bold">🏫 Quản lý Phòng học</h2>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#roomModal">+ Thêm Phòng</button>
      </div>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light"><tr><th>#</th><th>Tên phòng</th><th>Sức chứa</th><th>Ghi chú</th><th className="text-end">Hành động</th></tr></thead>
            <tbody>
              {rooms.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td><td>{r.name}</td><td>{r.capacity}</td><td>{r.note}</td>
                  <td className="text-end"><div className="btn-group"><button className="btn btn-sm btn-outline-secondary">Sửa</button><button className="btn btn-sm btn-outline-danger">Xóa</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="roomModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered"><div className="modal-content">
          <div className="modal-header"><h5 className="modal-title">Phòng học</h5><button className="btn-close" data-bs-dismiss="modal"></button></div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-6"><label className="form-label">Tên phòng</label><input className="form-control" /></div>
              <div className="col-md-6"><label className="form-label">Sức chứa</label><input className="form-control" type="number" /></div>
              <div className="col-12"><label className="form-label">Ghi chú</label><textarea className="form-control" rows="2" /></div>
            </form>
          </div>
          <div className="modal-footer"><button className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button className="btn btn-primary">Lưu</button></div>
        </div></div>
      </div>
    </div>
  );
}
