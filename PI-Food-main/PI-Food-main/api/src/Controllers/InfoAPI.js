const axios = require('axios');
const {    YOUR_API_KEY  } = process.env;
const getApi = async () => {
    try {
        const apiData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}`)
        return apiData.data;
    } catch (error) {
        console.log(error);
    }   
}

module.exports = {
    getApi,
}
