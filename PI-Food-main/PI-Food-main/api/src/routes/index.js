const express = require('express');
const router = express.Router();
const {postRecipe} = require('../Controllers/index');
const {getRecipeById} = require('../Controllers/getByID');
const {getRecipeByName}=require('../Controllers/getByName')
const {getDiets} = require('../Controllers/getDiets')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
router.get('/recipes/:idRecipe', async (req, res) =>{
    try {
        const recipe = await getRecipeById(req.params.idRecipe);
        return res.status(200).json({recipe});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
} );
router.get('/recipes/', async (req, res) =>{
    try {
        const recipe = await getRecipeByName(req.query.name);
        return res.status(200).json({recipe});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
} );
router.post('/Recipe', async (req, res) => {
   const{name, image, resumen, niveldeComidaSaludable, pasoApaso }= req.body;
    try {
        const newRecipe = await postRecipe(name, image, resumen, niveldeComidaSaludable, pasoApaso);

        return res.status(200).json(`Se creo la receta: ${newRecipe.name}`);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
});
router.get('/diets', async (req, res) =>{
    try {
        const diets = await getDiets();
        return res.status(200).json({diets});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
} );


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
