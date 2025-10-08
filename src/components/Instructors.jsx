import { useState, useRef } from "react";
import "../assets/css/Instructors.css";
import lilaImg from "../assets/img/Banner/2.png";

function Instructors() {
  const [active, setActive] = useState(null);
  const scrollRef = useRef(null);

  const instructors = [
    { id: 1, name: "Lila Serenity", role: "HLV Yoga", image: lilaImg },
    { id: 2, name: "Ethan Harmony", role: "HLV Thiền", image: lilaImg },
    { id: 3, name: "Sophia Light", role: "HLV Sức khỏe", image: lilaImg },
    { id: 4, name: "Daniel Zen", role: "HLV Thể lực", image: lilaImg },
    { id: 5, name: "Maya Bliss", role: "HLV Tinh thần", image: lilaImg },
    { id: 6, name: "Noah Peace", role: "HLV Thiền trị liệu", image: lilaImg },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const itemWidth = clientWidth / 3; // mỗi lần trượt = 1 thẻ
      const scrollTo =
        direction === "left" ? scrollLeft - itemWidth : scrollLeft + itemWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="instructors" className="instructors-section py-5">
      <div className="container">
        <h3 className="fw-bold mb-4 text-center">
          Gặp gỡ các Huấn Luyện Viên Chuyên Nghiệp
        </h3>

        {/* Nút điều hướng */}
        <div className="d-flex justify-content-end mb-3">
          <button className="circle-btn" onClick={() => scroll("left")}>
            ←
          </button>
          <button className="circle-btn" onClick={() => scroll("right")}>
            →
          </button>
        </div>

        {/* Slide ngang hiển thị 3 thẻ */}
        <div className="scroll-wrapper" ref={scrollRef}>
          {instructors.map((ins) => (
            <div className="col-3 px-2" key={ins.id}>
              <div
                className={`instructor-card ${active === ins.id ? "active" : ""}`}
                onClick={() => setActive(active === ins.id ? null : ins.id)}
              >
                <img src={ins.image} alt={ins.name} />

                {/* Caption khói mờ */}
                <div className="instructor-caption">{ins.name}</div>

                {/* Overlay khi click */}
                <div className="instructor-overlay">
                  <h6 className="fw-bold mb-1">{ins.name}</h6>
                  <p className="small">{ins.role}</p>
                  <p className="small">
                    Luôn đồng hành cùng học viên trên hành trình tìm kiếm sự cân bằng và sức khỏe.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructors;
