var orm = require("./config/orm.js");

orm.selectWhere("parties", "party_type", "grown-up").then(data => {
    console.log(data)
});

