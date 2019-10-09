let dogs = {
    raining: true,
    noise: 'Woof!',

    makeNoise() {
        console.log(this.noise)
    }
}

let cats = {
    raining: true,
    noise: 'Meow!',

    makeNoise() {
        console.log(this.noise)
    }
}

dogs.makeNoise();
cats.makeNoise();

massHysteria(cats, dogs)

function massHysteria(cats, dogs) {
    if (cats.raining === true && dogs.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
}