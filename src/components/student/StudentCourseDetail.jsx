import React from "react";
import "../../assets/css/student/StudentCourseDetail.css";

export default function StudentCourseDetail() {
  // sau này có thể lấy từ useParams hoặc API
  const course = {
    name: "Yoga cơ bản",
    level: "Cơ bản",
    fee: "1.000.000đ",
    desc: "Khóa nhập môn giúp học viên làm quen với các tư thế cơ bản, nhịp thở và sự linh hoạt cơ thể. Phù hợp cho người mới bắt đầu hoặc muốn luyện lại nền tảng.",
    img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1000&q=80",
    duration: "60 phút/buổi",
    instructor: "Lila Serenity",
    sessions: [
      { id: 1, date: "20/10/2025", time: "10:00 - 11:00", room: "Phòng 1" },
      { id: 2, date: "22/10/2025", time: "15:00 - 16:00", room: "Phòng 2" },
    ],
  };

  return (
    <div className="modern-course-detail container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">{course.name}</h2>
          <p className="text-muted mb-0">
            Cùng khám phá hành trình cân bằng thân - tâm - trí.
          </p>
        </div>
        <button className="btn btn-success rounded-pill px-4">
          Đăng ký khóa học
        </button>
      </div>

      <div className="row g-4">
        {/* Trái: ảnh + mô tả */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 overflow-hidden">
            <img src={course.img} alt={course.name} className="course-banner" />
            <div className="card-body p-4">
              <h5 className="fw-bold mb-2">Mô tả khóa học</h5>
              <p className="text-muted mb-3">{course.desc}</p>

              <div className="d-flex flex-wrap gap-3 mb-3">
                <span className="badge bg-light text-dark border">
                  Trình độ: {course.level}
                </span>
                <span className="badge bg-light text-dark border">
                  Thời lượng: {course.duration}
                </span>
                <span className="badge bg-light text-dark border">
                  Học phí: {course.fee}
                </span>
              </div>

              <div className="instructor-box d-flex align-items-center p-3 mt-3 rounded">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/706/706830.png"
                  alt="Instructor"
                  className="instructor-avatar me-3"
                />
                <div>
                  <h6 className="fw-bold mb-0">{course.instructor}</h6>
                  <small className="text-muted">Huấn luyện viên chính</small>
                </div>
              </div>
            </div>
          </div>

          {/* Lịch học */}
          <div className="card shadow-sm p-3 mt-4">
            <h5 className="fw-bold mb-3">Lịch học sắp tới</h5>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Ngày</th>
                    <th>Giờ</th>
                    <th>Phòng</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {course.sessions.map((s, i) => (
                    <tr key={s.id}>
                      <td>{i + 1}</td>
                      <td>{s.date}</td>
                      <td>{s.time}</td>
                      <td>{s.room}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success rounded-pill">
                          Đăng ký
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Phải: thông tin nhanh */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-3 bg-white border-0 rounded">
            <h6 className="fw-bold mb-2">Thông tin nhanh</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between px-0">
                <span>Trình độ</span> <b>{course.level}</b>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0">
                <span>Học phí</span> <b>{course.fee}</b>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0">
                <span>Thời lượng</span> <b>{course.duration}</b>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0">
                <span>Huấn luyện viên</span> <b>{course.instructor}</b>
              </li>
            </ul>
          </div>

          <div className="quote-box mt-4 p-3 text-center rounded shadow-sm">
            <p className="mb-2 text-muted">
              “Yoga là hành trình hướng vào bên trong, nơi bạn tìm thấy bình yên.”
            </p>
            <small className="text-success">– Harmonia Yoga Club</small>
          </div>
        </div>
      </div>
    </div>
  );
}
