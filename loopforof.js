 var pokemonArray = 
[
    {name:"Charizard", type:"Fire"},
    {name:"Blastoise", type:"Water"},
    {name:"Venusaur", type:"Grass"},
    {name:"Blaziken", type:"Fire"},
    {name:"Gloom", type:"Grass"},
    {name:"Meganium", type:"Grass"},
    {name:"Gyarados", type:"Water"},
    {name:"Houndoom", type:"Fire"},
    {name:"Lapras", type:"Water"},
    {name:"Greninja", type:"Water"},
    {name:"Ninetales", type: "Fire"}
] 
function chooseType(){
document.getElementById("output").innerHTML ="Pokemon: <br />"
var showType = document.getElementById("chooseType").value;
 
for (var i=0; i < pokemonArray.length; i++)
if (showType == pokemonArray[i].type){
    document.getElementById("output").innerHTML += pokemonArray[i].name +"<br />";
}

}