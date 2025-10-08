import { useState, useRef } from "react";
import "../assets/css/Instructors.css";
import HLV1 from "../assets/img/HLV/1.jpg";
import HLV2 from "../assets/img/HLV/2.jpg";
import HLV3 from "../assets/img/HLV/3.jpg";
import HLV4 from "../assets/img/HLV/4.jpg";
import HLV5 from "../assets/img/HLV/5.jpg";

function Instructors() {
  const [active, setActive] = useState(null);
  const scrollRef = useRef(null);

  const instructors = [
    { id: 1, name: "Lila Serenity", role: "HLV Yoga", image: HLV1 },
    { id: 2, name: "Ethan Harmony", role: "HLV Thiền", image: HLV2 },
    { id: 3, name: "Sophia Light", role: "HLV Sức khỏe", image: HLV3 },
    { id: 4, name: "Daniel Zen", role: "HLV Thể lực", image: HLV4 },
    { id: 5, name: "Maya Bliss", role: "HLV Tinh thần", image: HLV5 },
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
      <div className="m-5">
        <h3 className="fw-bold mb-4  text-center">
          Gặp gỡ các Huấn Luyện Viên Chuyên Nghiệp
        </h3>

        {/* Nút điều hướng */}
        <div className="d-flex justify-content-end mb-3 gap-3">
          <button className="circle-btn" onClick={() => scroll("left")}>
            ←
          </button>
          <button className="circle-btn" onClick={() => scroll("right")}>
            →
          </button>
        </div>

        <div className="scroll-wrapper" ref={scrollRef}>
          {instructors.map((ins) => (
            <div className="col-2 px-2" key={ins.id}>
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
