window.onload = function() {
    let pastraipa = document.getElementById("pastraipa");
    let antraste = document.getElementById("antraste");
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        antraste.style.backgroundColor = "rgb(25, 15, 100)";
        pastraipa.style.color = "blue";
    }
}