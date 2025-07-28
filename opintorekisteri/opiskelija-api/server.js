const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Tietokantayhteys
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'opintorekisteri',
    port: 3306
});

connection.connect(err => {
    if (err) {
        console.error('Tietokantayhteys epäonnistui:', err.message);
        return;
    }
    console.log('Yhteys tietokantaan onnistui');
});

// Hae kaikki opiskelijat
app.get('/opiskelija', (req, res) => {
    connection.query('SELECT * FROM opiskelija', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Lisää uusi opiskelija
app.post('/opiskelija', (req, res) => {
    const { nimi, sahkoposti } = req.body;
    connection.query('INSERT INTO opiskelija (nimi, sahkoposti) VALUES (?, ?)', [nimi, sahkoposti], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, nimi, sahkoposti });
    });
});

// Hae opiskelija ID:llä
app.get('/opiskelija/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM opiskelija WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
});

// Päivitä opiskelija
app.put('/opiskelija/:id', (req, res) => {
    const { id } = req.params;
    const { nimi, sahkoposti } = req.body;
    connection.query('UPDATE opiskelija SET nimi = ?, sahkoposti = ? WHERE id = ?', [nimi, sahkoposti, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id, nimi, sahkoposti });
    });
});

// Poista opiskelija
app.delete('/opiskelija/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM opiskelija WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ viesti: 'Opiskelija poistettu' });
    });
});

// Hae opiskelijan arvioinnit stored proceduren avulla
app.get('/opiskelija/:id/arviointi', (req, res) => {
    const { id } = req.params;
    connection.query('CALL HaeOpiskelijanArvioinnit(?)', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
});

// Lisää uusi opintojakso
app.post('/opintojakso', (req, res) => {
    const { nimi, kuvaus } = req.body;
    connection.query('INSERT INTO opintojakso (nimi, kuvaus) VALUES (?, ?)', [nimi, kuvaus], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, nimi, kuvaus });
    });
});

// Hae kaikki opintojaksot
app.get('/opintojakso', (req, res) => {
    connection.query('SELECT * FROM opintojakso', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.get('/opintojakso/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM opintojakso WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!results[0]) return res.status(404).json({ error: 'Opintojaksoa ei löydy' });
        res.json(results[0]);
    });
});

// Päivitä opintojakso
app.put('/opintojakso/:id', (req, res) => {
    const { id } = req.params;
    const { nimi, kuvaus } = req.body;
    connection.query('UPDATE opintojakso SET nimi = ?, kuvaus = ? WHERE id = ?', [nimi, kuvaus, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id, nimi, kuvaus });
    });
});

// Poista opintojakso
app.delete('/opintojakso/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM opintojakso WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ viesti: 'Opintojakso poistettu' });
    });
});

// Lisää uusi arviointi
app.post('/arviointi', (req, res) => {
    const { opiskelija_id, opintojakso_id, arvosana } = req.body;
    connection.query('INSERT INTO arviointi (opiskelija_id, opintojakso_id, arvosana) VALUES (?, ?, ?)', [opiskelija_id, opintojakso_id, arvosana], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, opiskelija_id, opintojakso_id, arvosana });
    });
});

// Hae kaikki arvioinnit
app.get('/arviointi', (req, res) => {
    connection.query('SELECT * FROM arviointi', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Päivitä arviointi
app.put('/arviointi/:id', (req, res) => {
    const { id } = req.params;
    const { opiskelija_id, opintojakso_id, arvosana } = req.body;
    connection.query('UPDATE arviointi SET opiskelija_id = ?, opintojakso_id = ?, arvosana = ? WHERE id = ?', [opiskelija_id, opintojakso_id, arvosana, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id, opiskelija_id, opintojakso_id, arvosana });
    });
});

// Poista arviointi
app.delete('/arviointi/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM arviointi WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ viesti: 'Arviointi poistettu' });
    });
});

// Käynnistä palvelin
app.listen(3000, () => {
    console.log('Palvelin käynnissä portissa 3000');
});