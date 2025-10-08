// src/components/admin/AdminLayout.jsx
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="d-flex" style={{ paddingTop: "56px" }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-2 d-flex flex-column"
        style={{
          width: collapsed ? "70px" : "220px",
          minHeight: "100vh",
          transition: "width 0.3s",
        }}
      >
        {/* Toggle button */}
        <button
          className="btn btn-sm btn-outline-light mb-3"
          onClick={() => setCollapsed(!collapsed)}
        >
          <i
            className={`bi ${
              collapsed
                ? "bi-layout-sidebar-inset"
                : "bi-layout-sidebar-inset-reverse"
            }`}
          ></i>
        </button>

        {/* Menu */}
        <ul className="nav flex-column">
  <li className="nav-item">
    <NavLink to="/admin/dashboard" className="nav-link text-white">
      <i className="bi bi-speedometer2 me-2"></i>
      {collapsed ? "" : "Dashboard"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/users" className="nav-link text-white">
      <i className="bi bi-people me-2"></i>
      {collapsed ? "" : "Quản lý User"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/trainers" className="nav-link text-white">
      <i className="bi bi-person-badge me-2"></i>
      {collapsed ? "" : "Quản lý Trainer"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/courses" className="nav-link text-white">
      <i className="bi bi-journal-bookmark me-2"></i>
      {collapsed ? "" : "Quản lý Course"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/classrooms" className="nav-link text-white">
      <i className="bi bi-building me-2"></i>
      {collapsed ? "" : "Quản lý Classroom"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/schedule" className="nav-link text-white">
      <i className="bi bi-calendar3 me-2"></i>
      {collapsed ? "" : "Quản lý Schedule"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/registrations" className="nav-link text-white">
      <i className="bi bi-card-checklist me-2"></i>
      {collapsed ? "" : "Đăng ký học"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/membership-plans" className="nav-link text-white">
      <i className="bi bi-ticket-perforated me-2"></i>
      {collapsed ? "" : "Gói tập"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/memberships" className="nav-link text-white">
      <i className="bi bi-person-check me-2"></i>
      {collapsed ? "" : "Membership của User"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/payments" className="nav-link text-white">
      <i className="bi bi-credit-card me-2"></i>
      {collapsed ? "" : "Thanh toán"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/reports" className="nav-link text-white">
      <i className="bi bi-bar-chart-line me-2"></i>
      {collapsed ? "" : "Báo cáo"}
    </NavLink>
  </li>
  {/* Phần nâng cấp thêm */}
  <li className="nav-item">
    <NavLink to="/admin/notifications" className="nav-link text-white">
      <i className="bi bi-bell me-2"></i>
      {collapsed ? "" : "Thông báo"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/content" className="nav-link text-white">
      <i className="bi bi-file-text me-2"></i>
      {collapsed ? "" : "Quản lý nội dung"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/roles" className="nav-link text-white">
      <i className="bi bi-shield-lock me-2"></i>
      {collapsed ? "" : "Phân quyền"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/feedback" className="nav-link text-white">
      <i className="bi bi-chat-dots me-2"></i>
      {collapsed ? "" : "Feedback"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/analytics" className="nav-link text-white">
      <i className="bi bi-graph-up-arrow me-2"></i>
      {collapsed ? "" : "Thống kê nâng cao"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/admin/settings" className="nav-link text-white">
      <i className="bi bi-gear me-2"></i>
      {collapsed ? "" : "Cài đặt hệ thống"}
    </NavLink>
  </li>
</ul>

      </div>

      {/* Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
