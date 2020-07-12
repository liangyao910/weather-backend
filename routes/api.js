var express    = require('express');
var router = express.Router()

const axios = require('axios');

router.get('/', async (req,res) => {
    let url = "http://api.openweathermap.org/data/2.5/uvi/history?appid=e6d3fbba76a563af531b1d017a56a05d&lat=35.6895&lon=139.6917&start=1588258800&end=1590937200"
    let result;
    result = await axios.get(url)
        .then( (response) => {
            return response.data;
        });
    res.json({
        resule: result
    });
});

module.exports = router