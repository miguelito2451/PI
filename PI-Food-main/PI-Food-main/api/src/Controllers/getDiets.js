const {Recipe, Diets} = require('../db.js');
const {getApi} =require('./InfoAPI.js')
const { conn } = require('../db.js');
const axios = require('axios');


const getDiets = async () => {
    /*  console.log('name :>> ', name); */
     const apiData = await axios.get(`https://spoonacular.com/food-api/docs#Diets`)
     let infoApi = apiData.json;
     console.log(infoApi);
     
 } 
 
 
 module.exports = {
    getDiets
 }