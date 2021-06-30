const router = require('express').Router()
const Appointment = require('../database/models/Appointment')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log(`mmmmaaaaaaaade it here!`)
    res.send(await Appointment.findAll());
  } 
  catch (ex) {
    next(ex);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Appointment.findByPk(req.params.id));
  } 
  catch (ex) {
    next(ex);
  }
});