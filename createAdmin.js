require("dotenv").config();

const bcrypt = require("bcrypt");
const sequelize = require("./src/config/database");
const User = require("./src/models/User");

const createAdmin = async () => {
  try {
    console.log("Connecting to database...");

    await sequelize.sync();

    console.log("Database connected");

    const hashedPassword = await bcrypt.hash("12345", 10);

    await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin user created successfully!");
    process.exit();
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
};

createAdmin();