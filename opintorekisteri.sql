-- Creating the database
CREATE DATABASE opintorekisteri;
USE opintorekisteri;

-- Creating the Opiskelija table
CREATE TABLE Opiskelija (
    opiskelija_id INT PRIMARY KEY AUTO_INCREMENT,
    etunimi VARCHAR(50) NOT NULL,
    sukunimi VARCHAR(50) NOT NULL
);

-- Creating the Opintojakso table
CREATE TABLE Opintojakso (
    opintojakso_id INT PRIMARY KEY AUTO_INCREMENT,
    nimi VARCHAR(100) NOT NULL,
    opintopisteet INT NOT NULL
);

-- Creating the Arviointi table with foreign keys
CREATE TABLE Arviointi (
    arviointi_id INT PRIMARY KEY AUTO_INCREMENT,
    opiskelija_id INT,
    opintojakso_id INT,
    arvosana INT CHECK (arvosana >= 0 AND arvosana <= 5),
    pvm DATE,
    FOREIGN KEY (opiskelija_id) REFERENCES Opiskelija(opiskelija_id) ON DELETE CASCADE,
    FOREIGN KEY (opintojakso_id) REFERENCES Opintojakso(opintojakso_id) ON DELETE CASCADE
);

-- Creating a stored procedure to get a student's grades for a specific course
DELIMITER //
CREATE PROCEDURE GetStudentGrades(IN p_opiskelija_id INT, IN p_opintojakso_id INT)
BEGIN
    SELECT o.etunimi, o.sukunimi, oj.nimi AS opintojakso_nimi, a.arvosana, a.pvm
    FROM Opiskelija o
    JOIN Arviointi a ON o.opiskelija_id = a.opiskelija_id
    JOIN Opintojakso oj ON a.opintojakso_id = oj.opintojakso_id
    WHERE o.opiskelija_id = p_opiskelija_id AND a.opintojakso_id = p_opintojakso_id;
END //
DELIMITER ;

-- Inserting sample data for testing
INSERT INTO Opiskelija (etunimi, sukunimi) VALUES
('Matti', 'Meikäläinen'),
('Anna', 'Virtanen');

INSERT INTO Opintojakso (nimi, opintopisteet) VALUES
('Ohjelmointi', 5),
('Tietokannat', 3);

INSERT INTO Arviointi (opiskelija_id, opintojakso_id, arvosana, pvm) VALUES
(1, 1, 4, '2025-05-01'),
(1, 2, 3, '2025-05-15'),
(2, 1, 5, '2025-05-02');