const { User } = require('../models');
require("dotenv").config();

exports.getDetailsByCity=async(cityName)=>{
    // console.log(cityName)
    // console.log("this is city Name");

    if(!cityName){
        throw new Error("something is missing");
    }
    
    let existCity = await User.findOne({ where: { cityName: cityName } });
    if(existCity){
        // db se us city ka pura details nikal kar laao
        console.log("data is already present in db")
        // console.log("this is exist city",existCity);
        let detailsOfExistCity=[];
        detailsOfExistCity.push(existCity.dataValues.sunrise)
        detailsOfExistCity.push(existCity.dataValues.sunset)
        detailsOfExistCity.push(existCity.dataValues.temperature)
        detailsOfExistCity.push(existCity.dataValues.windSpeed)
        detailsOfExistCity.push(existCity.dataValues.cityName)
        detailsOfExistCity.push(existCity.dataValues.Humidity)
        detailsOfExistCity.push(existCity.dataValues.Pressure)

        // console.log(detailsOfExistCity,"ye ek object aayega");
        return 

    }
    if(!existCity){
       const weatherDetails= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=96cb41fddd6b989a5373c27db1bc671b`)
       
       const jsonValue=await weatherDetails.json()
       
      
       const windSpeed=jsonValue.wind.speed;
      
       const temperature=jsonValue.main.temp;
       const Pressure=jsonValue.main.pressure;
       const Humidity=jsonValue.main.humidity;
       
       
       const sunrise=jsonValue.sys.sunrise;
       
       const sunset=jsonValue.sys.sunset
      const temp=temperature-273.15;
       const response = await User.create({ cityName, windSpeed,temperature:temp ,sunrise,sunset,Pressure,Humidity});
       if(!response){
        throw new Error("error in storing data in db");
       }
    }
       
    
}