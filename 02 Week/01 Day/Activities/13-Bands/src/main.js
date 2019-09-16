let myFav = ["deadmau5", "iron maiden", "above and beyond" ];
let userFav = prompt("What is your favorite band");

if (myFav.indexOf(userFav.toLowerCase) !== -1) {
    alert("YEAH I LOVE THEM!");
} else {
    alert("Nah. They're pretty lame.");
}