document.addEventListener('DOMContentLoaded', function () {
    var boutonCopier1 = document.getElementById('boutonCopier_1');
    var contenu1 = document.getElementById("contenu_1");

    boutonCopier1.addEventListener('click', function () {
        copierTexte1(contenu1.textContent.trimStart().trimEnd());
        alert('Texte copié !');
    });

    function copierTexte1(texte1) {
        var textarea1 = document.createElement('textarea');
        textarea1.value = texte1;
        document.body.appendChild(textarea1);
        textarea1.select();
        document.execCommand('copy');
        document.body.removeChild(textarea1);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var boutonCopier2 = document.getElementById('boutonCopier_2');
    var contenu2 = document.getElementById("contenu_2");

    boutonCopier2.addEventListener('click', function () {
        copierTexte2(contenu2.textContent.trimStart().trimEnd());
        alert('Texte copié !');
    });

    function copierTexte2(texte2) {
        var textarea2 = document.createElement('textarea');
        textarea2.value = texte2;
        document.body.appendChild(textarea2);
        textarea2.select();
        document.execCommand('copy');
        document.body.removeChild(textarea2);
    }
});