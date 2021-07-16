import { sequelize } from "../config/db.js"
import { Sequelize } from "sequelize"

const { DataTypes } = Sequelize

const reqString = { type: DataTypes.TEXT, allowNull: false }

const Review = sequelize.define("review", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  authorName: reqString,
  content: reqString,
  rate: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
    allowNull: false,
  },
})

export default Review
