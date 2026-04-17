// require("dotenv").config();

// const express = require("express");
// const db = require("./models");

// const app = express();

// app.use(express.json());

// const categoryRoutes = require("./routes/categoryRoutes");

// app.use("/api", categoryRoutes);

// app.get("/", (req, res) => {
//   res.send("Ecommerce Admin Backend Running...");
// });

// const PORT = process.env.PORT || 7001;

// db.sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Database connected successfully");

//     db.sequelize.sync();

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Database connection failed:", error);
//   });