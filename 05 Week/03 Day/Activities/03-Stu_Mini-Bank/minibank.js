function createMiniBank() {
    this.statement = [0];

    this.setBalance = function (val, pos) {
        this.statement[pos] = val
    }

    this.getBalance = function(pos) {
        return this.statement[pos]
    }

    this.updateStatement = function(val) {
        this.statement.push(val)
    }

    this.getStatement = function(val) {
        return this.statement
    }

    this.printStatement = function() {
        for(let i = 0; i < this.statement.length; i++) {
            console.log(this.statement[i])
        }
    }

    this.deposit = function(val, pos) {
        if (val > 0) {
            this.setBalance(val, pos)
        } else {
            throw new TypeError('deposite must be a positive number')
        }
        
    }

    this.withdraw = function(val, pos) {
        let newBalance = this.getBalance(pos) - val

        if (val <= 0) {
            throw new TypeError('Withdrawel ammount must be a positive number')
        }

        if (newBalance >= 0) {
            this.setBalance(newBalance, pos);
        } else {
            throw new TypeError('Insoficient funds!')
        }
        
    }

    this.printBalance = function (pos) {
        console.log( this.getBalance(pos));
    }
}

let miniBank = new createMiniBank();

miniBank.deposit(1000, 0);
miniBank.printBalance(0)
miniBank.withdraw(1000, 0);
miniBank.printBalance(0)