import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/SignupPage.css";
import imglogin from "../assets/img/Banner/2.png";

function SignupPage() {
    return (
        <div className="signup-wrapper">
            <div className="signup-card row g-0 shadow-lg rounded-4 overflow-hidden">

                {/* Cột hình ảnh */}
                <div className="col-md-6 d-none d-md-block">
                    <img
                        src={imglogin}
                        className="img-fluid h-100 w-100 object-fit-cover"
                        alt="Đăng ký"
                    />
                </div>

                {/* Cột form */}
                <div className="col-md-6 p-5 bg-white">
                    <div className="text-center mb-4">
                        <h3 className="fw-bold text-primary">NiceHome</h3>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Nhập họ và tên" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Nhập email" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Số điện thoại</label>
                            <div className="input-group">
                                <span className="input-group-text">+84</span>
                                <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Tạo mật khẩu mới" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Xác nhận mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" />
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

                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="terms" />
                            <label className="form-check-label" htmlFor="terms">
                                Bằng việc tạo tài khoản, bạn đồng ý với{" "}
                                <a href="#">Điều khoản & Dịch vụ</a> và{" "}
                                <a href="#">Chính sách bảo mật</a>.
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mb-3">
                            Tạo tài khoản mới
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
                        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
