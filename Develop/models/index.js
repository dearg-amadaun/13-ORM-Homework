// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//EX Ship.belongsTo(Captain, { targetKey: 'name', foreignKey: 'captainName' });
// This creates a foreign key called `captainName` in the source model (Ship)
// which references the `name` field from the target model (Captain).
Product.belongsTo(Category, { foreignKey: "category_id"});

// Categories have many Products
// Bar.hasMany(Baz, { sourceKey: 'title', foreignKey: 'barTitle' });
Category.hasMany(Product, { foreignKey: "category_id"});

// Products belongToMany Tags (through ProductTag)
// Foo.belongsToMany(Bar, { through: 'foo_bar' });
// This creates a junction table `foo_bar` with fields `fooId` and `barId`
Product.belongsToMany(Tag, { through: { model: ProductTag }});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: { model: ProductTag }});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
