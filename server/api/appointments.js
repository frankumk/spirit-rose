const router = require('express').Router()
const Appointment = require('../database/models/Appointment')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await Appointment.findAll());
  } 
  catch (ex) {
    next(ex);
  }
});

router.post('/', async (req,res,next) => {
  try{

  }catch(ex){
    next(ex)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Appointment.findByPk(req.params.id));
  } 
  catch (ex) {
    next(ex)
  }
});

router.put('/', async (req,res,next) => {
  try{
    console.log(`mmmmaaaaaaaade it here!`)
    console.log(req.body.date)
    console.log(typeof req.body.date)
    console.log(new Date(req.body.date))
    const appt = await Appointment.findOne({
      where: {
        date: new Date(req.body.date),
        time: req.body.time
      }
    })
    console.log(appt)
    appt.name = req.body.name
    appt.phone = req.body.phone
    await appt.save()
    res.status(201).send(await Appointment.findAll())

  }catch(ex){
    next(ex)
  }
})


router.delete('/:id', async (req,res,next) => {
  try{

  }catch(ex){
    next(ex)
  }
})