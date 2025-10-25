import React from "react";
import "../../assets/css/student/StudentDashboard.css";

export default function StudentDashboard() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const scheduleDays = [4, 10, 15, 20, 22, 27];

  const student = {
    name: "Lilia Serenity",
    id: "123456",
    age: 25,
    email: "lilia.serenity@example.com",
    phone: "0909 123 456",
    level: "Beginner",
    joinDate: "01/07/2024",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    progress: 75,
    completedSessions: 15,
    totalSessions: 20,
    totalTime: "17h 27m",
  };

  const percent = Math.round(
    (student.completedSessions / student.totalSessions) * 100
  );

  return (
    <div className="dashboard-full d-flex gap-4 m-5">
      {/* ==== TRÁI ==== */}
      <div className="dashboard-left flex-grow-1">
        {/* Header */}
        <div className="welcome-box mb-4">
          <h3 className="fw-bold">
            Chào mừng, <span className="text-success">{student.name}</span>
          </h3>
          <p className="text-muted">
            Theo dõi tiến trình luyện tập và sức khỏe của bạn 🪷
          </p>
        </div>

        {/* Hồ sơ & Tiến trình */}
        <div className="card shadow-sm border-0 p-4 mb-4">
          <div className="row g-4 align-items-center">
            <div className="col-md-4 text-center">
              <img
                src={student.avatar}
                alt="avatar"
                className="avatar-lg shadow-sm mb-3"
              />
              <h5 className="fw-bold mb-1">{student.name}</h5>
              <span className="badge bg-light text-secondary border">
                {student.level}
              </span>
              <p className="text-muted small mt-2 mb-0">
                ID: {student.id} | {student.age} tuổi
              </p>
            </div>

            <div className="col-md-8">
              <ul className="list-group list-group-flush small">
                <li className="list-group-item d-flex justify-content-between border-0 px-0">
                  <span>Email</span>
                  <b>{student.email}</b>
                </li>
                <li className="list-group-item d-flex justify-content-between border-0 px-0">
                  <span>Điện thoại</span>
                  <b>{student.phone}</b>
                </li>
                <li className="list-group-item d-flex justify-content-between border-0 px-0">
                  <span>Ngày tham gia</span>
                  <b>{student.joinDate}</b>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tiến trình học tập */}
        <div className="card shadow-sm border-0 p-4 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">📈 Tiến trình học tập</h5>
            <span className="badge bg-light text-success border">
              {percent}% hoàn thành
            </span>
          </div>

          <p className="text-muted mb-2">
            Bạn đã tham gia <b>{student.completedSessions}</b> /{" "}
            <b>{student.totalSessions}</b> buổi.
          </p>

          <div className="progress rounded-pill" style={{ height: "20px" }}>
            <div
              className="progress-bar bg-success text-center fw-bold"
              style={{ width: `${percent}%` }}
            >
              {percent}%
            </div>
          </div>

          <div className="d-flex justify-content-between mt-3 small text-muted">
            <span>🎯 Cấp độ hiện tại: <b>{student.level}</b></span>
            <span>⏱️ Tổng thời gian: <b>{student.totalTime}</b></span>
          </div>
        </div>

        {/* Biểu đồ mô phỏng */}
        <div className="card shadow-sm border-0 p-4">
          <h5 className="fw-bold mb-3">📊 Biểu đồ tiến trình luyện tập</h5>
          <div className="chart-placeholder text-center text-muted py-5">
            <i className="bi bi-graph-up"></i>
            <p className="mt-2">Biểu đồ luyện tập sẽ hiển thị tại đây (demo)</p>
          </div>
        </div>
      </div>

      {/* ==== PHẢI ==== */}
      <div className="dashboard-right">
        <div className="right-panel p-4 shadow-sm rounded bg-white">
          <h6 className="fw-bold mb-3">📅 Lịch tháng 10/2025</h6>
          <div className="calendar-grid mb-3">
            {days.map((d) => (
              <div
                key={d}
                className={`calendar-day ${
                  scheduleDays.includes(d) ? "active" : ""
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          <h6 className="fw-bold mt-4 mb-2">🧘‍♀️ Lịch học sắp tới</h6>
          <ul className="list-group small">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Yoga cơ bản <span className="text-muted">10:00 - 11:00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Thiền hơi thở <span className="text-muted">15:00 - 16:00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Yin Yoga <span className="text-muted">18:00 - 19:00</span>
            </li>
          </ul>

          <div className="event-box mt-4 p-3 rounded shadow-sm text-center">
            <h6 className="fw-bold mb-2">🌸 Workshop sắp tới</h6>
            <p className="small text-muted mb-3">
              Tham gia buổi “Yoga & Thiền sâu” để cân bằng năng lượng.
            </p>
            <button className="btn btn-success btn-sm rounded-pill">
              Tham gia ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
