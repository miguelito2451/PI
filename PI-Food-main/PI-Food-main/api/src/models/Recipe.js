const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    ID : {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    }, 
    resumen: {
      type : DataTypes.STRING,
      allowNull: false
    },
    niveldeComidaSaludable : {
      type : DataTypes.STRING
    },
    pasoApaso: { 
      type: DataTypes.STRING,
      allowNull: false
    }
    
  });
};
