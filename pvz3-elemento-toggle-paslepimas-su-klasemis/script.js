window.onload = function() {
    let pastraipa = document.getElementById("pastraipa");
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        togglePasleptaKlase(pastraipa);
    }
}


/**
 * Funkcija prideda arba nuime klasę "paslėptas" nuo HTML elemento.
 * Ta klasė, jeigu yra uždėta ant elemento - jį paslepia.
 * Jeigu elementas tą klasę turėjo, tai ši funkcija ją nuima (elementą parodo)
 * Jeigu elementas tos klasės neturėjo, tai ši funkcija ją prideda (elementą paslepia)
 * @param {*} elementas HTML elementas, kuriam reikia pridėti arba nuimti paslėptas klasę
 */
function togglePasleptaKlase(elementas) {
    if (elementas.classList.contains("pasleptas")) {
        elementas.classList.remove("pasleptas");
    }
    else {
        pastraipa.classList.add("pasleptas");
    }
}