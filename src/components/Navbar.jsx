// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${
        scrolled ? "scrolled" : ""
      } ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-yin-yang me-2"></i> Harmonia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#HLV">Huấn luyện viên</a></li>
            <li className="nav-item"><a className="nav-link" href="#service">Dịch vụ</a></li>
            <li className="nav-item"><a className="nav-link" href="#pricing">Bảng giá</a></li>
            <li className="nav-item"><a className="nav-link" href="#Gallery">Bài viết</a></li>

            {/* Dropdown Vai trò */}
            <li className="nav-item dropdown">
              <a
                className="btn btn-outline-light ms-3 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vai trò
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link to="/student" className="dropdown-item">Học viên</Link></li>
                <li><Link to="/trainer" className="dropdown-item">HLV</Link></li>
                <li><Link to="/admin" className="dropdown-item">ADM</Link></li>
              </ul>
            </li>
          </ul>
          <Link to="/signup" className="btn btn-outline-light ms-3">Đăng ký</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
