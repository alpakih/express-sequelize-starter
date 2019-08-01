var compare = require('../models').Compare

module.exports = {
    create(req, res) {
        console.log(compare);
        // return res.status(200).send(compare);
        return compare.create({
            nik: req.body.nik,
            selfieImage: req.body.selfie_image,
            ktpImage: req.body.ktp_image
        })
        .then(compare => res.status(201).send(compare))
        .catch(error => res.status(400).send(error));
    },

    getById(req, res) {
        return compare.findAll({
            where:{
                id:req.params.id
            },
        })
        .then(compare => res.status(201).send(compare))
        .catch(error => res.status(400).send(error));
    }
}
