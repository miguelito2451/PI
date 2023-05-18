const {Recipe, Diets} = require('../db.js');
const {getApi} =require('./InfoAPI.js')
const { conn } = require('../db.js');
const axios = require('axios');
const { YOUR_API_KEY  } = process.env;

const getRecipeByName = async (name) => {
   /*  console.log('name :>> ', name); */
    const apiData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${YOUR_API_KEY}`)
    let infoApi = apiData.data;
    const recetasBuscadaApi = await infoApi;
    const recetasBasedeDatos = await Recipe.findAll({
        where:{
            name: name  
        }  
      });
    return [recetasBuscadaApi, recetasBasedeDatos] ;
} 


module.exports = {
    getRecipeByName
}