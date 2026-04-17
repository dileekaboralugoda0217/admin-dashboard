require("dotenv").config();

const express = require("express");
const db = require("./models"); // Sequelize models
const { adminJs, adminRouter } = require("./admin/admin");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

app.use(express.json());

/* ---------------- API ROUTES ---------------- */
app.use("/api", categoryRoutes);

/* ---------------- ADMIN DASHBOARD ---------------- */
app.use(adminJs.options.rootPath, adminRouter);

/* ---------------- TEST ROUTE ---------------- */
app.get("/", (req, res) => {
  res.send("Ecommerce Admin Backend & Dashboard Running...");
});

/* ---------------- SERVER START ---------------- */

const PORT = process.env.PORT || 7001;

const startServer = async () => {
  try {
    // Connect database
    await db.sequelize.authenticate();
    console.log("Database connected successfully");

    // Sync database tables
    await db.sequelize.sync();

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Admin panel: http://localhost:${PORT}/admin`);
      console.log(`API base: http://localhost:${PORT}/api`);
    });

  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

startServer();