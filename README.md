# Notes de cours

- On préfèrera utiliser ***let/const*** au lieu de ***var***


- ***function*** ou ***const*** ? Plus généralement on utilisera ***const***,  ce qui ressemble à tous les autres langages


***Spread operator :***

- L'opérateur de propagation (...) est utilisé pour étendre un tableau, une chaîne de caractères ou tout autre objet itérable en tant qu'ensemble de paramètres ou d'éléments individuels.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
```


***Rest operator :***

- L'opérateur de reste (...) est utilisé pour capturer une liste de paramètres dans une fonction ou pour capturer les éléments restants d'un tableau.

```js
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```


- Fonction ***sort*** : ***compareFn(a, b)*** ---> ***> 0*** : *a after b* | ***< 0*** : *a before b* | ***=== 0*** : *original order*


- Vidéo intéressante sur le sujet : ***https://www.youtube.com/watch?v=66tfvFeALBQ***


- API : moyen de ***communication*** entre deux appareils -> les données reçues sont la plupart du temps en format ***JSON*** ou ***XML***


- API REST / API RESTful : Representation State Transfer -> ***standard*** de construction des APIs depuis les années 2000


- URI : Uniform Resource Idendifier -> chaque URI ***identifie les différents types de ressources disponibles*** sur un API REST


- Le ***client*** désigne la machine qui va chercher une ressource sur une API


- Header : ***metadonnée*** associée à une requête HTTP (Accept, Authorization, Body)


- VERB : GET, POST, PATCH, DELETE, PUT, ... Il faut associer VERB et URI de façon unique


- Status Codes : 2xx (réussite), 3xx (redirection), 4xx (problème client/communication), 5xx (crash) -> ***codes de retour*** d'une requête HTTP


- Une API est ***STATELESS*** : les terminaux ***ne doivent pas partager d'informations***, chaque cycle d'échange prend uniquement ce dont les terminaux ont besoin