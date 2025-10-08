import React from "react";

export default function AdminSchedule() {
  const schedules = [
    { id: 1, date: "20/10/2025", time: "10:00-11:00", course: "Yoga cơ bản", trainer: "HLV Hoa", room: "Phòng 1" },
    { id: 2, date: "22/10/2025", time: "15:00-16:00", course: "Thiền", trainer: "HLV Nam", room: "Phòng Thiền" },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="fw-bold">📅 Quản lý Lịch học</h2>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#schedModal">+ Tạo Lịch</button>
      </div>

      <div className="alert alert-info">Tip: Khi tạo lịch hãy kiểm tra trùng lịch theo (Trainer, Phòng, Khung giờ).</div>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light"><tr><th>#</th><th>Ngày</th><th>Giờ</th><th>Khóa</th><th>Trainer</th><th>Phòng</th><th className="text-end">Hành động</th></tr></thead>
            <tbody>
              {schedules.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td><td>{s.date}</td><td>{s.time}</td><td>{s.course}</td><td>{s.trainer}</td><td>{s.room}</td>
                  <td className="text-end"><div className="btn-group"><button className="btn btn-sm btn-outline-secondary">Sửa</button><button className="btn btn-sm btn-outline-danger">Xóa</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="schedModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered"><div className="modal-content">
          <div className="modal-header"><h5 className="modal-title">Tạo/Sửa Lịch</h5><button className="btn-close" data-bs-dismiss="modal"></button></div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-4"><label className="form-label">Ngày</label><input type="date" className="form-control" /></div>
              <div className="col-md-4"><label className="form-label">Giờ bắt đầu</label><input type="time" className="form-control" /></div>
              <div className="col-md-4"><label className="form-label">Giờ kết thúc</label><input type="time" className="form-control" /></div>
              <div className="col-md-4"><label className="form-label">Course</label><select className="form-select"><option>Yoga cơ bản</option><option>Thiền</option></select></div>
              <div className="col-md-4"><label className="form-label">Trainer</label><select className="form-select"><option>HLV Hoa</option><option>HLV Nam</option></select></div>
              <div className="col-md-4"><label className="form-label">Phòng</label><select className="form-select"><option>Phòng 1</option><option>Phòng Thiền</option></select></div>
              <div className="col-12"><div className="form-check"><input className="form-check-input" type="checkbox" id="chkRepeat"/><label className="form-check-label" htmlFor="chkRepeat">Lặp lại hàng tuần</label></div></div>
            </form>
          </div>
          <div className="modal-footer"><button className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button className="btn btn-primary">Lưu</button></div>
        </div></div>
      </div>

    </div>
  );
}
