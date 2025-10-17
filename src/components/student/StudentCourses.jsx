import React from "react";
import "../../assets/css/student/StudentCourses.css";

export default function StudentCourses() {
  const courses = [
    {
      id: 1,
      name: "Yoga cơ bản",
      level: "Cơ bản",
      fee: "1.000.000đ",
      desc: "Làm quen với tư thế, nhịp thở và sự cân bằng cơ thể.",
      img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Yoga nâng cao",
      level: "Nâng cao",
      fee: "2.000.000đ",
      desc: "Thử thách bản thân với những tư thế khó, tăng sức bền và sự tập trung.",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Thiền",
      level: "Mọi trình độ",
      fee: "800.000đ",
      desc: "Thư giãn tâm trí, giảm căng thẳng và cải thiện sự tập trung trong cuộc sống.",
      img: "https://images.unsplash.com/photo-1603988363607-e1e4a66962e1?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="modern-courses container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">📚 Khóa học Yoga</h2>
          <p className="text-muted mb-0">
            Chọn khóa học phù hợp với cấp độ và mục tiêu luyện tập của bạn 🧘‍♀️
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-3">
          + Đăng ký mới
        </button>
      </div>

      <div className="row g-4">
        {courses.map((c) => (
          <div className="col-md-4" key={c.id}>
            <div className="card course-card h-100 shadow-sm">
              <div className="card-img-wrapper">
                <img src={c.img} alt={c.name} className="card-img-top" />
                <span className="course-level badge bg-light text-dark border">
                  {c.level}
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{c.name}</h5>
                <p className="card-text small text-muted">{c.desc}</p>
                <div className="fw-bold text-primary mb-3">{c.fee}</div>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary rounded-pill flex-grow-1">
                    Xem chi tiết
                  </button>
                  <button className="btn btn-sm btn-success rounded-pill flex-grow-1">
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
