# Dokumentacija aplikacije currency exchange calculator

### Namen:

Enostaven Pretvorbeni Izračun: Uporabnikom omogočiti hitro in enostavno pretvarjanje vrednosti ene valute v drugo. Na primer, lahko uporabnik vnese znesek v eni valuti in izbere ciljno valuto ter nato prejme izračunano vrednost v ciljni valuti.

### Navodila za Namestitev

#### Backend Setup

1. **Pojdite v direktorij `backend`**:

   ```bash
   cd backend
   ```

2. **Ustvarite `.env` datoteko**:
   Ustvarite `.env` datoteko v korenskem direktoriju backend-a. V datoteko vpišite naslednje spremenljivke:

   ```dotenv
   DB_USER=
   DB_PASSWORD=
   PORT=
   API_KEY=
   COLLECTION_NAME=
   ```

   Prilagodite vrednosti spremenljivk glede na vaše specifične nastavitve, kot so podatki za dostop do podatkovne baze, vrata, API ključ in ime zbirke (collection).

3. **Namestitev odvisnosti**:
   Za namestitev vseh potrebnih knjižnic, ki so navedene v `package.json`, poženite ukaz:

   ```bash
   npm install
   ```

4. **Zagon strežnika**:
   Ko so odvisnosti nameščene, zaženite backend strežnik s pomočjo:
   ```bash
   npm run serve
   ```
   Ta ukaz bo zagnal vaš Node.js strežnik, ki bo pripravljen sprejemati zahteve na določenem vratu (privzeto je lahko 3000 ali kot je nastavljeno v `.env` datoteki).

### 2. Namestitev in zagon Frontend-a

1. **Pojdite v direktorij `currency-exchange-calculator` (frontend)**:

   ```bash
   cd currency-exchange-calculator
   ```

2. **Namestitev odvisnosti**:
   Enako kot pri backend-u, za namestitev vseh potrebnih knjižnic, poženite ukaz:

   ```bash
   npm install
   ```

3. **Zagon razvojnega strežnika Angular**:
   Za zagon Angular razvojnega strežnika poženite ukaz:

   ```bash
   ng serve
   ```

   Ta ukaz bo zagnal razvojni strežnik Angular aplikacije in jo dostavil na privzeti naslov `http://localhost:4200/`.

   Seveda, tukaj so navodila za uporabo aplikacije Currency Exchange Calculator, oblikovana v Markdown formatu:

### 3. Navodila za Uporabo Aplikacije

1. **Vnesite količino valute**:
   V tekstovno polje vnesite količino valute, ki jo želite pretvoriti. Vrednost naj bo pozitivno celo število ali decimalno število.

2. **Izberite izhodno valuto**:
   V zgornjem spustnem meniju (dropdown) izberite valuto, s katero razpolagate in jo želite pretvoriti v drugo valuto. To je valuta, za katero vnesete količino v prvem koraku.

3. **Izberite ciljno valuto**:
   V spodnjem spustnem meniju (dropdown) izberite valuto, v katero želite pretvoriti vneseno količino. Program bo uporabil trenutne valutne tečaje za izračun.

4. **Osvežite valutne tečaje**:
   Za osvežitev trenutnih valutnih tečajev kliknite na gumb "Refresh currency rates" zgoraj. To bo posodobilo podatke o tečajih iz zunanjega vira.

5. **Prikažite izračun**:
   Program bo samodejno izračunal vrednost pretvorbe in jo prikazal na dnu okna, ki bo vsebovalo vrednost v ciljni valuti glede na izbrano količino in tečaj.

6. **Opombe**:

- Preverite, ali so valutni tečaji osveženi pred izvedbo pretvorbe, še posebej, če so se tečaji spremenili.
