import "../../assets/css/public/Levels.css";
import LevelsIMG from "../../assets/img/Levels/1.jpg";

function Levels() {
    const features = [
        {
            id: 1,
            title: "Lịch Trình Cá Nhân Hóa",
            text: "Tùy chỉnh kế hoạch tập luyện phù hợp với bạn.",
            icon: "bi-calendar-check"
        },
        {
            id: 2,
            title: "Tiện Nghi & Hiện Đại",
            text: "Phòng tập được trang bị thảm yoga, gương, hệ thống ánh sáng và âm nhạc, mang lại không gian thoải mái và chuyên nghiệp.",
            icon: "bi-phone"
        },
        {
            id: 3,
            title: "Huấn Luyện Viên Chuyên Nghiệp",
            text: "Diễn đàn chia sẻ kinh nghiệm, thành tựu và lớp học trực tuyến định kỳ.",
            icon: "bi-people"
        },
        {
            id: 4,
            title: "Linh Hoạt Trên Hành Trình",
            text: "Blog với các mẹo về sức khỏe, dinh dưỡng và luyện tập yoga.",
            icon: "bi-heart"
        }
    ];

    return (
        <section className="levels-section" style={{
            backgroundImage: `url(${LevelsIMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="levels-overlay">
                <div className="container text-start">
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <h2 className="display-5 fw-bold">30+ LỚP YOGA HÀNG TUẦN</h2>
                            <p className="lead">
                                Lịch tập nhiều khung giờ, Đa dạng các loại hình Yoga và cấp độ Giảng dạy bởi Yogi Ấn Độ và Việt Nam.
                            </p>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-md-end">
                            <a href="#signup" className="btn btn-outline-light btn-lg">Thử Miễn Phí ngay</a>
                        </div>
                    </div>

                    <div className="row g-4 mt-4">
                        {features.map((f) => (
                            <div className="col-md-3" key={f.id}>
                                <div className="levels-card h-100">
                                    <i className={`bi ${f.icon} fs-1 mb-3`}></i>
                                    <h5 className="fw-bold">{f.title}</h5>
                                    <p>{f.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Levels;
