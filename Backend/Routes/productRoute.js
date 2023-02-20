const express = require("express");
const checkValidations = require("../core/validations/checkValidations");
const controller = require("./../Controller/productController");
const authorization = require("./../core/Authroization/authorization");
const productValidation = require("./../core/validations/productValidations");

const ProductRoute = express.Router();
ProductRoute.route("/products")
  .all(authorization.checkAdmin)
  .post(
    productValidation.addProductValidation,
    checkValidations,
    controller.addProduct
  )
  .patch(
    
    controller.UpdateProduct
  );

ProductRoute.delete(
  "/products/:id",
  authorization.checkAdmin,
  productValidation.deleteProductValidation,
  checkValidations,
  controller.deleteProduct
);

ProductRoute.get(
  "/products/:id",
  authorization.checkAdmin,
  productValidation.getProductByIdValidation,
  checkValidations,
  controller.getProductById
);

ProductRoute.get(
  "/allproducts",
  authorization.checkAdmin,
  controller.getAllProducts
);

// ProductRoute.get(
//   "/Featured/:count",
//   authorization.checkAdmin,
//   productValidation.getFeatureValidation,
//   checkValidations,
//   controller.getFeatured
// );

module.exports = ProductRoute;
