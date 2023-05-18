const {Recipe, Diets} = require('../db.js');
const {getApi} =require('./InfoAPI.js')
const { conn } = require('../db.js');
const axios = require('axios');
const { YOUR_API_KEY  } = process.env;

const getRecipeById = async (id) => {
    const apiData = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}&includeNutrition=true.`)
    let infoApi = apiData.data;
    const recetaBuscadaApi = await infoApi;
    const recetaBuscadaDB = await Recipe.findByPk(id) 
    if (!recetaBuscadaDB || !recetaBuscadaApi){
        return 'Receta no encontrada';
    } 
    return [recetaBuscadaApi, recetaBuscadaDB];     
} 


module.exports = {
    getRecipeById
}
