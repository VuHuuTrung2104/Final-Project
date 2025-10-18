// src/components/trainer/TrainerLayout.jsx
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../assets/css/trainer/TrainerLayout.css";

export default function TrainerLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="trainer-layout d-flex">
        {/* SIDEBAR */}
        <aside className={`trainer-sidebar ${collapsed ? "collapsed" : ""}`}>
          <div className="sidebar-header d-flex align-items-center justify-content-between px-2 mb-3">
            {!collapsed && <h5 className="fw-bold mb-0">🧘‍♂️ Trainer</h5>}
            <button
              className="btn btn-sm btn-outline-light"
              onClick={() => setCollapsed(!collapsed)}
            >
              <i
                className={`bi ${
                  collapsed
                    ? "bi-chevron-double-right"
                    : "bi-chevron-double-left"
                }`}
              ></i>
            </button>
          </div>

        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/trainer/dashboard" className="nav-link">
              <i className="bi bi-speedometer2"></i>
              {!collapsed && <span>Dashboard</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/trainer/schedule" className="nav-link">
              <i className="bi bi-calendar-check"></i>
              {!collapsed && <span>Lịch dạy</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/trainer/class/1" className="nav-link">
              <i className="bi bi-people"></i>
              {!collapsed && <span>Quản lý lớp</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/trainer/attendance" className="nav-link">
              <i className="bi bi-check2-square"></i>
              {!collapsed && <span>Điểm danh</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/trainer/reports" className="nav-link">
              <i className="bi bi-bar-chart-line"></i>
              {!collapsed && <span>Thống kê</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/trainer/notifications" className="nav-link">
              <i className="bi bi-bell"></i>
              {!collapsed && <span>Thông báo</span>}
            </NavLink>
          </li>
          <li className="nav-item mt-auto">
            
          </li>
           {/* 🔹 NÚT VỀ TRANG CHỦ - thêm mới */}
                    <li className="nav-item mt-2 border-top pt-2">
                      <NavLink to="/" className="nav-link">
                        <i className="bi bi-house-door"></i>
                        {!collapsed && <span>Trang chủ</span>}
                      </NavLink>
                    </li>
        </ul>
      </aside>

      {/* CONTENT */}
      <main className="trainer-content flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
}
