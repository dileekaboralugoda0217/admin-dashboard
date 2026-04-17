const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");

const { User } = require("../models");

AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  rootPath: "/admin",
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: { isVisible: false },
        },
      },
    },
  ],
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

module.exports = { adminJs, adminRouter };