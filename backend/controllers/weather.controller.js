const { getDetailsByCity } = require('../service/weather-data-service')
exports.getWeatherData = async (req, res) => {
    console.log(req.body.cityName);
    console.log(req);
    try {
        const user = await getDetailsByCity(

            req.body.cityName
        );
        // console.log(user)
        res.status(201).json({ message: "data added/fetched successfully" });
    } catch (error) {
        console.log(error.message, "yaha error hai");
        res.status(500).json({ message: "internal server error" });
    }
}