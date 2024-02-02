const db = require('../../database/models');

const applicantApiController = {
    list: async (req,res) => {
        try {
            applicants = await db.Applicant.findAll();
            if( applicants.length > 0){
                applicants = applicants.map(applicant => {
                    applicant.image = "http://localhost:3000/img/applicant/"+applicant.image;
                    return applicant;
                });
                return res.status(200).json({
                    count: applicants.length,
                    applicants: applicants
                });
            }else{
                res.status(404).json({error: "Sin aplicantes."})
            }
        } catch (error) {
            console.error("Error al consultar aplicantes", error);
            res.status(500).json({ error: "Error al consultar aplicantes." });
        }
    },
    show:async (req, res) => {
        try {
            applicant = await db.Applicant.findByPk(req.params.id);
            if(applicant){
                applicant.image = "http://localhost:3000/img/applicant/"+applicant.image;
                return res.status(200).json({
                    applicant: applicant,
                    status: 200
                });
            }else{
                res.status(404).json({error: "Aplicante no encontrado."})
            }
        } catch (error) {
            console.error("Error al consultar un aplicante", error);
            res.status(500).json({ error: "Error al consultar un aplicante." });
        }
    }
}

module.exports = applicantApiController;