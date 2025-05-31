const pool = require('../config/db');

// Opiskelija CRUD
exports.createOpiskelija = async (etunimi, sukunimi) => {
    const [result] = await pool.query('INSERT INTO Opiskelija (etunimi, sukunimi) VALUES (?, ?)', [etunimi, sukunimi]);
    return result.insertId;
};

exports.getAllOpiskelijat = async () => {
    const [rows] = await pool.query('SELECT * FROM Opiskelija');
    return rows;
};

exports.getOpiskelijaById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM Opiskelija WHERE opiskelija_id = ?', [id]);
    return rows[0];
};

exports.updateOpiskelija = async (id, etunimi, sukunimi) => {
    const [result] = await pool.query('UPDATE Opiskelija SET etunimi = ?, sukunimi = ? WHERE opiskelija_id = ?', [etunimi, sukunimi, id]);
    return result.affectedRows;
};

exports.deleteOpiskelija = async (id) => {
    const [result] = await pool.query('DELETE FROM Opiskelija WHERE opiskelija_id = ?', [id]);
    return result.affectedRows;
};

// Opintojakso CRUD
exports.createOpintojakso = async (nimi, opintopisteet) => {
    const [result] = await pool.query('INSERT INTO Opintojakso (nimi, opintopisteet) VALUES (?, ?)', [nimi, opintopisteet]);
    return result.insertId;
};

exports.getAllOpintojaksot = async () => {
    const [rows] = await pool.query('SELECT * FROM Opintojakso');
    return rows;
};

exports.getOpintojaksoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM Opintojakso WHERE opintojakso_id = ?', [id]);
    return rows[0];
};

exports.updateOpintojakso = async (id, nimi, opintopisteet) => {
    const [result] = await pool.query('UPDATE Opintojakso SET nimi = ?, opintopisteet = ? WHERE opintojakso_id = ?', [nimi, opintopisteet, id]);
    return result.affectedRows;
};

exports.deleteOpintojakso = async (id) => {
    const [result] = await pool.query('DELETE FROM Opintojakso WHERE opintojakso_id = ?', [id]);
    return result.affectedRows;
};

// Arviointi CRUD
exports.createArviointi = async (opiskelija_id, opintojakso_id, arvosana, pvm) => {
    const [result] = await pool.query('INSERT INTO Arviointi (opiskelija_id, opintojakso_id, arvosana, pvm) VALUES (?, ?, ?, ?)', [opiskelija_id, opintojakso_id, arvosana, pvm]);
    return result.insertId;
};

exports.getAllArvioinnit = async () => {
    const [rows] = await pool.query('SELECT * FROM Arviointi');
    return rows;
};

exports.getArviointiById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM Arviointi WHERE arviointi_id = ?', [id]);
    return rows[0];
};

exports.updateArviointi = async (id, arvosana, pvm) => {
    const [result] = await pool.query('UPDATE Arviointi SET arvosana = ?, pvm = ? WHERE arviointi_id = ?', [arvosana, pvm, id]);
    return result.affectedRows;
};

exports.deleteArviointi = async (id) => {
    const [result] = await pool.query('DELETE FROM Arviointi WHERE arviointi_id = ?', [id]);
    return result.affectedRows;
};

// Stored Procedure call
exports.getStudentGrades = async (opiskelija_id, opintojakso_id) => {
    const [rows] = await pool.query('CALL GetStudentGrades(?, ?)', [opiskelija_id, opintojakso_id]);
    return rows[0];
};