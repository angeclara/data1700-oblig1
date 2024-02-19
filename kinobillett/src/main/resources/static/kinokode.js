
const kunde = []; // definerer et tomt array som skal fylles med kunder senere

/* Her lager jeg en funksjon kalt kjop() som skal brukes for å fylle arrayet og
sjekke input bokser for telefonnummer og epost
 */
function kjop() {
    // Her henter jeg id fra HTML og definerer variabler for dem.
    let film = document.getElementById("film").value;
    let fornavn = document.getElementById("fNavn").value;
    let etternavn = document.getElementById("eNavn").value;
    let telefonnummer = document.getElementById("num").value;
    let epost = document.getElementById("eMail").value;
    let antall = document.getElementById("antall").value;

    let ifValid = true;

    /* Her har jeg email validering som jeg har laget ved bruk av et regEX
        mønster jeg fikk fra https://regexr.com/3e48o :)
         */
    const emailPattern = /^[\w-\.]+@[\w-]+\.+[\w-]{2,4}$/g;
    let emailErrorMessage = document.getElementById("emailError");
    /* setningen sier at hvis testen feiler så skal <span> elementet mitt i HTML-en dukke opp og return false
    for å hindre verdien i å være gyldig dermed ikke gyldig i arrayet.
     */
    if (!emailPattern.test(epost) || !epost) {
        emailErrorMessage.innerHTML = "Vennligst skriv inn en gyldig e-postadresse.";
        ifValid = false;

    } else {
        emailErrorMessage.innerHTML = ""; // hindrer meldingen i å komme om det er riktig validering
    }

    // telefonnummer validering ved hjelp av RegEx igjen, 8 sifferet telefonnummer standard i Norge.
    const numPattern = /^\d{8}$/g;
    let numErrorMessage = document.getElementById("numError");
    if (!numPattern.test(telefonnummer) || !telefonnummer) {
        numErrorMessage.innerHTML = "Vennligst skriv inn et gyldig telefonnummer.";
        ifValid = false;
    } else {
        numErrorMessage.innerHTML = "";
    }

    // denne setningen skal sjekke om alle inputbokser er fylt ut, og gir med popup boks om de ikke er det.
    if (!film || !fornavn || !etternavn || !telefonnummer || !epost || !antall) {
        alert("Vennligst fyll ut alle feltene.");
        ifValid = false;
    }

    // jeg la til denne da feilmeldingene kun vill komme frem en gang dette sjekker en alle
    // valideringene og slå først sjema ut som ugyldig når alle valideringer er sjekket og ikke før.
    if (!ifValid) {
        return  false;
    }

    kunde.push({
        filmName: film,
        amountKey: antall,
        nameKey: fornavn + " " + etternavn,
        numberKey: telefonnummer,
        emailKey: epost
    });

    // her kaller jeg på funskjonen kundelogg for at listen skal komme frem når funskjon kjop er i bruk
    kundelogg(kunde);
    console.log(kunde);
}


// Denne funskjonen lager listen med kunder/biletter
function kundelogg(kunde) {
    let logg = "<ol>"; // Her starter jeg med å definere en varibel av uordnet liste.
    // nå løper jeg gjennom arrayet med en for løkke of fyller listen.
    for(let i in kunde) {
        logg += "<li>" + "Film: " + kunde[i].filmName + " x" + kunde[i].amountKey + "<br>"+
            "Kunde: " + kunde[i].nameKey + "<br>" + "Telefon-nummer: " + kunde[i].numberKey +
            "<br>" + "E-mail: " + kunde[i].emailKey + "</li>"
    }
    logg += "</ol>";
    // dette er hvordan listen kommer frem
    document.getElementById("b1").innerHTML = logg;
    console.log(logg);
}


// dette er en funskjon jeg har laget for å tømme arrayet og slette listen når knappen er trykket på
// jeg bruker funksjon splice() og starter fra 0 til array lengden for å tømme arreyet.
function slett() {
    document.getElementById("b1").innerHTML = "";
    kunde.splice(0, kunde.length);

}