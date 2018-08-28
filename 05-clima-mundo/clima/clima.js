const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0cc8b412b009c29a13a5f02b6e541908`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}