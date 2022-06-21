window.onload = function() {
    const mygtukai = document.getElementsByClassName("mygtukas");
    const turiniai = document.getElementsByClassName("turinys");

    console.log(mygtukai);
    console.log(turiniai);

    for (let i = 0; i < mygtukai.length; i++) {
        mygtukai[i].onclick = function() {
            pakeiciaTurini(turiniai, turiniai[i]);
        }
        
    }
}

function toggleActive(elementas) {
    if (elementas.classList.contains("active")) {
        elementas.classList.remove("active");
    }
}

function panaikinaVisiemsActive(elementuMasyvas) {
    for (let i = 0; i < elementuMasyvas.length; i++) {
        toggleActive(elementuMasyvas[i]);
    }
}


function pakeiciaTurini(elementuMasyvas, elementas) {
    panaikinaVisiemsActive(elementuMasyvas);
    elementas.classList.add("active");
}