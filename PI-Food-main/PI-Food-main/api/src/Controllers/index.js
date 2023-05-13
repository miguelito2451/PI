const {Recipe, Diets} = require('../db.js');
const {getApi} =require('./InfoAPI.js')
const { conn } = require('../db.js');


const getRecipeById = async (id) => {
    /* console.log(parseInt(id));  */
    let  infoAPIObj = await getApi();
    let  infoAPI = infoAPIObj.results;
    let recetaBuscadaApi = infoAPI.find((receta) => 
   /*  console.log('receta :>> ', receta) */
     receta.id == id
    );
    /* console.log('recetaBuscadaApi :>> ', recetaBuscadaApi); */
    /* const recetaBuscadaDB = Recipe.findByPk(id) */
    if (!recetaBuscadaDB || !recetaBuscadaApi){
        return 'Receta no encontrada';
    } 
    return [recetaBuscadaApi, recetaBuscadaDB];       
} 
const postRecipe = async (name, image, resumen, pasoApaso, niveldeComidaSaludable) => {
    const newRecipe = await Recipe.create({
        //creat metodo de sequile para crear informacion en la db
        name,
        image,
        resumen,
        niveldeComidaSaludable,
        pasoApaso
    })

    return newRecipe
}

module.exports = {
    postRecipe,
    getRecipeById,
}
