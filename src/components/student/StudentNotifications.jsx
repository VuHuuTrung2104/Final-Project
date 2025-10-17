import React from "react";
import "../../assets/css/student/StudentNotifications.css";

export default function StudentNotifications() {
  const notifications = [
    {
      id: 1,
      icon: "📅",
      message: "Lớp Yoga nâng cao ngày 25/10 dời sang 26/10.",
      time: "2 giờ trước",
      type: "schedule",
    },
    {
      id: 2,
      icon: "🎉",
      message: "Giảm 20% khi đăng ký gói 3 tháng trước 30/10.",
      time: "Hôm nay",
      type: "promo",
    },
    {
      id: 3,
      icon: "🧘‍♀️",
      message: "Bạn đã hoàn thành 10/20 buổi trong khóa Yoga cơ bản!",
      time: "Hôm qua",
      type: "progress",
    },
  ];

  return (
    <div className="student-notifications card shadow-sm border-0 p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">🔔 Thông báo</h5>
        <button className="btn btn-outline-success btn-sm rounded-pill">
          Đánh dấu đã đọc
        </button>
      </div>

      <ul className="list-group list-group-flush">
        {notifications.map((n) => (
          <li
            key={n.id}
            className={`list-group-item d-flex align-items-start gap-3 border-0 mb-2 notification-item ${n.type}`}
          >
            <span className="fs-4">{n.icon}</span>
            <div className="flex-grow-1">
              <p className="mb-1">{n.message}</p>
              <small className="text-muted">{n.time}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
