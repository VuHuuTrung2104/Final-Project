import React from "react";

export default function TrainerSchedule() {
  const sessions = [
    { id: 1, date: "20/10/2025", course: "Yoga cơ bản", time: "10:00-11:00", room: "Phòng 1", status: "Scheduled" },
    { id: 2, date: "22/10/2025", course: "Thiền", time: "15:00-16:00", room: "Phòng Thiền", status: "Scheduled" },
  ];

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">📅 Lịch dạy</h2>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr><th>#</th><th>Ngày</th><th>Khóa</th><th>Giờ</th><th>Phòng</th><th>Trạng thái</th><th></th></tr>
            </thead>
            <tbody>
              {sessions.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.date}</td>
                  <td>{s.course}</td>
                  <td>{s.time}</td>
                  <td>{s.room}</td>
                  <td>
                    <span className="badge bg-secondary">{s.status}</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-success">Completed</button>
                      <button className="btn btn-sm btn-danger">Cancelled</button>
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
