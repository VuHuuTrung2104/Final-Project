// src/components/admin/AdminRoles.jsx
import React from "react";

export default function AdminRoles() {
  return (
    <div className="card shadow-sm p-3">
      <h4>🛡️ Quản lý Phân quyền</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nguyễn Văn A</td>
            <td>Student</td>
            <td>
              <button className="btn btn-sm btn-warning">Nâng cấp Trainer</button>
            </td>
          </tr>
          <tr>
            <td>Trần Thị B</td>
            <td>Trainer</td>
            <td>
              <button className="btn btn-sm btn-danger">Hạ xuống Student</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
