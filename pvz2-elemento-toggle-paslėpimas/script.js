window.onload = function () {
    let mygtukas = document.getElementById("mygtukas");
    let pastraipa = document.getElementById("pastraipa");

    mygtukas.onclick = function() {
        togglePaslepti(pastraipa);
    }
}


/**
 * Funkcija paslėpia arba parodo elementą, atitinkamai nuo to koks prieš tai jis buvo.
 * Jeigu buvo paslėptas - jį parodo.
 * Jeigu buvo rodomas - jį paslepia.
 * @param {*} elementas - elementas, kurį reikia arba paslėpti, arba parodyti.
 */
function togglePaslepti(elementas) {
    if (elementas.style.display != "none") {
        console.log("adsasdasd");
        elementas.style.display = "none";
    }
    else {
        console.log("thyutreutyiuty");
        elementas.style.display = "initial";
    }
}