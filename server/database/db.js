const Sequelize = require('sequelize')
const Inventory = require('./models/Order')
const User = require('./models/User');
const Cart = require('./models/Cart');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/spiritrose');

const syncAndSeed = async() =>{
  await db.sync({ force: true })

  await User.create({name: "Kayla"})
  await Inventory.create({})

}

module.exports = {
  db,
  syncAndSeed,
  User,
  Inventory,
  Cart
}