window.onload = function() {
    const mygtukai = document.getElementsByClassName("mygtukas");
    const turiniai = document.getElementsByClassName("turinys");

    console.log(mygtukai);
    console.log(turiniai);

    for (let i = 0; i < mygtukai.length; i++) {
        mygtukai[i].onclick = function() {
        //    pakeiciaTurini(turiniai, turiniai[i]);
            pakeiciaTurini2(turiniai, turiniai[i]);
        }
        
    }
}

/**
 * Funkcija nuima elementui active, jeigu jis turi active
 * @param {*} elementas - elementas, kuriam reikia nuimti active.
 */
function panaikintiActive(elementas) {
    if (elementas.classList.contains("active")) {
        elementas.classList.remove("active");
    }
}

/**
 * Funkcija pereina per masyvą ir patikrina, jeigu elementas turi "active", tai jam ir nuima "active"
 * @param {*} elementuMasyvas - visi elementai, kuriems reikia nuimti active
 */
function panaikinaVisiemsActive(elementuMasyvas) {
    for (let i = 0; i < elementuMasyvas.length; i++) {
        panaikintiActive(elementuMasyvas[i]);
    }
}

/**
 * Panaudoja funkciją, kuri visiems patikrina ar turi "active" ir nuima.
 * Tada uždeda vienam, kuriam reikia, "active"
 * @param {*} elementuMasyvas - visi elementai
 * @param {*} elementas - vienas, kuriam reikia active.
 */
function pakeiciaTurini(elementuMasyvas, elementas) {
    panaikinaVisiemsActive(elementuMasyvas);
    elementas.classList.add("active");
}



//--------------------Supaprastintas variantas----------------------------------//

/**
 * Funkcija pereina per visus elementus ir jiems nuima klasę "active". Netikrina ar turi, kadangi tai nebūtina (nereikia toggle), tai tiesiog nuima visiems.
 * Toliau, padaro tam vienam elementui "active", kurį turi rodyti
 * @param {*} elementuMasyvas - visi elementai, kurie yra tabo turiniai
 * @param {*} elementas - vienas elementas (tabo turinys), kurį dabar reikia rodyti. Jį gauna iš mygtuko onclicko, pagal kurį mygtuką paspaudė, tai tą turinį (su tuo pačiu indeksu) paduoda ir šitai funkcijai
 */
function pakeiciaTurini2(elementuMasyvas, elementas) {
    for (let i = 0; i < elementuMasyvas.length; i++) {
        elementuMasyvas[i].classList.remove("active");
    }
    elementas.classList.add("active");
}