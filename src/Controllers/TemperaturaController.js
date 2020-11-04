const enumCity = require('../enums/cities');
const api = require('../services/api')

module.exports = { 
    async index(req, res) {
        const cidade = enumCity.city;
        const { data : { results } } = await api.get(`weather?woeid=${cidade}`);
        return res.json(results);
    } 
}