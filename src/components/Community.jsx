import { useState } from "react";
import "../assets/css/Community.css";
import liliaImg from "../assets/img/Banner/2.png";


function Community() {
    const [active, setActive] = useState(null);

    const people = [
        {
            id: 1,
            name: "Lilia R.",
            role: "Quản lý Marketing",
            image: liliaImg,
            text: "Cùng nhau chúng ta sẽ tạo ra con đường dẫn đến sự hài hòa riêng của bạn, nơi mỗi chuyển động và hơi thở đều mang lại sự bình yên."
        },
        {
            id: 2,
            name: "Sophia",
            role: "Học viên Yoga",
            image: liliaImg,
            text: "Yoga giúp tôi cải thiện sự tập trung và cân bằng cả về cơ thể lẫn tinh thần."
        },
        {
            id: 3,
            name: "Anna",
            role: "Người yêu thích sức khỏe",
            image: liliaImg,
            text: "Tập yoga hằng ngày đã thay đổi năng lượng và lối sống tổng thể của tôi."
        }
    ];

    return (
        <section className="community-section">
            <div className="container text-center mb-5">
                <h2 className="fw-bold text-success">Cộng đồng Yoga Tràn Đầy Sức Sống</h2>
                <p>
                    Khám phá phép màu của yoga – từ thư giãn cho đến cân bằng tinh thần.
                    Hãy bắt đầu hành trình của bạn ngay hôm nay – cơ thể và tâm trí của bạn sẽ biết ơn điều đó!
                </p>
            </div>

            <div className="container">
                <div className="row g-4">
                    {people.map((p) => (
                        <div className="col-md-4" key={p.id}>
                            <div
                                className={`community-card ${active === p.id ? "active" : ""}`}
                                onClick={() => setActive(active === p.id ? null : p.id)}
                            >
                                <img src={p.image} alt={p.name} className="img-fluid rounded-4" />

                                {/* Phần chữ nằm trong box nâu */}
                                <div className="info-box">
                                    <h6 className="fw-bold mb-1">{p.name}</h6>
                                    <p className="small mb-1">{p.role}</p>
                                    <p className="small">{p.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Community;
