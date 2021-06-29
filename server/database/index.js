
const db = require("./db");

const User = require("./models/User");
const Cart= require("./models/Cart");
const Inventory = require("./models/Inventory");
const Appointment = require("./models/Appointment")

const syncAndSeed = async() =>{
  await db.sync({ force: true })

  await User.create({name: "Kayla"})
  await Inventory.create({item: "Rose Bead Necklace", price: 35, description: "Wear Rose Medicine daily over your heart and discover your magical essence."})
  await Inventory.create({item: "Rose Bead Pendant", price: 33})
  await Inventory.create({item: "Fertility Goddess and Pregnancy Protection Medallion", price: 33})

}

module.exports = {
  db,
  syncAndSeed,
  models: {
    User,
    Cart,
    Inventory,
    Appointment
  }
}