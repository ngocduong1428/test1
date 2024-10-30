const product_router = require("./product-route");
const home_router = require("./home-router");

module.exports = (app) => {
  app.use("/", home_router);
  app.use("/products", product_router);
};
