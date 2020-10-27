const modelsDB = require("../models");
const Contact = modelsDB.contacts;
const Municipality = modelsDB.municipalities;

exports.createContact = (municipalityId, contact) => {
    return Contact.create({
        name: contact.name,
        title: contact.title,
        phone_number: contact.phone_number,
        fax_number: contact.fax_number,
        email: contact.email,
        municipalityId: municipalityId
    })
        .then((contact) => {
            console.log(">> Created Contact: " + JSON.stringify(contact, null, 4));
            return contact;
        })
        .catch((err) => {
            console.log(">> Error while creating Contact: ", err);
        });
};


exports.findContactById = (id) => {
    return Contact.findByPk(id, { include: ["municipality"] })
        .then((contact) => {
            return contact;
        }).catch((err) => {
            console.log(">> Error while finding contact: ", err);
          });
      };



