var pays = ["nantes", "paris", "saint-nazaire", "angers", "le mans"]

function afficher(element, index, array) {
    console.log(element);
}

pays.forEach(afficher)


var lettreADansToutesLesVilles = function (element, index, array) {
    return element.includes('a')
}
console.log('lettreADansToutesLesVilles ==', pays.every(lettreADansToutesLesVilles))

var auMoinsUneVilleAvecUnTiret = function (element, index, array) {
    return element.includes('-')
}
console.log('auMoinsUneVilleAvecUnTiret ==', pays.some(auMoinsUneVilleAvecUnTiret))

var villesSansTiretSansEspace = function (element, index, array) {
    return !element.includes('-') && !element.includes(' ')
}
console.log('villesSansTiretSansEspace ==', pays.filter(villesSansTiretSansEspace))



var villesMajusculeSeTerminantParS = function (element, index, array) {
    return element.lastIndexOf("s") > 0
}

var villesMaj = function (ville) {
    return ville.toUpperCase()
}

console.log('villesMajusculeSeTerminantParS ==',
    pays.filter(villesMajusculeSeTerminantParS)
        .map(villesMaj))
