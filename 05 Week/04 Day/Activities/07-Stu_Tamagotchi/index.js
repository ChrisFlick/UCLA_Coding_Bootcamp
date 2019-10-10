function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;

    this.feed = function() {
        if (this.hungry) {
            console.log('That was yummy!');
            this.hungry = false
        } else {
            console.log("No thanks, I'm full"); 
        }
    }

    this.sleep = function() {
        if (this.sleepy) {
            console.log("zZzzZz");
            this.sleepy = false;
            this.bored = true;
        } else {
            console.log("No way! I'm not tired!")
        }
    }

    this.play = function() {
        if (this.bored) {
            console.log("Yay! let's play!!")
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now..")
        }
    }

    this.increaseAge = function() {
        
    }
}