import express from "express"

import * as Controllers from "../../controllers/reviews.js"

const router = express.Router()

router.get("/:reviewId", Controllers.getSingleReview)

router.post("/", Controllers.addNewReview)

router.put("/:reviewId", Controllers.editReview)

router.delete("/:reviewId", Controllers.deleteReview)

export default router
