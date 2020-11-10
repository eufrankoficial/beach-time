const api = require('../services/api');
const enumCity = require('../enums/cities');
const cityRepository = require('../Repositories/CityRepository');

module.exports = {
    async getCity() {
        const city = enumCity.city;
        const { data : { results } } = await api.get(`weather?woeid=${city}`);
        const cityInDb = await this.verifyCityInDb(results);

        return cityInDb;
    },

    async verifyCityInDb(results) {
        const city = await cityRepository.createCity(results);
        console.log(city);
        return city;
    }
}
