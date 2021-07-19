import createError from "http-errors"

import models from "../models/index.js"

const { Product, Review } = models

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: Review })
    res.json(products)
  } catch (error) {
    next(createError(500, error))
  }
}
export const getSingleProduct = async (req, res, next) => {
  const prodId = req.params.prodId
  try {
    const foundProd = await Product.findByPk(prodId)
    if (!foundProd) return next(createError(404, `Product with ID ${prodId} not found`))
    res.json(foundProd)
  } catch (error) {
    next(createError(400, error))
  }
}
export const getProductReviews = async (req, res, next) => {
  const prodId = req.params.prodId
  try {
    const foundProd = await Review.findAll({ where: { productId: prodId } })
    res.json(foundProd)
  } catch (error) {
    next(createError(400, error))
  }
}
export const addNewProduct = async (req, res, next) => {
  try {
    const newProd = await Product.create(req.body)
    res.json(newProd)
  } catch (error) {
    next(createError(400, error))
  }
}
export const editProduct = async (req, res, next) => {
  const prodId = req.params.prodId
  try {
    const resp = await Product.update(req.body, { where: { id: prodId }, returning: true })
    if (!resp[0]) return next(createError(404, `Product with ID ${prodId} not found`))
    res.json(resp[1][0])
  } catch (error) {
    next(createError(400, error))
  }
}
export const deleteProduct = async (req, res, next) => {
  const prodId = req.params.prodId
  try {
    const resp = await Product.destroy({ where: { id: prodId } })
    if (!resp) return next(createError(404, `Product with id ${prodId} not found`))
    res.json({ ok: true, message: "Product deleted successfully." })
  } catch (error) {
    next(createError(500, error))
  }
}
export const uploadProductImage = async (req, res, next) => {
  const prodId = req.params.prodId
  const update = { imageURL: req.file.path }
  try {
    const resp = await Product.update(update, { where: { id: prodId }, returning: true })
    if (!resp[0]) return next(createError(404, `Product with ID ${prodId} not found`))
    res.json(resp[1][0])
  } catch (error) {
    next(createError(500, error))
  }
}
