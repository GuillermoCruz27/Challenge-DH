const db = require('../../database/models');

const applicantApiController = {
  list: async (req, res) => {
    try {
      applicants = await db.Applicant.findAll();
      if (applicants.length > 0) {
        applicants = applicants.map((applicant) => {
          applicant.image =
            'http://localhost:3000/img/applicant/' + applicant.image;
          return applicant;
        });
        return res.status(200).json({
          meta: {
            error: false,
            count: applicants.length,
            status: 200,
            url: 'http://localhost:3000/api/applicant',
          },
          data: {
            applicants: applicants,
          }
        });
      } else {
        res.status(404).json({ error: 'Sin aplicantes.' });
      }
    } catch (error) {
      console.error('Error al consultar aplicantes', error);
      res.status(500).json({ error: 'Error al consultar aplicantes.' });
    }
  },
  show: async (req, res) => {
    try {
      applicant = await db.Applicant.findByPk(req.params.id);
      if (applicant) {
        applicant.image =
          'http://localhost:3000/img/applicant/' + applicant.image;
          return res.status(200).json({
            meta: {
              error: false,
              count: 1,
              status: 200,
              url: 'http://localhost:3000/api/applicant/'+req.params.id
            },
            data: applicant
          });
      } else {
        res.status(404).json({ error: 'Aplicante no encontrado.' });
      }
    } catch (error) {
      console.error('Error al consultar un aplicante', error);
      res.status(500).json({ error: 'Error al consultar un aplicante.' });
    }
  },
  store:async (req, res) => {
    try {
        const nuevo = await db.Applicant.create({
            dni: req.body.dni,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            url_linkedin: req.body.url_linkedin || null,
            birthdate: req.body.birthdate,
            gender: req.body.gender,
            image: req.body.image || null
        });
        return res.status(201).json(nuevo);
    } catch (error) {
        console.error("Error al crear un aplicante", error);
        res.status(500).json({ error: "Error al crear un aplicante." });
    }
  },
  update:async (req, res) => {
    try {
        let applicant= await db.Applicant.findByPk(req.params.id);
        if (!applicant) {
            res.status(404).json({ error: "Applicante no encontrado." });
            return;
        }
        await db.Applicant.update({
            dni: req.body.dni,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            url_linkedin: req.body.url_linkedin || applicant.url_linkedin,
            birthdate: req.body.birthdate,
            gender: req.body.gender,
            image: req.body.image || applicant.image
        },{
            where: {
                id: req.params.id
            }
        });
        applicant = await db.Applicant.findByPk(req.params.id);
        return res.status(201).json(applicant);
    } catch (error) {
        console.error("Error al actualizar a un aplicante", error);
        res.status(500).json({ error: "Error al actualizar un a un aplicante." });
    }
  },
  destroy:async (req, res) => {
    try {
        const applicant = await db.Applicant.findByPk(req.params.id);
        if (!applicant) {
          res.status(404).json({ error: "Applicante no encontrado." });
          return;
        }
        await applicant.destroy();
        res.json({ mensaje: "Applicante eliminado con éxito." });
    } catch (error) {
        console.error("Error al eliminar al Applicante: ", error);
        res.status(500).json({ error: "Error al eliminar al Applicante." });
    }
  },
  searchByProfession: async (req, res) => {
    try {
        applicants = await db.Applicant.findAll({
            include: [{
                model: db.Profession,
                attributes: ["id"],
                through: { attributes: [] }
            }],
            where: {
                "$Professions.id$" : req.params.id
            }
        });
        return res.status(200).json({
          meta: {
            error: false,
            count: applicants.length,
            status: 200,
            url: 'http://localhost:3000/api/applicant/search'
          },
          data: {
            applicants: applicants,
          }
        });
    } catch (error) {
        console.error("Error al realizar la busqueda.", error);
        res.status(500).json({error: "Error al realizar la busqueda."});
    }
  }
};

module.exports = applicantApiController;
