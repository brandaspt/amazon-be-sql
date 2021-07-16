import { sequelize } from "../config/db.js"
import { Sequelize } from "sequelize"

const { DataTypes } = Sequelize

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.TEXT, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  brand: { type: DataTypes.TEXT, allowNull: false },
  imageURL: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png",
  },
  price: { type: DataTypes.FLOAT, allowNull: false },
})

export default Product
