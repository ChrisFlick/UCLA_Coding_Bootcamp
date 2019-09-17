var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for (let i = 0; i < myFarm.length; i++) {
    console.log(myFarm[i]);
    if (myFarm[i].charAt(0) === "c") {
        alert(`${myFarm[i]} starts with C!`);
    } else if (myFarm[i].charAt(0) === "o") {
        alert(`${myFarm[i]} starts with O!`);
    }
}