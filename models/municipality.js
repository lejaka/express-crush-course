const municipalities = require("../municipalitiesData");

module.exports = (sequelize, DataTypes) => {
    const Municipality = sequelize.define("municipality", {
      name: {
        type: DataTypes.STRING
      },
      province: {
        type: DataTypes.STRING
      }
    });
  
    return Municipality;
  };
  