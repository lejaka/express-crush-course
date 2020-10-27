const municipalities = require("../municipalitiesData");

module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("contact", {
      name: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      phone_number: {
        type: DataTypes.STRING
      },
      fax_number: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    });
  
    return Contact;
  };
  