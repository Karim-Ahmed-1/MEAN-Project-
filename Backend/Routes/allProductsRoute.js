const express = require("express");
const controller = require("./../Controller/productController");
const checkValidations = require("../core/validations/checkValidations");
const productValidation = require("./../core/validations/productValidations");

const allProductsRoute = express.Router();

//Get products with specific Category ID
allProductsRoute.route("/products/:categoryid")
                .get(controller.getProductswithCategoryID);

allProductsRoute.route("/allproducts")
                .get(controller.getAllProducts);
//Get first 6 featured products
allProductsRoute.get("/Featured/",controller.getFeatured);

module.exports = allProductsRoute;