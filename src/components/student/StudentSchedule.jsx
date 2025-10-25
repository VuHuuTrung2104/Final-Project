import React from "react";
import "../../assets/css/student/StudentSchedule.css";

export default function StudentSchedule() {
  const items = [
    {
      id: 1,
      date: "20/10/2025",
      weekday: "Thứ 2",
      course: "Yoga cơ bản",
      time: "10:00 - 11:00",
      room: "Phòng 1",
      trainer: "HLV Hoa",
    },
    {
      id: 2,
      date: "22/10/2025",
      weekday: "Thứ 4",
      course: "Thiền",
      time: "15:00 - 16:00",
      room: "Phòng Thiền",
      trainer: "HLV Nam",
    },
  ];

  // Xác định ngày hôm nay
  const today = new Date();
  const todayDate = today.getDate(); // ví dụ: 15
  const scheduleDays = [4, 10, 20, 22];

  return (
    <div className="modern-schedule container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Lịch học cá nhân</h2>
          <p className="text-muted mb-0">
            Theo dõi các buổi học bạn đã đăng ký và sắp diễn ra
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          + Đăng ký buổi mới
        </button>
      </div>

      {/* Bộ chọn chế độ xem */}
      <div className="view-switcher d-flex gap-2 mb-3">
        <button className="btn btn-outline-secondary btn-sm rounded-pill">
          Ngày
        </button>
        <button className="btn btn-outline-secondary btn-sm rounded-pill">
          Tuần
        </button>
        <button className="btn btn-primary btn-sm rounded-pill">
          Tháng
        </button>
      </div>

      {/* Lịch học dạng bảng */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Ngày</th>
                <th>Thứ</th>
                <th>Khóa</th>
                <th>Giờ</th>
                <th>Phòng</th>
                <th>Huấn luyện viên</th>
                <th className="text-end">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {items.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.date}</td>
                  <td>{s.weekday}</td>
                  <td>
                    <span className="fw-bold text-success">{s.course}</span>
                  </td>
                  <td>{s.time}</td>
                  <td>{s.room}</td>
                  <td>{s.trainer}</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-danger rounded-pill">
                      Hủy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lịch tổng quan tháng */}
      <div className="calendar-section card shadow-sm border-0 p-3 mt-4">
        <h5 className="fw-bold mb-3">Lịch tổng quan tháng 10/2025</h5>
        <div className="calendar-grid">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => {
            const isToday = d === todayDate;
            const isActive = scheduleDays.includes(d);

            return (
              <div
                key={d}
                className={`calendar-day ${isActive ? "active" : ""} ${
                  isToday ? "today" : ""
                }`}
              >
                {d}
              </div>
            );
          })}
        </div>
        <div className="mt-3 small text-muted">
          <span className="badge bg-success me-2">&nbsp;</span> Ngày có lớp học{" "}
          <span className="badge bg-primary ms-3 me-2">&nbsp;</span> Hôm nay
        </div>
      </div>
    </div>
  );
}
