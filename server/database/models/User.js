const Sequelize = require('sequelize')
const { STRING } = Sequelize
const db = require('../db')


const User = db.define('user',{
  name: {
      type: STRING,
      allowNull: false
  } 
})

module.exports = User