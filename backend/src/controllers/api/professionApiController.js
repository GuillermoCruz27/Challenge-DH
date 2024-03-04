const { Profession } = require('../../database/models');

const professionApiController = {
  list: async (req, res) => {
    try {
      professions = await Profession.findAll();
      if (professions.length > 0) {
        return res.status(200).json({
          meta: {
            error: false,
            count: professions.length,
            status: 200,
            url: 'http://localhost:3000/api/profession/',
          },
          data: {
            professions: professions,
          },
        });
      } else {
        res.status(404).json({ error: 'Sin profesiones.' });
      }
    } catch(error) {
      console.error('Error al consultar profesiones', error);
      res.status(500).json({ error: 'Error al consultar profesiones.' });
    }
  },
};

module.exports = professionApiController;
