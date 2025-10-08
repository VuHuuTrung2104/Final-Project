import React from "react";

export default function StudentCourses() {
  const courses = [
    { id: 1, name: "Yoga cơ bản", level: "Cơ bản", fee: "1.000.000đ", desc: "Làm quen tư thế và nhịp thở." },
    { id: 2, name: "Yoga nâng cao", level: "Nâng cao", fee: "2.000.000đ", desc: "Tư thế khó, tăng sức bền." },
    { id: 3, name: "Thiền", level: "Mọi trình độ", fee: "800.000đ", desc: "Thư giãn, tập trung, giảm stress." },
  ];

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">📚 Danh sách khóa học</h2>

      <div className="row g-3">
        {courses.map(c => (
          <div className="col-md-4" key={c.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-1">{c.name}</h5>
                <div className="small text-muted mb-2">Level: {c.level}</div>
                <p className="mb-2">{c.desc}</p>
                <div className="fw-bold text-primary mb-3">{c.fee}</div>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">Xem chi tiết</button>
                  <button className="btn btn-sm btn-success">Đăng ký buổi học</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
