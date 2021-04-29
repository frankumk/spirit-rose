const router = require('express').Router()
const Inventory = require('../database/models/Inventory')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await Inventory.findAll());
  } 
  catch (ex) {
    next(ex);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Inventory.findByPk(req.params.id));
  } 
  catch (ex) {
    next(ex);
  }
});