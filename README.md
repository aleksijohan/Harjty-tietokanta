https://www.youtube.com/watch?v=deT74QnmbuE&ab_channel=Allunen

# Opintorekisteri - Sovelluksen dokumentaatio

Tämä ohjelma on suunniteltu hallinnoimaan opiskelijoiden, opintojaksojen ja niiden arviointien tietoja. Sovellus on toteutettu web-pohjaisena palvelimena, joka käyttää Node.js- ja Express-kehikkoa sekä MySQL-tietokantaa taustalla. Alla kuvataan ohjelman toiminta, rakenne ja käyttöohjeet.

## Sovelluksen toiminta

Sovellus mahdollistaa opiskelijoiden, opintojaksojen ja arviointien täydellisen hallinnoinnin neljän perustoiminnon (CRUD: Create, Read, Update, Delete) avulla. Käyttäjä voi lisätä uusia tietueita, hakea olemassa olevia, päivittää tietoja ja poistaa tarpeettomia merkintöjä. Lisäksi ohjelma tukee erikoishakua, jolla voi tarkastella tietyn opiskelijan arviointeja suoraan tietokannasta.

### Päätoiminnot
- **Opiskelijoiden hallinta**: Voit luoda uusia opiskelijoita (esim. nimi ja sähköpostiosoite), hakea yksittäisen opiskelijan tiedot, päivittää niiden tietoja tai poistaa opiskelijan kokonaan.
- **Opintojaksojen hallinta**: Mahdollistaa opintojaksojen (esim. nimi ja kuvaus) lisäämisen, hakemisen, muokkaamisen ja poistamisen.
- **Arviointien hallinta**: Linkittää opiskelijat ja opintojaksot arviointeihin (esim. arvosana), ja näitä voi lisätä, hakea, muokata tai poistaa.
- **Erikoishaku**: Tarjoaa mahdollisuuden hakea tietyn opiskelijan kaikki arvioinnit kerralla.

### Tekninen rakenne
Ohjelma koostuu seuraavista osista:
- **Palvelin**: Käyttää Node.js-ympäristöä ja Express-kehikkoa reititykseen ja pyyntöjen käsittelyyn.
- **Tietokanta**: MySQL-tietokanta (`opintorekisteri`) sisältää kolme taulua: `opiskelija`, `opintojakso` ja `arviointi`. Taulut on yhdistetty vierasavainten avulla.
- **Reitit**: Jokaiselle taululle on määritelty omat pääreitit (`/opiskelija`, `/opintojakso`, `/arviointi`) sekä alireitti (`/opiskelija/:id/arviointi`) erikoishakuun.

### Edellytykset
- Node.js asennettuna.
- MySQL-palvelin (esim. XAMPP) asennettuna ja käynnissä.
- phpMyAdmin tai vastaava työkalu tietokannan hallintaan.