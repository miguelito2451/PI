const express = require('express');
const router = express.Router();
const {postRecipe} = require('../Controllers/index');
const {getRecipeById} = require('../Controllers/index');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
router.get('/recipes/:idRecipe', async (req, res) =>{
    try {
        /* console.log('id :>> ', id); */
       /* console.log('req.id :>> ', req._parsedUrl.query); */
        const recipe = await getRecipeById(req._parsedUrl.query);
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



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
