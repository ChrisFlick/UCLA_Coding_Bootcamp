// Enumerators

type = {
    rock: 0,
    paper: 1,
    scissors: 2,
}

winner = {
    lose: 0,
    win: 1,
    tie: 2,
}

var wins = 0;
var loses = 0;

var log = ""


$(document).ready( () => {
    $("#rock").on("click", () => {
        log = "";
        turn(type.rock);
    });

    $("#paper").on("click", () => {
        log = "";
        turn(type.paper);
    });

    $("#scissors").on("click", () => {
        log = "";
        turn(type.scissors);
    });
});

// Functions

function turn(pick) {
    let computer = Math.round(Math.random() * 2); // Select between rock paper and scissors randomly for the computer.

    log += "You have chosen " + Object.keys(type)[pick] + "<br>";
    log += "The computer has chosen " + Object.keys(type)[computer] + "<br>"

    let winn = checkEncounter(pick, computer);

    if (winn === winner.tie) {
        log += "It was a TIE!";
    } else if (winn === winner.win) {
        log += "You WIN!!";
        wins++;
        $("#wins").html(wins);
    } else if (winn === winner.lose) {
        log += "You LOSE!"
        loses++;
        $("#loses").html(loses);
    }

    $("#log").html(log);
}

function checkEncounter(player, computer) {
    switch (player) {
        case type.rock:
            switch (computer) {
                case type.rock:
                    return winner.tie;
                    break;
                case type.paper:
                    return winner.lose;
                    break;
                case type.scissors:
                    return winner.win;
                    break; 
                }
            break;
        case type.paper:
            switch (computer) {
                case type.rock:
                    return winner.win;
                    break;
                case type.paper:
                    return winner.tie;
                    break;
                case type.scissors:
                    return winner.lose;
                    break; 
                    }
                break;
        case type.scissors:
            switch (computer) {
                case type.rock:
                    return winner.lose
                    break;
                case type.paper:
                    return winner.win;
                    break;
                case type.scissors:
                    return winner.tie;
                    break; 
                }
            break;
    }
}