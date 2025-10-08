import React from "react";

export default function TrainerClass() {
  const students = [
    { id: 1, name: "Nguyễn Văn A", status: "Đăng ký" },
    { id: 2, name: "Trần Thị B", status: "Đăng ký" },
    { id: 3, name: "Lê Văn C", status: "Đăng ký" },
  ];

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">👥 Danh sách học viên trong lớp</h2>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light">
              <tr><th>#</th><th>Học viên</th><th>Trạng thái</th><th>Điểm danh</th></tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td><span className="badge bg-success">{s.status}</span></td>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id={`chk-${s.id}`} />
                      <label className="form-check-label" htmlFor={`chk-${s.id}`}>Có mặt</label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-end mt-3">
          <button className="btn btn-primary">Lưu điểm danh</button>
        </div>
      </div>

    </div>
  );
}
