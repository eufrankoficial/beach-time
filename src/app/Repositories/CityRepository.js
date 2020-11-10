const mongoose = require('mongoose');
const City = mongoose.model('City');

module.exports = {
    async createCity(cityParam) {
        const city = await City.create({
            name: cityParam.city,
            sunrise: cityParam.sunrise,
            sunset: cityParam.sunset,
            temperature: cityParam.temp,
            temperatureDescription: cityParam.description,
            humidity: cityParam.humidity,
            windSpeedy: cityParam.windSpeedy
        });

        return city;
    }
}