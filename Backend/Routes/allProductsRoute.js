const express = require("express");
const controller = require("./../Controller/productController");

const allProductsRoute = express.Router();
allProductsRoute.route("/allproducts")
  .get(controller.getAllProducts)


  module.exports = allProductsRoute;