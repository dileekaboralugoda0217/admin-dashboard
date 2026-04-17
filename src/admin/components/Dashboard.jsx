import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🚀 Ecommerce Admin Dashboard</h1>

      <p style={{ marginTop: "10px" }}>
        Welcome to the Admin Panel 👋
      </p>

      <div style={{ marginTop: "25px" }}>
        <h3>📊 System Overview</h3>

        <ul>
          <li>Users Management</li>
          <li>Products Management</li>
          <li>Orders Tracking</li>
          <li>Settings Configuration</li>
        </ul>
      </div>

      <div style={{ marginTop: "25px" }}>
        <h3>⚡ Quick Info</h3>

        <p>Use the left sidebar menu to manage the system.</p>
        <p>You can create, update, and track ecommerce data easily.</p>
      </div>
    </div>
  );
};

export default Dashboard;