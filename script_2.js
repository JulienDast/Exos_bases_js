var number = "";
number = prompt("De quel nombre POSITIF veux-tu calculer la factorielle ?");
var nb = parseInt(number);


function factorialize(nb) {
  if (nb === 0 || nb === 1)
    return 1;
  for (var i = nb - 1; i > 1; i--) {
    nb *= i;
  }
  return nb;
}

if(nb <0)
console.log("Impossible de factorialiser un nombre négatif !");
else
console.log("Le résultat est " + factorialize(nb))




