const Sequelize = require('sequelize')
const { STRING, INTEGER, FLOAT } = Sequelize
const db = require('../db')

const Inventory = db.define('inventory',{
  item: {
    type: STRING,
    allowNull: false
  },
  price: {
    type: FLOAT,
  },
  description: {
    type: STRING,
  },
  qty: {
    type: INTEGER,
  }
})

module.exports = {
  Inventory
}