// Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.

let tableauNombres = []

for (let i = 1; i <= 10; i++){
    tableauNombres.push(i)
}

for (let i = 0; i < tableauNombres.length; i++) {
    console.log(tableauNombres[i]);
}


// Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console.

let tableauJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

console.log(tableauJours[0])


// Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console.

let tableauNombresPairs = [2, 4, 6, 8, 10]
let resultatCalcul = 0

for (let i = 0; i < tableauNombresPairs.length; i++) {
    resultatCalcul = resultatCalcul + tableauNombresPairs[i]
}

console.log(resultatCalcul)


// Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console.

let tableauFruits = ["Pomme", "Pêche", "Poire", "Abricot", "Orange"]

tableauFruits.push("Cerise")

console.log(tableauFruits)


// Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console.

let tableauNotes = [15, 8, 16, 13, 10]
let moyenne = 0

for (let i = 0; i < tableauNotes.length; i++) {
    moyenne = moyenne + tableauNotes[i]
}

console.log(moyenne / tableauNotes.length)


// Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau.

let tableauOiseaux = ["Merle", "Rossignol", "Pigeon", "Colibri", "Pie"]

if (tableauOiseaux.indexOf('Pigeon') == -1){
    console.log("Cet oiseau n'existe pas dans le tableau")
} else {
    console.log("Cet oiseau est présent dans le tableau")
}


// Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console.

let tableauPays = ["France", "Allemagne", "Italie", "Espagne", "Suisse"]

console.log(tableauPays.sort())


// Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau.

let tableauMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

console.log(tableauMois[2])


// Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console.

let tableauNombresAléatoires = []

for (let i = 0; i < 10; i++) {
    tableauNombresAléatoires.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Valeur minimale : "+ Math.min(...tableauNombresAléatoires))
console.log("Valeur minimale : "+ Math.max(...tableauNombresAléatoires))


// Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console.

let tableauPhrases = [
    "Je suis en train de coder en JS.",
    "Je tape sur un ordinateur.",
    "Il fait assez gris aujourd'hui.",
    "Mon école est l'ESGI.",
    "Le temps passe vite."
];
  
let phrasePlusLongue = "";

for (let i = 0; i < tableauPhrases.length; i++) {
    if (tableauPhrases[i].length > phrasePlusLongue.length) {
        phrasePlusLongue = tableauPhrases[i];
    }
}

console.log("Phrase la plus longue : " + phrasePlusLongue);


// Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

function somme(nombre1, nombre2){
    return nombre1 + nombre2
}

console.log(somme(4, 6))


// Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

function grandNombreTableau(tableau){
    let grandNombre = tableau[0]
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > grandNombre) {
            grandNombre = tableau[i]
        }
    }
    return grandNombre
}

console.log(grandNombreTableau([8,4,2,10,6,7,1,15,9,17]))


// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

function suppressionVoyelle(chaine) {
    const voyelles = ["a", "e", "i", "o", "u", "y"]
    for (let i = 0; i < voyelles.length; i++) {
        chaine = chaine.replaceAll(voyelles[i], "")
    }
    return chaine
}

console.log(suppressionVoyelle("Bonjour je suis en train de coder en javascript"))


// Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

function tableauChainesTrie(tableau) {
    return tableau.sort()
}

console.log(tableauChainesTrie(["Bonjour", "Aquatique", "Alligator", "Sourire", "Claquer"]))


// Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

function nombreVersMot(nombre) {
    const nombreChaine = nombre.toString()
    const longueurChaine = nombreChaine.length
    let mot = ''

    const unites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    const entreDixEtVingt = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf']
    const dizaines = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', '', 'quatre-vingt'];
    
    if (longueurChaine == 1) {
        mot = unites[nombre]
    } else if (longueurChaine == 3) {
        if (nombreChaine.charAt(1) == 0 && nombreChaine.charAt(2) == 0) {
            mot = 'cent'
        } else {
            mot = 'Nombres au dessus de 100 non pris en compte.'
        }
    } else if (nombreChaine.charAt(0) == 1) {
        mot = entreDixEtVingt[nombreChaine.charAt(1)]
    } else if (nombreChaine.charAt(0) == 7) {
        mot = dizaines[6] + '-' + entreDixEtVingt[nombreChaine.charAt(1)]
    } else if (nombreChaine.charAt(0) == 9) {
        mot = dizaines[8] + '-' + entreDixEtVingt[nombreChaine.charAt(1)]
    } else {
        mot = dizaines[nombreChaine.charAt(0)] + '-' + unites[nombreChaine.charAt(1)]
    }

    mot = mot.replace("-un", "-et-un")
    mot = mot.replace("-onze", "-et-onze")

    return mot
}

console.log(nombreVersMot(72))


// Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

function proprieteObjet(tableau, propriete) {
    return tableau.map(function(objet) {
        return objet[propriete];
    });
}

var produits = [
    {name: "Poulet", prix: 10},
    {name: "Fruits", prix: 8},
    {name: "Pizza", prix: 12}
];

console.log(proprieteObjet(produits, "prix"))


// Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

function tableauNombreTrie(tableau) {
    tableau.sort(function(a, b) {
        return a - b;
      });
    
    return tableau.reverse(tableau)
}

console.log(tableauNombreTrie([80,10,40,70,30,90,50,60,20,0]))


// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

function voyellesMajuscules(chaine) {
    const voyelles = ["a", "e", "i", "o", "u", "y"]
    for (let i = 0; i < voyelles.length; i++) {
        chaine = chaine.replaceAll(voyelles[i], voyelles[i].toUpperCase())
    }
    return chaine
}

console.log(voyellesMajuscules("Bonjour je suis en train de coder en javascript"))


// Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

function compterVoyelles(chaine) {
    const voyelles = ["a", "e", "i", "o", "u", "y"]
    let compteur = 0
    for (const caractere of chaine) {
        if (voyelles.includes(caractere)) {
            compteur++
        }
    }
    return compteur
}

console.log(compterVoyelles("Bonjour je suis en train de coder en javascript"))


// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

function consonnesMajuscules(chaine) {
    const voyelles = ["A", "E", "I", "O", "U", "Y"]
    chaine = chaine.toUpperCase()
    for (let i = 0; i < voyelles.length; i++) {
        chaine = chaine.replaceAll(voyelles[i], voyelles[i].toLowerCase())
    }
    return chaine
}

console.log(consonnesMajuscules("Bonjour je suis en train de coder en javascript"))