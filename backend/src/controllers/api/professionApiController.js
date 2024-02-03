const db = require('../../database/models');

const professionApiController = {
  list: async (req, res) => {
    try {
      professions = await db.Profession.findAll();
      if (professions.length > 0) {
        return res.status(200).json({
          professions: professions,
        });
      } else {
        res.status(404).json({ error: 'Sin profesiones.' });
      }
    } catch {
      console.error('Error al consultar profesiones', error);
      res.status(500).json({ error: 'Error al consultar profesiones.' });
    }
  },
  search: async (req, res) => {
    try {
      const applicant = await db.Applicant.findByPk(req.params.id, {
        include: {
          model: db.Profession,
          through: {
            attributer: [],
          },
        },
      });

      const profession = applicant.Professions.map(
        (profession) => profession.name,
      );

      return res.status(200).json({
        profession: profession,
      });
    } catch (error) {
      console.error('Error al consultar una profesión', error);
      res.status(500).json({ error: 'Error al consultar una profesión.' });
    }
  },
};

module.exports = professionApiController;
