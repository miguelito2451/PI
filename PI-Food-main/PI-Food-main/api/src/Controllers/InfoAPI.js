const axios = require('axios');
const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;
const getApi = async () => {
    try {
        const apiData = await axios (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}`)
    } catch (error) {
        
    }   
}