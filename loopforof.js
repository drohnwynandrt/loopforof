 var pokemonArray = ["Charizard", "Ninetales", "Blastoise", "Venusaur"] 

 function pokemon(){
    for (var i=0; i < pokemonArray.length; i++){
     for (poke of pokemonArray){
         console.log(pokemonArray[i])
     }
 }}



/*
var showType = document.getElementById("chooseType").value;

for (var i=0; i < pokemonArray.length; i++)
if (showType == pokemonArray[i].type){
    document.getElementById("output").innerHTML += pokemonArray[i].name +"<br />";
}
}
*/