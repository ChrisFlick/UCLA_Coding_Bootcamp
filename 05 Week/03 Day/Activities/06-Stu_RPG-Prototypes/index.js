const Character = function (name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.strength = age * 5;
    this.hp = age * 25;

    this.printStats = function() {
        console.log(`
            ${this.name}
            Age ${this.age} ${this.profession}
            Strength ${this.strength}
            HP ${this.hp}
        `)
    }
}

let bob = new Character('bob', 35, "blacksmith");
let steve = new Character('steve', 25, "adventurer")

bob.printStats()

Character.prototype.isAlive = function() {
    if(this.hp > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bob.isAlive())



Character.prototype.levelUp = function() {
    this.age++;
    this.strength += 5
    this.hp += 25;
}

Character.prototype.attack = function(target) {
    target.hp -= this.strength;

    if (target.isAlive() === false) {
        this.levelUp()
        console.log(this.name + ": ding!")
    }
}

bob.attack(steve);
bob.attack(steve);
bob.attack(steve);
bob.attack(steve);
bob.printStats();
steve.printStats();
