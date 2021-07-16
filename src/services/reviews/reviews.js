import express from "express"

import * as Controllers from "../../controllers/reviews.js"

const router = express.Router()

router.get("/:prodId", Controllers.getSingleProductReviews)

router.post("/:prodId", Controllers.postProductReview)

router.put("/:reviewId", Controllers.editReview)

router.delete("/:reviewId", Controllers.deleteReview)

export default router
