import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/public/SignupPage.css";
import imglogin from "../../assets/img/Banner/2.png";

function LoginPage() {
    return (
        <div className="signup-wrapper">
            <div className="signup-card row g-0 shadow-lg rounded-4 overflow-hidden">

                {/* Cột hình ảnh */}
                <div className="col-md-6 d-none d-md-block">
                    <img
                        src={imglogin}
                        alt="Căn hộ"
                        className="img-fluid h-100 w-100 object-fit-cover"
                    />
                </div>

                {/* Cột form */}
                <div className="col-md-6 p-5 bg-white">
                    <div className="text-center mb-4">
                        <h3 className="fw-bold text-primary">NiceHome</h3>
                        <p className="text-muted">Đăng nhập vào tài khoản của bạn</p>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Nhập email" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                        </div>

                        {/* Vai trò */}
                        <div className="mb-3">
                            <label className="form-label">Vai trò</label>
                            <select className="form-select">
                                <option value="student">Học viên</option>
                                <option value="trainer">Giảng viên</option>
                                <option value="admin">Quản trị</option>
                            </select>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Ghi nhớ đăng nhập</label>
                            </div>
                            <a href="#" className="text-decoration-none">Quên mật khẩu?</a>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mb-3">
                            Đăng nhập
                        </button>

                        <div className="d-flex gap-2 justify-content-center">
                            {/* Facebook */}
                            <button type="button" className="btn btn-primary rounded-pill px-3">
                                <i className="bi bi-facebook"></i>
                            </button>

                            {/* Google */}
                            <button type="button" className="btn btn-light border rounded-pill px-3">
                                <i className="bi bi-google"></i>
                            </button>

                            {/* Apple */}
                            <button type="button" className="btn btn-dark rounded-pill px-3">
                                <i className="bi bi-apple"></i>
                            </button>

                            {/* Xbox */}
                            <button type="button" className="btn rounded-pill px-3" style={{ backgroundColor: "#107C10", color: "#fff" }}>
                                <i className="bi bi-xbox"></i>
                            </button>

                            {/* PlayStation */}
                            <button type="button" className="btn rounded-pill px-3" style={{ backgroundColor: "#003087", color: "#fff" }}>
                                <i className="bi bi-playstation"></i>
                            </button>
                        </div>
                    </form>

                    <p className="text-center mt-4">
                        Chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
