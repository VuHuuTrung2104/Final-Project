import { useState, useRef } from "react";
import "../../assets/css/public/Courses.css";
import CoursesIMG1 from "../../assets/img/Courses/1.jpg";
import CoursesIMG2 from "../../assets/img/Courses/2.jpg";
import CoursesIMG3 from "../../assets/img/Courses/3.jpg";
import CoursesIMG4 from "../../assets/img/Courses/4.jpg";
import CoursesIMG5 from "../../assets/img/Courses/5.jpg";

function Courses() {
  const [active, setActive] = useState(null);
  const scrollRef = useRef(null);

  const yogaPractices = [
    { id: 1, name: "Hatha Yoga", image: CoursesIMG1, description: "Hatha Yoga tập trung vào các tư thế và kỹ thuật hít thở để mang lại sự cân bằng cho cơ thể và tâm trí." },
    { id: 2, name: "Vinyasa Yoga", image: CoursesIMG3, description: "Vinyasa Yoga nhấn mạnh sự chuyển động liền mạch kết hợp với hơi thở, tạo nên một buổi tập đầy năng động." },
    { id: 3, name: "Yin Yoga", image: CoursesIMG2, description: "Yin Yoga chú trọng vào việc giữ các tư thế lâu hơn, giúp thư giãn sâu và cải thiện độ dẻo dai." },
    { id: 4, name: "Kundalini Yoga", image: CoursesIMG4, description: "Kundalini Yoga kết hợp hơi thở, động tác và thiền định để khai mở nguồn năng lượng tiềm ẩn." },
    { id: 5, name: "Ashtanga Yoga", image: CoursesIMG5, description: "Ashtanga Yoga là chuỗi tư thế có cấu trúc, kết hợp sức mạnh, sự linh hoạt và sức bền." },
    { id: 5, name: "Ashtanga Yoga", image: CoursesIMG5, description: "Ashtanga Yoga là chuỗi tư thế có cấu trúc, kết hợp sức mạnh, sự linh hoạt và sức bền." },
    { id: 5, name: "Ashtanga Yoga", image: CoursesIMG5, description: "Ashtanga Yoga là chuỗi tư thế có cấu trúc, kết hợp sức mạnh, sự linh hoạt và sức bền." },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const itemWidth = clientWidth / 4; // 1 thẻ = 1/4 chiều rộng container
      const scrollTo =
        direction === "left" ? scrollLeft - itemWidth : scrollLeft + itemWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="courses-section py-5">
      <div className="m-5">
        <h3 className="fw-bold text-center mb-4">
          Khám phá các phương pháp luyện tập Yoga
        </h3>

        {/* Nút điều hướng */}
        <div className="d-flex justify-content-end mb-3 gap-3">
          <button className="circle-btn" onClick={() => scroll("left")}>←</button>
          <button className="circle-btn" onClick={() => scroll("right")}>→</button>
        </div>

        {/* Hàng ngang scroll */}
        <div className="scroll-wrapper" ref={scrollRef}>
          {yogaPractices.map((yoga) => (
            <div className="col-2 px-2" key={yoga.id}>
              <div
                className={`course-card ${active === yoga.id ? "active" : ""}`}
                onClick={() => setActive(active === yoga.id ? null : yoga.id)}
              >
                <img src={yoga.image} alt={yoga.name} />

                {/* Caption khói mờ */}
                <div className="course-caption">{yoga.name}</div>

                {/* Overlay khi active */}
                <div className="course-overlay">
                  <h5 className="fw-bold mb-2">{yoga.name}</h5>
                  <p className="small">{yoga.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
