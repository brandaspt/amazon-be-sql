import express from "express"
import cors from "cors"
import { sequelize } from "./config/db.js"

import productsRouter from "./services/products/products.js"
import reviewsRouter from "./services/reviews/reviews.js"
// import cartRouter from "./services/cart/cart.js"
import { errorHandler } from "./errorHandlers.js"

const server = express()
const PORT = process.env.PORT || 3001

// ### MIDDLEWARES ###
server.use(cors())
server.use(express.json())

// ### ENDPOINTS ###

server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)
// server.use("/cart", cartRouter)

// ### ERROR HANDLERS ###
server.use(errorHandler)

// Server and DB connection
sequelize
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => console.log("Server running and listening on port " + PORT))
  })
  .catch(error => console.error("Unable to start server:", error))
