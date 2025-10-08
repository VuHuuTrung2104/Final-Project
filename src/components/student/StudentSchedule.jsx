import React from "react";

export default function StudentSchedule() {
  const items = [
    { id: 1, date: "20/10/2025", weekday: "Thứ 2", course: "Yoga cơ bản", time: "10:00-11:00", room: "Phòng 1", trainer: "HLV Hoa" },
    { id: 2, date: "22/10/2025", weekday: "Thứ 4", course: "Thiền", time: "15:00-16:00", room: "Phòng Thiền", trainer: "HLV Nam" },
  ];

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">📅 Lịch học cá nhân</h2>

      {/* View switcher giả lập */}
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-outline-secondary btn-sm">Ngày</button>
        <button className="btn btn-outline-secondary btn-sm">Tuần</button>
        <button className="btn btn-primary btn-sm">Tháng</button>
      </div>

      <div className="card shadow-sm p-3">
        <div className="table-responsive">
          <table className="table table-bordered align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th><th>Ngày</th><th>Thứ</th><th>Khóa</th><th>Giờ</th><th>Phòng</th><th>HLV</th><th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.date}</td>
                  <td>{s.weekday}</td>
                  <td>{s.course}</td>
                  <td>{s.time}</td>
                  <td>{s.room}</td>
                  <td>{s.trainer}</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-danger">Hủy</button>
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
