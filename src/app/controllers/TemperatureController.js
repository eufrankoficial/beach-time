const weatherApiRequest = require('../api/WeatherApiRequest');

module.exports = {
    async index(req, res) {
        const results = await weatherApiRequest.getCity();
        
        
        return res.json(currentCity);
    }
}