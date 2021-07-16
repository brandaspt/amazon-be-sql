import Product from "./products.js"
import Review from "./reviews.js"

const models = { Product, Review }

models.Product.hasMany(models.Review)
models.Review.belongsTo(models.Product)

export default models
