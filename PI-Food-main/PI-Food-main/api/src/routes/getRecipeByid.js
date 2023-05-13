/* const express = require('express');
const router = express.Router();
const {getRecipeById} = require('../Controllers/index');


router.get('/recipes/:idRecipe', async (req, res) =>{
    console.log('req.body.id :>> ');
    try {
        const recipe = await getRecipeById(req.body.id);
        return res.status(200).json({recipe});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
} );

module.exports = router; */