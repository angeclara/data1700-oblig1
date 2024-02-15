let antall = document.getElementById(antall);
let i = 0;
function billett(film, fornavn, etternavn, telefonnr, email) {
    this.film = film;
    this.fornavn = fornavn;
    this.etternavn = etternavn;
    this.telefonnr = telefonnr;
    this.email = email;
}
const kunde = [];
function kjøp() {
    kunde[i] = billett(document.getElementById("film").value,
        document.getElementById("fornavn").value,
        document.getElementById("etternavn").value,
        document.getElementById(number).value,
        document.getElementById("email").value,);
}