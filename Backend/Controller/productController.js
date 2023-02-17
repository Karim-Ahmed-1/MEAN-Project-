const mongoose = require("mongoose");
require("./../Model/product");
const ProductSchema = mongoose.model("product");
const CategorySchema = mongoose.model("category");

module.exports.getAllProducts = (request, response, next) => {
  let filter = {};
  if (request.query.categories) {
    filter = { category: request.query.categories.split(",") };
  }

  ProductSchema.find(filter)
    .populate("category")
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.getProductById = (request, response, next) => {
  ProductSchema.findOne({ _id: request.params.id })
    .populate("category")
    .then((data) => {
      if (data == null) throw new Error("Product doesn't exist");
      else response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.addProduct = async (request, response, next) => {
  let productObject = new ProductSchema({
    title: request.body.title,
    description: request.body.description,
    richDescription: request.body.richDescription,
    image: request.body.image,
    price: request.body.price,
    quantity: request.body.quantity,
    category: request.body.category,
    size: request.body.size,
    color: request.body.color,
    rate: request.body.rate,
    isFeatured: request.body.isFeatured,
  });
  try {
    const category = await CategorySchema.findById(request.body.category);
    if (!category) throw new Error("Invalid category");
    let data = await productObject.save();
    response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

module.exports.UpdateProduct = async (request, response, next) => {
  try {
    if (request.body.category) {
      const category = await CategorySchema.findById(request.body.category);
      if (!category) throw new Error("Invalid category");
    }
    let data = await ProductSchema.updateOne(
      {
        _id: request.body.id,
      },
      {
        $set: {
          title: request.body.title,
          description: request.body.description,
          richDescription: request.body.richDescription,
          image: request.body.image,
          price: request.body.price,
          quantity: request.body.quantity,
          category: request.body.category,
          size: request.body.size,
          color: request.body.color,
          rate: request.body.rate,
          isFeatured: request.body.isFeatured,
        },
      }
    );
    /*
    if (!data.matchedCount) {
      let error = new Error();
      error.status = 404;
      error.message = "product Not found";
      throw error;
    } else {
      response.status(200).json({ data });
    }*/
    response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteProduct = (request, response, next) => {
  ProductSchema.deleteOne({ _id: request.body.id })
    .then((data) => {
      response.status(201).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.getFeatured = async (request, response, next) => {
  try {
    //const count = request.params.count ? request.params.count : 6;
    const Products = await ProductSchema.find({ isFeatured: true }).limit(
      6
    );
    response.status(200).json({ Products });
  } catch (error) {
    next(error);
  }
};

module.exports.getProductswithCategoryID = (request, response, next) => {
  ProductSchema.find({ category: request.params.categoryid })
    .populate("category")
    .then((data) => {
      if (data == null) throw new Error("Product doesn't exist");
      else response.status(200).json(data );
    })
    .catch((error) => {
      next(error);
    });
};