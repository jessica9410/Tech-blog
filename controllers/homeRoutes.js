const router = require('express').Router();
const Dish = require('../models/Dish');

// get one dish without serializing data
router.get('/dish/:id', async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    console.log(dishData)
    res.render('dish', dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});