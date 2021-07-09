const Sequelize = require('sequelize')
const { STRING, DATEONLY } = Sequelize
const db = require('../db')

const Appointment = db.define('appointment',{
  date: {
    type: DATEONLY,
    allowNull: false
  },
  time: {
    type: STRING,
    allowNull: false
  },
  name: {
    type: STRING,
  }
})

module.exports = Appointment