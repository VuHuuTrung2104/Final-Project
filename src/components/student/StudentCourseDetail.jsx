import React from "react";

export default function StudentCourseDetail() {
  // sau này lấy từ params/ API
  const course = {
    name: "Yoga cơ bản",
    level: "Cơ bản",
    fee: "1.000.000đ",
    desc: "Khóa nhập môn giúp làm quen tư thế căn bản, nhịp thở và sự linh hoạt.",
    sessions: [
      { id: 1, date: "20/10/2025", time: "10:00-11:00", room: "Phòng 1" },
      { id: 2, date: "22/10/2025", time: "15:00-16:00", room: "Phòng 2" },
    ],
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">📘 {course.name}</h2>
        <button className="btn btn-success">Đăng ký buổi học</button>
      </div>

      <div className="row g-3">
        <div className="col-md-8">
          <div className="card shadow-sm p-3">
            <h5 className="mb-1">Mô tả</h5>
            <p className="mb-2">{course.desc}</p>
            <div className="small text-muted">Level: {course.level}</div>
            <div className="fw-bold text-primary mt-2">Học phí: {course.fee}</div>
          </div>

          <div className="card shadow-sm p-3 mt-3">
            <h5 className="mb-3">Buổi học sắp tới</h5>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr><th>#</th><th>Ngày</th><th>Giờ</th><th>Phòng</th><th></th></tr>
                </thead>
                <tbody>
                  {course.sessions.map((s, i) => (
                    <tr key={s.id}>
                      <td>{i + 1}</td><td>{s.date}</td><td>{s.time}</td><td>{s.room}</td>
                      <td><button className="btn btn-sm btn-outline-success">Đăng ký</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h6 className="mb-2">Thông tin nhanh</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item px-0 d-flex justify-content-between"><span>Trình độ</span><b>{course.level}</b></li>
              <li className="list-group-item px-0 d-flex justify-content-between"><span>Học phí</span><b>{course.fee}</b></li>
              <li className="list-group-item px-0 d-flex justify-content-between"><span>Thời lượng</span><b>60 phút/buổi</b></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
