class Forecast {
    constructor() {
        this.key = 'mrpGwrdZR8AIEE9yQAYedofYyfpAmPiG';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city) {
        // console.log(cityDets)
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    }

    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }

    async getWeather(locationKey) {
        const query = `${locationKey}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        // console.log(data)
        return data[0];
    }



}
// const key = 'mrpGwrdZR8AIEE9yQAYedofYyfpAmPiG';

// const getWether = async(locatioonKey) => {


// }
// get city info
// const getCity = async(city) => {

// }

// getCity('bengaluru')
//     .then(data => {
//         // console.log(data.Key);
//         return getWether(data.Key);
//     }).then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

// getWether("204108");