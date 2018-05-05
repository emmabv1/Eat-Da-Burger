const orm = require("./../config/orm.js");

const burger = function() {

orm.selectAll("name", "burgers", "devoured", "0", function(result) {
    var data = result;
    console.log(data);
});

orm.insertOne("burgers", "name", req.body.burger, function(result) {
    var data = result;
    console.log(data);
});

orm.updateOne("burgers", "devoured", "1", req.body.id, function(result) {
    var data = result;
    console.log(data);
});

}

module.exports = burger;
