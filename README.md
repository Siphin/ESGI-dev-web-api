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

console.log(sum(1, 2, 3, 4)); // Out**put: 10
```


- Fonction ***sort*** : ***compareFn(a, b)*** ---> ***> 0*** : *a after b* | ***< 0*** : *a before b* | ***=== 0*** : *original order*


- Vidéo intéressante sur le sujet : ***https://www.youtube.com/watch?v=66tfvFeALBQ***