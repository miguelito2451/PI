const {Recipe, Diets} = require('../db.js');
const { conn } = require('../db.js');

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
}
