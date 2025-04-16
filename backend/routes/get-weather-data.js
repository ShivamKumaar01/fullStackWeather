const{getWeatherData}=require('../controllers/weather.controller')

const router = require('express').Router();
// console.log("i m in route");
router.post('/city',getWeatherData);


module.exports = router;