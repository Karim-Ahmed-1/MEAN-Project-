const mongoose = require("mongoose");
require("../Model/category");
const CategorySchema = mongoose.model("category");

module.exports.getAllCategories = (request, response, next) => {
  CategorySchema.find({})
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.getCategorytById = (request, response, next) => {
  CategorySchema.findOne({ _id: request.params.id })
    .then((data) => {
      if (data == null) throw new Error("User not found");
      else response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.addCategory = (request, response, next) => {
  let categoryObject = new CategorySchema({
    name: request.body.name,
    icon: request.body.icon,
  });
  categoryObject
    .save()
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.deleteCategory = (request, response, next) => {
  CategorySchema.deleteOne({ _id: request.body.id })
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

///////////////////////////////////////////////////////////////////to DO
module.exports.updatecategory = (request, response, next) => {
  CategorySchema.updateOne(
    { _id: request.body.id },
    {
      $set: {
        name: request.body.name,
        icon: request.body.icon,
      },
    }
  )
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

/*//Update product
module.exports.updateCategory = async (request, response, next) => {
  try {
    let data = await CategorySchema.updateOne(
      { _id: request.body._id },
      request.body
    );
    if (data.matchedCount == 0) {
      throw new Error("Category is Not Founded");
    } else {
      response.status(200).json({ data });
    }
  } catch (error) {
    next(error);
  }
};
*/
