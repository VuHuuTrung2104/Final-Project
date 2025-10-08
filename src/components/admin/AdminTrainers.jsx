import React from "react";

export default function AdminTrainers() {
  const trainers = [
    { id: 1, name: "HLV Hoa", phone: "0901 234 567", email: "hoa@studio.com", specialty: "Yoga cơ bản" },
    { id: 2, name: "HLV Nam", phone: "0902 345 678", email: "nam@studio.com", specialty: "Thiền" },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="fw-bold">🧑‍🏫 Quản lý Trainer</h2>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#trainerModal">+ Thêm Trainer</button>
      </div>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light"><tr><th>#</th><th>Họ tên</th><th>Chuyên môn</th><th>Điện thoại</th><th>Email</th><th className="text-end">Hành động</th></tr></thead>
            <tbody>
              {trainers.map((t, i) => (
                <tr key={t.id}>
                  <td>{i + 1}</td><td>{t.name}</td><td>{t.specialty}</td><td>{t.phone}</td><td>{t.email}</td>
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
      <div className="modal fade" id="trainerModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered"><div className="modal-content">
          <div className="modal-header"><h5 className="modal-title">Trainer</h5><button className="btn-close" data-bs-dismiss="modal"></button></div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-6"><label className="form-label">Họ tên</label><input className="form-control" /></div>
              <div className="col-md-6"><label className="form-label">Chuyên môn</label><input className="form-control" /></div>
              <div className="col-md-6"><label className="form-label">Điện thoại</label><input className="form-control" /></div>
              <div className="col-md-6"><label className="form-label">Email</label><input className="form-control" type="email" /></div>
              <div className="col-12"><label className="form-label">Ghi chú</label><textarea className="form-control" rows="2" /></div>
            </form>
          </div>
          <div className="modal-footer"><button className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button className="btn btn-primary">Lưu</button></div>
        </div></div>
      </div>
    </div>
  );
}
