window.onload = function() {
    let pastraipa = document.getElementById("pastraipa");
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        togglePasleptaKlase(pastraipa);
    }
}


function togglePasleptaKlase(elementas) {
    if (elementas.classList.contains("pasleptas")) {
        elementas.classList.remove("pasleptas");
    }
    else {
        pastraipa.classList.add("pasleptas");
    }
}