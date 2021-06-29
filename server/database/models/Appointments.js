const Sequelize = require('sequelize')
const { STRING, DATE } = Sequelize
const db = require('../db')

const Appointment = db.define('appointment',{
  date: {
    type: DATE,
    allowNull: false
  },
  name: {
    type: STRING,
  }
})

module.exports = Appointment