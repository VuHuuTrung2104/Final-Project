// src/pages/trainer/TrainerNotifications.jsx
import React from "react";
import "../../assets/css/trainer/TrainerNotifications.css";

export default function TrainerNotifications() {
  const notifications = [
    {
      id: 1,
      type: "📅",
      title: "Lịch dạy Yoga Nâng cao đổi ngày",
      content: "Buổi Yoga Nâng cao ngày 15/10 được dời sang 16/10/2025.",
      time: "Cập nhật: 10:30 - 14/10/2025",
      status: "new",
    },
    {
      id: 2,
      type: "💰",
      title: "Học viên mới đăng ký",
      content: 'Học viên "Nguyễn Thị Lan" đã đăng ký lớp Thiền căn bản.',
      time: "08:45 - 14/10/2025",
      status: "new",
    },
    {
      id: 3,
      type: "🎉",
      title: "Ưu đãi đặc biệt",
      content: "Giảm giá 20% cho học viên khi giới thiệu bạn mới.",
      time: "09:00 - 10/10/2025",
      status: "read",
    },
  ];

  return (
    <div className="trainer-notifications container-fluid py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">🔔 Thông báo từ Admin</h2>
          <p className="text-muted mb-0">
            Cập nhật thông tin, thay đổi lịch và thông báo quan trọng cho huấn luyện viên 📢
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          ✅ Đánh dấu tất cả đã đọc
        </button>
      </div>

      {/* Danh sách thông báo */}
      <div className="card shadow-sm border-0 p-4">
        <ul className="list-group list-group-flush">
          {notifications.map((n) => (
            <li
              key={n.id}
              className={`list-group-item py-3 px-2 border-0 mb-2 rounded ${
                n.status === "new" ? "bg-light-green shadow-sm" : "bg-white"
              }`}
            >
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="fw-bold mb-1">
                    {n.type} {n.title}
                  </h6>
                  <p className="mb-1 text-muted small">{n.content}</p>
                  <span className="text-secondary small">{n.time}</span>
                </div>
                {n.status === "new" && (
                  <span className="badge bg-success-subtle text-success border small">
                    Mới
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
