import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../assets/css/admin/AdminLayout.css";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-layout d-flex">
      {/* SIDEBAR */}
      <aside className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header d-flex align-items-center justify-content-between px-2 mb-3">
          {!collapsed && <h5 className="fw-bold mb-0">🧘‍♂️ Admin</h5>}
          <button
            className="btn btn-sm btn-outline-light"
            onClick={() => setCollapsed(!collapsed)}
          >
            <i
              className={`bi ${
                collapsed ? "bi-chevron-double-right" : "bi-chevron-double-left"
              }`}
            ></i>
          </button>
        </div>

        {/* MENU */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/admin/dashboard" className="nav-link">
              <i className="bi bi-speedometer2"></i>
              {!collapsed && <span>Dashboard</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/users" className="nav-link">
              <i className="bi bi-people"></i>
              {!collapsed && <span>Quản lý User</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/trainers" className="nav-link">
              <i className="bi bi-person-badge"></i>
              {!collapsed && <span>Quản lý Trainer</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/courses" className="nav-link">
              <i className="bi bi-journal-bookmark"></i>
              {!collapsed && <span>Quản lý Course</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/schedule" className="nav-link">
              <i className="bi bi-calendar3"></i>
              {!collapsed && <span>Quản lý Schedule</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/payments" className="nav-link">
              <i className="bi bi-credit-card"></i>
              {!collapsed && <span>Thanh toán</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/reports" className="nav-link">
              <i className="bi bi-bar-chart-line"></i>
              {!collapsed && <span>Báo cáo</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/settings" className="nav-link">
              <i className="bi bi-gear"></i>
              {!collapsed && <span>Cài đặt</span>}
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* CONTENT */}
      <main className="admin-content flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
}
