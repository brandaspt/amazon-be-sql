import express from "express"

import * as Controllers from "../../controllers/products.js"
import { prodImgParser } from "../../config/cloudinary.js"

const router = express.Router()

router.get("/", Controllers.getAllProducts)
router.get("/:prodId", Controllers.getSingleProduct)
router.get("/:prodId/reviews", Controllers.getProductReviews)
router.post("/", Controllers.addNewProduct)
router.put("/:prodId", Controllers.editProduct)
router.delete("/:prodId", Controllers.deleteProduct)
router.post("/:prodId/uploadImage", prodImgParser.single("prodImage"), Controllers.uploadProductImage)

export default router
