import { useState } from "react";
import "../assets/css/Courses.css";

// Import ảnh
import hathaImg from "../assets/img/Banner/2.png";

function Courses() {
  const [active, setActive] = useState(null);

  const yogaPractices = [
    {
      id: 1,
      name: "Hatha Yoga",
      image: hathaImg,
      description:
        "Hatha Yoga tập trung vào các tư thế và kỹ thuật hít thở để mang lại sự cân bằng cho cơ thể và tâm trí."
    },
    {
      id: 2,
      name: "Vinyasa Yoga",
      image: hathaImg,
      description:
        "Vinyasa Yoga nhấn mạnh sự chuyển động liền mạch kết hợp với hơi thở, tạo nên một buổi tập đầy năng động."
    },
    {
      id: 3,
      name: "Yin Yoga",
      image: hathaImg,
      description:
        "Yin Yoga chú trọng vào việc giữ các tư thế lâu hơn, giúp thư giãn sâu và cải thiện độ dẻo dai."
    },
    {
      id: 4,
      name: "Kundalini Yoga",
      image: hathaImg,
      description:
        "Kundalini Yoga kết hợp hơi thở, động tác và thiền định để khai mở nguồn năng lượng tiềm ẩn."
    },
    {
      id: 5,
      name: "Ashtanga Yoga",
      image: hathaImg,
      description:
        "Ashtanga Yoga là chuỗi tư thế có cấu trúc, kết hợp sức mạnh, sự linh hoạt và sức bền."
    }
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="row g-4">
          {yogaPractices.map((yoga) => (
            <div className="col-md-4" key={yoga.id}>
              {active === yoga.id ? (
                <div
                  className="course-card-active card h-100 d-flex justify-content-center p-4"
                  onClick={() => setActive(null)}
                >
                  <h3 className="fw-bold">{yoga.name}</h3>
                  <p className="mt-3">{yoga.description}</p>
                </div>
              ) : (
                <div
                  className="course-card card h-100 border-0 shadow-sm"
                  onClick={() => setActive(yoga.id)}
                >
                  <img src={yoga.image} className="card-img" alt={yoga.name} />
                  <div className="card-img-overlay d-flex align-items-end p-3">
                    <h5 className="text-white fw-bold">{yoga.name}</h5>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
