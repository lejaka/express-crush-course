const { municipalities, contacts } = require("../models");
const modelsDB = require("../models");
const municipality = require("../models/municipality");
const municipalitiesData = require("../municipalitiesData");
const Contact = modelsDB.contacts;
const Municipality = modelsDB.municipalities;

exports.createMunicipality = (municipality) => {
    return Municipality.create({
      name:municipality.name,
      province: municipality.province,
    })
      .then((municipality) => {
        console.log(">> Created Municipality: " + JSON.stringify(municipality, null, 4));
        return municipality;
      })
      .catch((err) => {
        console.log(">> Error while creating Municipality: ", err);
      });
  };


exports.findMunicipalityById = (municipalityId) => {
    return Municipality.findByPk(municipalityId, { include: ["contacts"]})
    .then((municipality) => {
        return municipality;
    }).catch((err) => {
        console.log(">> Error while finding municipality: ", err);
      });
}

exports.findAll = () => {
    return Municipality.findAll({
      include: ["contacts"],
    }).then((municipalities) => {
      return municipalities;
    });
  };

  