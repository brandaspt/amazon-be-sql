import createError from "http-errors"

import models from "../models/index.js"

const { Review } = models

export const getSingleReview = async (req, res, next) => {
  const reviewId = req.params.reviewId
  try {
    const review = await Review.findByPk(reviewId)
    if (!review) return next(createError(404, `Review with ID ${reviewId} not found`))
    res.json(review)
  } catch (error) {
    next(createError(400, error))
  }
}

export const addNewReview = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body)
    res.json(newReview)
  } catch (error) {
    next(createError(400, error))
  }
}

export const editReview = async (req, res, next) => {
  const reviewId = req.params.reviewId
  try {
    const resp = await Review.update(req.body, { where: { id: reviewId }, returning: true })
    if (!resp[0]) return next(createError(404, `Review with ID ${reviewId} not found`))
    res.json(resp[1][0])
  } catch (error) {
    next(createError(400, error))
  }
}

export const deleteReview = async (req, res, next) => {
  const reviewId = req.params.reviewId
  try {
    const resp = await Review.destroy({ where: { id: reviewId } })
    if (!resp) return next(createError(404, `Review with id ${reviewId} not found`))
    res.json({ ok: true, message: "Review deleted successfully." })
  } catch (error) {
    next(createError(500, error))
  }
}
