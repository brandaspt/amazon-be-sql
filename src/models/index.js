import Product from "./products.js"
import Review from "./reviews.js"

const models = { Product, Review }

models.Product.hasMany(models.Review, { foreignKey: { allowNull: false } })
models.Review.belongsTo(models.Product, { foreignKey: { allowNull: false } })

export default models
