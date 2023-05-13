const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    ID : {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    resumen: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    niveldeComidaSaludable : {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    pasoApaso: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
    },
    {timestamps: false});
};
