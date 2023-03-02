var number = "";
number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var nb = parseInt(number);



function pyramid(nb){
  if (nb <=0)
    console.log("Impossible de fabriquer une pyramide dans ces conditions chef !");
  else
    console.log("Voilà ta pyramide Ramsès !")
    for(var count = 1; count <= nb; count++){
    console.log(" ".repeat(nb-count)+"#".repeat(count))
    }
}
pyramid(nb);


