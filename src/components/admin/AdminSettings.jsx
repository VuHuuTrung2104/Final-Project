// src/components/admin/AdminSettings.jsx
import React from "react";

export default function AdminSettings() {
  return (
    <div className="card shadow-sm p-3">
      <h4>⚙️ Cài đặt hệ thống</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Tên trung tâm</label>
          <input type="text" className="form-control" defaultValue="Yoga Center ABC" />
        </div>
        <div className="mb-3">
          <label className="form-label">Logo</label>
          <input type="file" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email liên hệ</label>
          <input type="email" className="form-control" defaultValue="contact@yoga.com" />
        </div>
        <button className="btn btn-primary">Lưu thay đổi</button>
      </form>
    </div>
  );
}
