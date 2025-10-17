import React from "react";
import "../../assets/css/trainer/TrainerDashboard.css";

export default function TrainerDashboard() {
  const trainer = {
    name: "Trần Văn C",
    email: "tranvanc@example.com",
    phone: "0909 456 789",
    specialty: "Yoga trị liệu, Thiền",
    experience: "5 năm giảng dạy",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140058.png",
    totalSessions: 120,
    nextSession: "Yoga nâng cao - 15:00 22/10",
  };

  const schedule = [
    { date: "20/10", course: "Yoga cơ bản", time: "10:00-11:00", room: "Phòng 1", students: 12 },
    { date: "22/10", course: "Thiền", time: "15:00-16:00", room: "Phòng Thiền", students: 9 },
    { date: "24/10", course: "Yoga nâng cao", time: "18:00-19:00", room: "Phòng 2", students: 15 },
  ];

  return (
    <div className="trainer-dashboard container-fluid py-4">
      <h2 className="fw-bold mb-4">🧘 Bảng điều khiển Huấn luyện viên</h2>

      <div className="row g-4">
        {/* Cột trái: Hồ sơ + thống kê */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4 text-center">
            <img
              src={trainer.avatar}
              alt="Trainer Avatar"
              className="trainer-avatar mb-3"
            />
            <h5 className="fw-bold">{trainer.name}</h5>
            <p className="text-muted small mb-3">{trainer.specialty}</p>
            <ul className="list-group list-group-flush text-start small mb-3">
              <li className="list-group-item px-0 border-0 d-flex justify-content-between">
                <span>Email:</span>
                <b>{trainer.email}</b>
              </li>
              <li className="list-group-item px-0 border-0 d-flex justify-content-between">
                <span>Điện thoại:</span>
                <b>{trainer.phone}</b>
              </li>
              <li className="list-group-item px-0 border-0 d-flex justify-content-between">
                <span>Kinh nghiệm:</span>
                <b>{trainer.experience}</b>
              </li>
            </ul>
            <button className="btn btn-outline-success rounded-pill w-100">
              ✏️ Chỉnh sửa hồ sơ
            </button>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-12">
              <div className="card shadow-sm text-center p-3">
                <h6>Tổng số buổi đã dạy</h6>
                <p className="fw-bold text-success">
                  {trainer.totalSessions} buổi
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="card shadow-sm text-center p-3">
                <h6>Buổi dạy sắp tới</h6>
                <p className="fw-bold text-primary">{trainer.nextSession}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cột phải: Lịch dạy */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="fw-bold mb-3">📅 Lịch dạy trong tuần</h5>
            <div className="table-responsive">
              <table className="table align-middle table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Ngày</th>
                    <th>Khóa</th>
                    <th>Giờ</th>
                    <th>Phòng</th>
                    <th>Học viên</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((s, i) => (
                    <tr key={i}>
                      <td>{s.date}</td>
                      <td className="fw-bold text-success">{s.course}</td>
                      <td>{s.time}</td>
                      <td>{s.room}</td>
                      <td>{s.students}</td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-outline-primary rounded-pill">
                          Xem chi tiết
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
