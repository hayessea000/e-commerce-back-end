// import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // foreignKey: '_id',
});
// Categories have many Products
Category.hasMany(Product, {
  // foreignKey: '_id',
  // onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
