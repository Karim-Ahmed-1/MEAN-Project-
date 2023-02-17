const express = require("express");
const controller = require("./../Controller/productController");
const checkValidations = require("../core/validations/checkValidations");
const productValidation = require("./../core/validations/productValidations");

const allProductsRoute = express.Router();
allProductsRoute.route("/allproducts")
  .get(controller.getAllProducts)


  allProductsRoute.get(
    "/Featured/",
    controller.getFeatured
  );

  module.exports = allProductsRoute;