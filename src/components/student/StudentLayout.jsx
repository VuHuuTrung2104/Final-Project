// src/components/student/StudentLayout.jsx
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function StudentLayout() {
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
            <NavLink to="/student/dashboard" className="nav-link text-white">
              <i className="bi bi-speedometer2 me-2"></i>
              {collapsed ? "" : "Dashboard"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/courses" className="nav-link text-white">
              <i className="bi bi-journal-bookmark me-2"></i>
              {collapsed ? "" : "Khóa học"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/schedule" className="nav-link text-white">
              <i className="bi bi-calendar3 me-2"></i>
              {collapsed ? "" : "Lịch học"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/membership" className="nav-link text-white">
              <i className="bi bi-person-badge me-2"></i>
              {collapsed ? "" : "Membership"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/payments" className="nav-link text-white">
              <i className="bi bi-credit-card me-2"></i>
              {collapsed ? "" : "Thanh toán"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/notifications" className="nav-link text-white">
              <i className="bi bi-bell me-2"></i>
              {collapsed ? "" : "Thông báo"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/progress" className="nav-link text-white">
              <i className="bi bi-graph-up me-2"></i>
              {collapsed ? "" : "Tiến trình"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/profile" className="nav-link text-white">
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
