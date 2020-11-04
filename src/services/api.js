const axios = require('axios');
const weather = require('../config/weather');

const api = axios.create({
    baseURL: weather.baseURL,
    params: {
		key: weather.key
	}
});

module.exports = api;