console.log("01 - Fonctions");

var nombre1;
var nombre2

nombre1 = 10;
nombre2 = 20;

function additionner(nombre1, nombre2) {
    somme = nombre1 + nombre2;
    return somme;

}
var resultat1 = additionner(nombre1, nombre2);
console.log("resultat1=" + resultat1)
var resultat2 = additionner(nombre1, nombre2);
console.log("resultat2=" + resultat2)

function multiplication(nombre1, nombre2) {
    somme = nombre1 * nombre2;
    return somme;
}
function soustraction(nombre1, nombre2) {
    somme = nombre1 - nombre2;
    return somme;
}
var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3=" + resultat3)

afficherOperation = function (opeartion, nombre1, nombre2) {

    return opeartion.name + "[" + "nb1" + "==" + "<" + nombre1 + ">" + "nb2" + "==" + "<" + nombre2 + ">" + "]" + "==" + opeartion(nombre1, nombre2);

}
console.log(afficherOperation(additionner, 20, 40))
console.log(afficherOperation(multiplication, 10, 20))
console.log(afficherOperation(soustraction, 15, 5))



