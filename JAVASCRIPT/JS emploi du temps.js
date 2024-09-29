function Bouton1() {
    var image = document.getElementById("semaineA");
    var autreimage = document.getElementById("semaineB")

    autreimage.style.opacity = "0";
    autreimage.style.height = "0";
    autreimage.style.width = "0";
    image.style.opacity = "1";
    image.style.height = "auto";
    image.style.width = "130vh";
}

function Bouton2() {
    var image = document.getElementById("semaineB");
    var autreimage = document.getElementById("semaineA")

    autreimage.style.opacity = "0";
    autreimage.style.height = "0";
    autreimage.style.width = "0";
    image.style.opacity = "1";
    image.style.height = "auto";
    image.style.width = "130vh";
}