const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");

// 📦 MODELS
const { User, Setting, Product, Order, OrderItem, Category } = require("../models");

// Register Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

// ==========================
// ADMINJS CONFIG
// ==========================
const adminJs = new AdminJS({
  rootPath: "/admin",

  // 📊 CUSTOM DASHBOARD
  dashboard: {
    component: AdminJS.bundle("./components/Dashboard"),
  },

  // 📦 DATABASE RESOURCES
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: {
            isVisible: false,
          },
        },
      },
    },

    {
      resource: Category,
    },

    {
      resource: Setting,
      options: {
        properties: {
          key: { isTitle: true },
        },
      },
    },

    {
      resource: Product,
    },

    {
      resource: Order,
    },

    {
      resource: OrderItem,
    },
  ],

  // 🎨 BRANDING
  branding: {
    companyName: "Ecommerce Management System",
    logo: false,
    softwareBrothers: false,
  },
});

// ==========================
// ADMIN AUTH LOGIN
// ==========================
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    authenticate: async (email, password) => {
      const user = await User.findOne({ where: { email } });

      if (!user) return null;

      if (user.role !== "admin") {
        return null;
      }

      return { email: user.email };
    },

    cookiePassword: "sessionsecret",
  },
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);

// ==========================
// EXPORT
// ==========================
module.exports = { adminJs, adminRouter };