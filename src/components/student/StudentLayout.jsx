import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../assets/css/student/StudentLayout.css";

export default function StudentLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="student-layout d-flex">
      {/* SIDEBAR */}
      <aside className={`student-sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header d-flex align-items-center justify-content-between px-2 mb-3">
          {!collapsed && <h5 className="fw-bold mb-0">🧘‍♀️ Student</h5>}
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
            <NavLink to="/student/dashboard" className="nav-link">
              <i className="bi bi-speedometer2"></i>
              {!collapsed && <span>Tổng quan</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/courses" className="nav-link">
              <i className="bi bi-journal-bookmark"></i>
              {!collapsed && <span>Khóa học</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/schedule" className="nav-link">
              <i className="bi bi-calendar3"></i>
              {!collapsed && <span>Lịch học</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/membership" className="nav-link">
              <i className="bi bi-person-badge"></i>
              {!collapsed && <span>Membership</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/payments" className="nav-link">
              <i className="bi bi-credit-card"></i>
              {!collapsed && <span>Thanh toán</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/student/notifications" className="nav-link">
              <i className="bi bi-bell"></i>
              {!collapsed && <span>Thông báo</span>}
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* CONTENT */}
      <main className="student-content flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
}
