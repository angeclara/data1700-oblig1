
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
    kundelogg(kunde);
    console.log(kunde);
}

function kundelogg(kunde) {
    let logg = "<ol>";
    for(let i in kunde) {
        logg += "<li>" + "Film: " + kunde[i].filmName + " x" + kunde[i].amountKey + "<br>"+
            "Kunde: " + kunde[i].nameKey + "<br>" + "Telefon-nummer: " + kunde[i].numberKey +
            "<br>" + "E-mail: " + kunde[i].emailKey + "</li>"
    }
    logg += "</ol>";
    document.getElementById("b1").innerHTML = logg;
    console.log(logg);
}

function slett() {
    document.getElementById("b1").innerHTML = "";
    kunde.splice(0, kunde.length);

}