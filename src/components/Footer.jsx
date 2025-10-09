import { useEffect, useState } from "react";
import "../assets/css/Footer.css";

function Footer() {
    const [showButton, setShowButton] = useState(false);

    // Hiện nút khi cuộn xuống
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hàm cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <footer className="footer-section">
                <div className="container py-5">
                    <div className="row">
                        {/* Logo + Mạng xã hội */}
                        <div className="col-md-3 mb-4">
                            <div className="d-flex align-items-center mb-3">
                                <span className="footer-logo">🧘</span>
                                <h5 className="ms-2 fw-bold">Harmonia</h5>
                            </div>
                            <div className="d-flex gap-3 fs-5">
                                <i className="bi bi-telegram"></i>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-instagram"></i>
                            </div>
                        </div>

                        {/* Liên hệ */}
                        <div className="col-md-4 mb-4">
                            <p className="mb-1">Bạn có câu hỏi hoặc góp ý? Liên hệ bên dưới</p>
                            <p className="fw-bold mb-1">support@harmonia.com</p>
                            <p className="fw-bold">+1 234 567 890</p>
                        </div>

                        {/* Tài nguyên */}
                        <div className="col-md-2 mb-4">
                            <h6 className="fw-bold">Tài nguyên</h6>
                            <ul className="list-unstyled small mt-3">
                                <li>Mẹo sống khỏe</li>
                                <li>Từ điển Yoga</li>
                                <li>Thử thách hướng dẫn</li>
                                <li>Kỹ thuật thiền</li>
                            </ul>
                        </div>

                        {/* Hỗ trợ */}
                        <div className="col-md-3 mb-4">
                            <h6 className="fw-bold">Hỗ trợ</h6>
                            <ul className="list-unstyled small mt-3">
                                <li>Câu hỏi thường gặp</li>
                                <li>Liên hệ</li>
                                <li>Trung tâm trợ giúp</li>
                                <li>Cảm nhận học viên</li>
                            </ul>
                        </div>
                    </div>

                    {/* Liên kết điều hướng */}
                    <div className="footer-nav d-flex justify-content-center gap-4 mt-3">
                        <span>Trang chủ</span>
                        <span>Về chúng tôi</span>
                        <span>Lớp học</span>
                        <span>Chương trình</span>
                        <span>Cộng đồng</span>
                    </div>

                    <hr />

                    {/* Bản quyền */}
                    <div className="d-flex justify-content-between small text-muted">
                        <span>Bản quyền 2025 · Đã đăng ký mọi quyền</span>
                        <span>Chính sách bảo mật · Điều khoản sử dụng</span>
                    </div>
                </div>
            </footer>

            {/* Nút lên đầu trang */}
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </>
    );
}

export default Footer;
