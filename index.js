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