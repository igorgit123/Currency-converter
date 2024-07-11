# Project Roadmap for Currency Exchange Rate Application

### DELO Z GIT:

- Vsaka točka naj bo commit - naj jih bo čim več, saj se tako vidi kaj si razvijal in na kakšen način. (tiste točke ki so smiselne)
- Ustvari si svojo vejo "ime_priimek"

### Dan 1: Priprava okolja in kreacija baze

**Nastavi razvojno okolje:**

- Namesti Node.js in npm. ✅
- Kreiraj novo Node.js aplikacijo z npm init. ✅

**Nastavi bazo podatkov:**

- Namesti MySQL ali MongoDB (glede na preference). ✅
- Ustvari novo bazo podatkov za shranjevanje valutnih tečajev. ✅

**Kreiraj tabele/kolekcije:**

- Ustvari tabelo/kolekcijo za shranjevanje valut (npr. currency_rates), ki vsebuje polja za osnovno valuto, ciljno valuto, tečaj in časovni žig. ✅

### Dan 2: Backend - API povezava in shranjevanje podatkov

**Poveži se z Fixer.io API:**

- Ustvari nov endpoint v Node.js za pridobivanje valutnih tečajev iz Fixer.io API-ja. ⚠️
- Shranjuj pridobljene tečaje v bazo podatkov. ⚠️

**Nastavi avtomatizacijo:**

- Uporabi node-cron za avtomatizirano pridobivanje in shranjevanje valutnih tečajev vsakih nekaj ur. ⚠️

### Dan 3: Backend - CRUD operacije

**Ustvari REST API:**

- Uporabi Express.js za ustvarjanje REST API-ja. ✅
- Implementiraj CRUD operacije za delo z valutami (Create, Read, Update, Delete). ✅
- Ustvari endpoint za pridobivanje tečajev glede na osnovno valuto. ⚠️

**Testiraj REST API:**

- Uporabi Postman ali podobno orodje za testiranje ustvarjenih endpointov in preveri pravilnost CRUD operacij. ✅

### Dan 4: Frontend - Prikaz podatkov

**Postavi osnovni frontend:**

- Uporabi Angular za ustvarjanje nove front-end aplikacije (predlagam da dodaš Bulmo).
- Kreiraj komponente za prikaz in izbor valut.

**Poveži se z backendom:**

- Uporabi Axios ali Fetch API za pridobivanje podatkov iz backend REST API-ja.
- Prikaži valutne tečaje glede na izbrano osnovno valuto.

### Dan 5: Zaključna dela in testiranje

**Izboljšaj uporabniško izkušnjo:**

- Dodaj možnost osveževanja tečajev.
- Dodaj vizualne izboljšave (CSS za boljši izgled).
- Dodaj multi select, da lahko poiščeš samo tiste tečaje, ki si jih želiš prikazati glede na izbrano valuto.

**Testiraj celoten sistem:**

- Preizkusi vse funkcionalnosti od pridobivanja tečajev do prikaza na front-endu.
- Odpravi morebitne napake.

**Dokumentacija:**

- Pripravi kratko dokumentacijo za projekt (opis namena, navodila za namestitev in uporabo).

### Bonus (če boš imel čas):

- Dodaj uporabniški sistem za prijavo in personalizacijo nastavitev.
- Implementiraj grafični prikaz sprememb tečajev skozi čas.
