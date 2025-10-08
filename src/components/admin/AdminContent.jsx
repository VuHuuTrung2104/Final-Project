// src/components/admin/AdminContent.jsx
import React from "react";

export default function AdminContent() {
  return (
    <div className="card shadow-sm p-3">
      <h4>📰 Quản lý Nội dung (CMS)</h4>
      <button className="btn btn-success mb-3">➕ Thêm bài viết</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Tiêu đề</th>
            <th>Ngày đăng</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lợi ích của Yoga mỗi ngày</td>
            <td>05/10/2025</td>
            <td>Xuất bản</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
