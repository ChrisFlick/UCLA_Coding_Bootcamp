var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAndOrder("party_name", "parties", "party_cost");

// // Find a pet in the pets table by an animal_name of Rachel.
orm.selectAndOrder("client_name", "clients", 'client_name');

orm.selectWhere('parties', 'party_type', "grown-up")
