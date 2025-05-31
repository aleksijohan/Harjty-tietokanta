const OpintorekisteriModel = require('../models/OpintorekisteriModel');

// Opiskelija CRUD
exports.createOpiskelija = async (req, res) => {
    try {
        const { etunimi, sukunimi } = req.body;
        const id = await OpintorekisteriModel.createOpiskelija(etunimi, sukunimi);
        res.status(201).json({ id, etunimi, sukunimi });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOpiskelijat = async (req, res) => {
    try {
        const opiskelijat = await OpintorekisteriModel.getAllOpiskelijat();
        res.json(opiskelijat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOpiskelija = async (req, res) => {
    try {
        const opiskelija = await OpintorekisteriModel.getOpiskelijaById(req.params.id);
        if (!opiskelija) return res.status(404).json({ error: 'Opiskelija not found' });
        res.json(opiskelija);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOpiskelija = async (req, res) => {
    try {
        const { etunimi, sukunimi } = req.body;
        const affectedRows = await OpintorekisteriModel.updateOpiskelija(req.params.id, etunimi, sukunimi);
        if (!affectedRows) return res.status(404).json({ error: 'Opiskelija not found' });
        res.json({ message: 'Opiskelija updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOpiskelija = async (req, res) => {
    try {
        const affectedRows = await OpintorekisteriModel.deleteOpiskelija(req.params.id);
        if (!affectedRows) return res.status(404).json({ error: 'Opiskelija not found' });
        res.json({ message: 'Opiskelija deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Opintojakso CRUD
exports.createOpintojakso = async (req, res) => {
    try {
        const { nimi, opintopisteet } = req.body;
        const id = await OpintorekisteriModel.createOpintojakso(nimi, opintopisteet);
        res.status(201).json({ id, nimi, opintopisteet });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOpintojaksot = async (req, res) => {
    try {
        const opintojaksot = await OpintorekisteriModel.getAllOpintojaksot();
        res.json(opintojaksot);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOpintojakso = async (req, res) => {
    try {
        const opintojakso = await OpintorekisteriModel.getOpintojaksoById(req.params.id);
        if (!opintojakso) return res.status(404).json({ error: 'Opintojakso not found' });
        res.json(opintojakso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOpintojakso = async (req, res) => {
    try {
        const { nimi, opintopisteet } = req.body;
        const affectedRows = await OpintorekisteriModel.updateOpintojakso(req.params.id, nimi, opintopisteet);
        if (!affectedRows) return res.status(404).json({ error: 'Opintojakso not found' });
        res.json({ message: 'Opintojakso updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOpintojakso = async (req, res) => {
    try {
        const affectedRows = await OpintorekisteriModel.deleteOpintojakso(req.params.id);
        if (!affectedRows) return res.status(404).json({ error: 'Opintojakso not found' });
        res.json({ message: 'Opintojakso deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Arviointi CRUD
exports.createArviointi = async (req, res) => {
    try {
        const { opiskelija_id, opintojakso_id, arvosana–

System: It looks like the artifact content for `OpintorekisteriController.js` was cut off mid-sentence in the `createArviointi` function. Since you requested a complete REST-API and MVC application, I’ll provide the corrected and complete version of the `OpintorekisteriController.js` file, ensuring all CRUD operations for `Arviointi` are included, and maintaining the same artifact ID as the previous one to reflect that this is an update to the same file. I’ll also ensure the artifact contains the full controller logic as per the requirements, without repeating the other files unless necessary.

### Updated Controller (controllers/OpintorekisteriController.js)
This artifact completes the controller implementation, including all CRUD operations for `Opiskelija`, `Opintojakso`, and `Arviointi`, as well as the stored procedure call, following the MVC structure and REST-API requirements.

<xaiArtifact artifact_id="5b26514f-a414-4e8b-883f-ffbf4fa8f9b8" artifact_version_id="d630b837-7e10-4fcb-8fc5-08dde53b8a64" title="OpintorekisteriController.js" contentType="text/javascript">
const OpintorekisteriModel = require('../models/OpintorekisteriModel');

// Opiskelija CRUD
exports.createOpiskelija = async (req, res) => {
    try {
        const { etunimi, sukunimi } = req.body;
        if (!etunimi || !sukunimi) {
            return res.status(400).json({ error: 'Etunimi and sukunimi are required' });
        }
        const id = await OpintorekisteriModel.createOpiskelija(etunimi, sukunimi);
        res.status(201).json({ id, etunimi, sukunimi });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOpiskelijat = async (req, res) => {
    try {
        const opiskelijat = await OpintorekisteriModel.getAllOpiskelijat();
        res.json(opiskelijat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOpiskelija = async (req, res) => {
    try {
        const opiskelija = await OpintorekisteriModel.getOpiskelijaById(req.params.id);
        if (!opiskelija) return res.status(404).json({ error: 'Opiskelija not found' });
        res.json(opiskelija);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOpiskelija = async (req, res) => {
    try {
        const { etunimi, sukunimi } = req.body;
        if (!etunimi || !sukunimi) {
            return res.status(400).json({ error: 'Etunimi and sukunimi are required' });
        }
        const affectedRows = await OpintorekisteriModel.updateOpiskelija(req.params.id, etunimi, sukunimi);
        if (!affectedRows) return res.status(404).json({ error: 'Opiskelija not found' });
        res.json({ message: 'Opiskelija updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOpiskelija = async (req, res) => {
    try {
        const affectedRows = await OpintorekisteriModel.deleteOpiskelija(req.params.id);
        if (!affectedRows) return res.status(404).json({ error: 'Opiskelija not found' });
        res.json({ message: 'Opiskelija deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Opintojakso CRUD
exports.createOpintojakso = async (req, res) => {
    try {
        const { nimi, opintopisteet } = req.body;
        if (!nimi || !opintopisteet) {
            return res.status(400).json({ error: 'Nimi and opintopisteet are required' });
        }
        const id = await OpintorekisteriModel.createOpintojakso(nimi, opintopisteet);
        res.status(201).json({ id, nimi, opintopisteet });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOpintojaksot = async (req, res) => {
    try {
        const opintojaksot = await OpintorekisteriModel.getAllOpintojaksot();
        res.json(opintojaksot);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOpintojakso = async (req, res) => {
    try {
        const opintojakso = await OpintorekisteriModel.getOpintojaksoById(req.params.id);
        if (!opintojakso) return res.status(404).json({ error: 'Opintojakso not found' });
        res.json(opintojakso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOpintojakso = async (req, res) => {
    try {
        const { nimi, opintopisteet } = req.body;
        if (!nimi || !opintopisteet) {
            return res.status(400).json({ error: 'Nimi and opintopisteet are required' });
        }
        const affectedRows = await OpintorekisteriModel.updateOpintojakso(req.params.id, nimi, opintopisteet);
        if (!affectedRows) return res.status(404).json({ error: 'Opintojakso not found' });
        res.json({ message: 'Opintojakso updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOpintojakso = async (req, res) => {
    try {
        const affectedRows = await OpintorekisteriModel.deleteOpintojakso(req.params.id);
        if (!affectedRows) return res.status(404).json({ error: 'Opintojakso not found' });
        res.json({ message: 'Opintojakso deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Arviointi CRUD
exports.createArviointi = async (req, res) => {
    try {
        const { opiskelija_id, opintojakso_id, arvosana, pvm } = req.body;
        if (!opiskelija_id || !opintojakso_id || !arvosana || !pvm) {
            return res.status(400).json({ error: 'Opiskelija_id, opintojakso_id, arvosana, and pvm are required' });
        }
        if (arvosana < 0 || arvosana > 5) {
            return res.status(400).json({ error: 'Arvosana must be between 0 and 5' });
        }
        const id = await OpintorekisteriModel.createArviointi(opiskelija_id, opintojakso_id, arvosana, pvm);
        res.status(201).json({ id, opiskelija_id, opintojakso_id, arvosana, pvm });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllArvioinnit = async (req, res) => {
    try {
        const arvioinnit = await OpintorekisteriModel.getAllArvioinnit();
        res.json(arvioinnit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArviointi = async (req, res) => {
    try {
        const arviointi = await OpintorekisteriModel.getArviointiById(req.params.id);
        if (!arviointi) return res.status(404).json({ error: 'Arviointi not found' });
        res.json(arviointi);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateArviointi = async (req, res) => {
    try {
        const { arvosana, pvm } = req.body;
        if (!arvosana || !pvm) {
            return res.status(400).json({ error: 'Arvosana and pvm are required' });
        }
        if (arvosana < 0 || arvosana > 5) {
            return res.status(400).json({ error: 'Arvosana must be between 0 and 5' });
        }
        const affectedRows = await OpintorekisteriModel.updateArviointi(req.params.id, arvosana, pvm);
        if (!affectedRows) return res.status(404).json({ error: 'Arviointi not found' });
        res.json({ message: 'Arviointi updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteArviointi = async (req, res) => {
    try {
        const affectedRows = await OpintorekisteriModel.deleteArviointi(req.params.id);
        if (!affectedRows) return res.status(404).json({ error: 'Arviointi not found' });
        res.json({ message: 'Arviointi deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Stored Procedure endpoint
exports.getStudentGrades = async (req, res) => {
    try {
        const { opiskelija_id, opintojakso_id } = req.query;
        if (!opiskelija_id || !opintojakso_id) {
            return res.status(400).json({ error: 'Opiskelija_id and opintojakso_id are required' });
        }
        const grades = await OpintorekisteriModel.getStudentGrades(opiskelija_id, opintojakso_id);
        res.json(grades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};