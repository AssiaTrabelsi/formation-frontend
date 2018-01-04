var Personne = function (nom, prenom, pseudo, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;


    this.getNomComplet = function () {
        NomComplet = this.nom + ':' + this.prenom + ':' + this.pseudo
        return NomComplet
    }


}

var jules = new Personne('LEMAIRE', 'jules', 'jules77')
var paul = new Personne('LEMAIRE', 'Paul', 'paul44')


function afficherPersonne(personne) {
    console.log(personne.nom)
    console.log(personne.prenom)
    console.log(personne.pseudo)
    console.log(personne.getNomComplet())

}
afficherPersonne(jules)
afficherPersonne(paul)

jules.pseudo = "jules44";
afficherPersonne(jules)


Personne.prototype.age = "Non RENSEIGNE"

console.log(jules.age)

jules.age = 30;

console.log(jules.age)

Personne.prototype.getInitial = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0)


}
console.log(jules.getInitial())



var robert = {
    nom: "LEPREFET", prenom: 'Robert', pseudo: 'robert77', getNomComplet: function () {
        return this.nom + ':' + this.prenom + ':' + this.pseudo
    }
}

console.log(robert.getNomComplet())

afficherPersonne(robert)





function Client(nom, prenom, pseudo, numero) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numero;
    this.getInfos = function () { return this.prenom + ' ' + this.nom + " - Client " + this.numeroClient; }
}



var steve = new Client('LUCAS.', 'steve', 'steve44', 'A01')

afficherPersonne(steve)
console.log(steve.numeroClient)
console.log(steve.getInfos())





