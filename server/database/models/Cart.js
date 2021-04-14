const Sequelize = require('sequelize')
const { INTEGER } = Sequelize
const db = require('../db')


const Cart = db.define('cart',{
  qty: {
    type: INTEGER
  }
})

module.exports = Cart