const connectSql = require("./connection.js");

const orm = {
    selectAll: function(column, table, column, value, cb) {
        var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
        connection.query(queryString, [column, table, column, value], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    insertOne: function(table, column, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    updateOne: function(table, column, value, value, cb) {
        var queryString = "UPDATE ?? SET ?? to ? WHERE id = ?";
        connection.query(queryString, [table, column, value, value], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
}

module.exports = orm;