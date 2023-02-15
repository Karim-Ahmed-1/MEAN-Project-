const express = require("express");
const checkValidations = require("../core/validations/checkValidations");
const controller = require("./../Controller/categoryController");
const authorization = require("./../core/Authroization/authorization");
const categoryValidation = require("./../core/validations/categoryValidation");

const CategoryRoute = express.Router();

CategoryRoute.route("/categories")
  .all(authorization.checkAdmin)
  .get(controller.getAllCategories)
  .post(
    categoryValidation.addCategoryValidation,
    checkValidations,
    controller.addCategory
  )
  .patch(
    categoryValidation.updateCategoryValidation,
    checkValidations,
    controller.updatecategory
  )
  .delete(
    categoryValidation.deleteCategoryValidation,
    checkValidations,
    controller.deleteCategory
  );

module.exports = CategoryRoute;
