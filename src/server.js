require("dotenv").config();

const express = require("express");

// 📦 Database (Sequelize models)
const db = require("./models");

// 🛡️ AdminJS
const { adminJs, adminRouter } = require("./admin/admin");

// 📦 Routes
const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// ==========================
// MIDDLEWARE
// ==========================
app.use(express.json());

// ==========================
// TEST ROUTE
// ==========================
app.get("/", (req, res) => {
  res.send("🚀 Ecommerce Admin Backend Running Successfully");
});

// ==========================
// API ROUTES
// ==========================
app.use("/api", authRoutes);        // 🔐 LOGIN / JWT
app.use("/api", categoryRoutes);    // 📦 CATEGORY
app.use("/api/dashboard", dashboardRoutes); // 📊 DASHBOARD STATS

// ==========================
// ADMIN PANEL (AdminJS)
// ==========================
app.use(adminJs.options.rootPath, adminRouter);

// ==========================
// SERVER START
// ==========================
const PORT = process.env.PORT || 7001;

const startServer = async () => {
  try {
    // 🔌 Connect database
    await db.sequelize.authenticate();
    console.log("✅ Database connected successfully");

    // 🔄 Sync tables
    await db.sequelize.sync();
    console.log("✅ Database synced successfully");

    // 🚀 Start server
    app.listen(PORT, () => {
      console.log("=================================");
      console.log(`🚀 Server running on: http://localhost:${PORT}`);
      console.log(`📊 Admin Panel: http://localhost:${PORT}/admin`);
      console.log(`🔐 Auth API: http://localhost:${PORT}/api/login`);
      console.log(`📦 API Base: http://localhost:${PORT}/api`);
      console.log("=================================");
    });

  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

startServer();