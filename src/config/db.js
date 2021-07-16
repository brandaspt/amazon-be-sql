import { Sequelize } from "sequelize"

// Sequelize
const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } = process.env

export const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
})

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err))
