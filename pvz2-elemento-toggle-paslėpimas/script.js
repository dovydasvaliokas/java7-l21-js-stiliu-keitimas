window.onload = function () {
    let mygtukas = document.getElementById("mygtukas");
    let pastraipa = document.getElementById("pastraipa");

    mygtukas.onclick = function() {
        togglePaslepti(pastraipa);
    }
}


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