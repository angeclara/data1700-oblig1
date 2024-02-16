
const kunde = [];
function kjop() {
    let film = document.getElementById("film").value;
    let fornavn = document.getElementById("fNavn").value;
    let etternavn = document.getElementById("eNavn").value;
    let telefonnummer = document.getElementById("num").value;
    let epost = document.getElementById("eMail").value;
    let antall = document.getElementById("antall").value;
    kunde.push({
        filmName: film,
        amountKey : antall,
        nameKey : fornavn + " " + etternavn,
        numberKey : telefonnummer,
        emailKey: epost
    })
    console.log(kunde);
}