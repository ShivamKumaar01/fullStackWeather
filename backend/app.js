const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
// console.log("hi");
app.use('/api/v1',require('../backend/routes/get-weather-data'));


// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });



app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
});