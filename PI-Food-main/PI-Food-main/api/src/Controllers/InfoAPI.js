const axios = require('axios');
const { YOUR_API_KEY  } = process.env;
const getApi = async () => {
    try {
        const apiData = await axios.get(`https://api.spoonacular.com/recipes/716429/information?apiKey=${YOUR_API_KEY}Y&includeNutrition=true.`)
        return apiData.data;
    } catch (error) {
        console.log(error);
    }   
}

module.exports = {
    getApi,
}
