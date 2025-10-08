// src/components/trainer/TrainerLayout.jsx
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function TrainerLayout() {
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
        <button
          className="btn btn-sm btn-outline-light mb-3"
          onClick={() => setCollapsed(!collapsed)}
        >
          <i
            className={`bi ${
              collapsed ? "bi-layout-sidebar-inset" : "bi-layout-sidebar-inset-reverse"
            }`}
          ></i>
        </button>

        <ul className="nav flex-column">
  <li className="nav-item">
    <NavLink to="/trainer/dashboard" className="nav-link text-white">
      <i className="bi bi-speedometer2 me-2"></i>
      {collapsed ? "" : "Dashboard"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/trainer/schedule" className="nav-link text-white">
      <i className="bi bi-calendar-check me-2"></i>
      {collapsed ? "" : "Lịch dạy"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/trainer/class/1" className="nav-link text-white">
      <i className="bi bi-people me-2"></i>
      {collapsed ? "" : "Quản lý lớp"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/trainer/attendance" className="nav-link text-white">
      <i className="bi bi-check2-square me-2"></i>
      {collapsed ? "" : "Điểm danh"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/trainer/reports" className="nav-link text-white">
      <i className="bi bi-bar-chart-line me-2"></i>
      {collapsed ? "" : "Thống kê"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/trainer/notifications" className="nav-link text-white">
      <i className="bi bi-bell me-2"></i>
      {collapsed ? "" : "Thông báo"}
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/trainer/profile" className="nav-link text-white">
      <i className="bi bi-person-circle me-2"></i>
      {collapsed ? "" : "Hồ sơ"}
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
