import "../assets/css/Instructors.css";
import lilaImg from "../assets/img/Banner/2.png";

function Instructors() {
  const instructors = [
    { id: 1, name: "Lila Serenity", image: lilaImg },
    { id: 2, name: "Ethan Harmony", image: lilaImg },
    { id: 3, name: "Sophia Light", image: lilaImg },
  ];

  return (
    <section id="instructors" className="instructors-section">
      <div className="container">
        <div className="row g-4">
          {/* Cột giới thiệu */}
          <div className="col-md-3">
            <div className="card h-100 text-white p-4 intro-card">
              <h3 className="fw-bold">Gặp gỡ các Huấn Luyện Viên Chuyên Nghiệp</h3>
              <p className="mt-3">
                Cùng nhau chúng ta sẽ tạo ra con đường dẫn đến sự hài hòa riêng của bạn,
                nơi mỗi chuyển động và hơi thở đưa bạn đến gần hơn với sự bình yên.
              </p>
            </div>
          </div>

          {/* Các huấn luyện viên */}
          {instructors.map((ins) => (
            <div className="col-md-3" key={ins.id}>
              <div className="instructor-card">
                <img src={ins.image} alt={ins.name} />
                <div className="instructor-overlay">
                  {ins.name}
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
