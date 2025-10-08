import React from "react";

export default function AdminMembershipPlans() {
  const plans = [
    { id: 1, name: "Gói 1 tháng", price: "1.000.000đ", desc: "Không giới hạn lớp thường." },
    { id: 2, name: "Gói 3 tháng", price: "2.500.000đ", desc: "Tiết kiệm 20%." },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="fw-bold">🎟️ Quản lý Gói tập</h2>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#planModal">+ Thêm Gói</button>
      </div>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light"><tr><th>#</th><th>Tên gói</th><th>Giá</th><th>Mô tả</th><th className="text-end">Hành động</th></tr></thead>
            <tbody>
              {plans.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td><td>{p.name}</td><td>{p.price}</td><td>{p.desc}</td>
                  <td className="text-end"><div className="btn-group"><button className="btn btn-sm btn-outline-secondary">Sửa</button><button className="btn btn-sm btn-outline-danger">Xóa</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="planModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered"><div className="modal-content">
          <div className="modal-header"><h5 className="modal-title">Gói tập</h5><button className="btn-close" data-bs-dismiss="modal"></button></div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-6"><label className="form-label">Tên gói</label><input className="form-control" /></div>
              <div className="col-md-6"><label className="form-label">Giá</label><input className="form-control" /></div>
              <div className="col-12"><label className="form-label">Mô tả</label><textarea className="form-control" rows="2" /></div>
            </form>
          </div>
          <div className="modal-footer"><button className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button className="btn btn-primary">Lưu</button></div>
        </div></div>
      </div>

    </div>
  );
}
