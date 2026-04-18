import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
        setLoading(false);
      });
  }, []);

  const cardStyle = {
    padding: "24px",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginBottom: "8px",
  };

  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "#666" }}>
        <h3>🚀 Loading Dashboard...</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "8px" }}>
          Dashboard Overview
        </h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          Welcome back! Here's what's happening in your shop today.
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
        gap: "24px" 
      }}>
        <div style={cardStyle} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)'; }}>
          <span style={iconStyle}>👥</span>
          <span style={{ color: "#666", fontWeight: "600", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>Total Users</span>
          <h2 style={{ fontSize: "2rem", margin: "0", color: "#1a1a1a" }}>{stats.users}</h2>
        </div>

        <div style={cardStyle} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)'; }}>
          <span style={iconStyle}>📦</span>
          <span style={{ color: "#666", fontWeight: "600", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>Total Products</span>
          <h2 style={{ fontSize: "2rem", margin: "0", color: "#1a1a1a" }}>{stats.products}</h2>
        </div>

        <div style={cardStyle} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)'; }}>
          <span style={iconStyle}>🛍️</span>
          <span style={{ color: "#666", fontWeight: "600", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>Total Orders</span>
          <h2 style={{ fontSize: "2rem", margin: "0", color: "#1a1a1a" }}>{stats.orders}</h2>
        </div>

        <div style={{ ...cardStyle, background: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)", color: "white" }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)'; }}>
          <span style={iconStyle}>💰</span>
          <span style={{ opacity: "0.8", fontWeight: "600", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>Total Revenue</span>
          <h2 style={{ fontSize: "2rem", margin: "0" }}>${stats.revenue.toLocaleString()}</h2>
        </div>
      </div>

      <div style={{ marginTop: "60px", padding: "30px", backgroundColor: "#fff", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
        <h3 style={{ marginBottom: "16px", color: "#1a1a1a" }}>⚡ Quick Actions</h3>
        <p style={{ color: "#666" }}>Use the sidebar on the left to navigate through your inventory, manage users, and track order fulfillment.</p>
      </div>
    </div>
  );
};

export default Dashboard;