var axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=15a1920c36142b18c622ab15c8cd35ab&units=imperial';


module.exports = {
  getTemp: location => {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then(res => {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, res => {
        //throw new Error(res.data.message);
        throw new Error('Unable to fetch weather for that location');
      });
  }
}
