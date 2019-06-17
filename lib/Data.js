require("dotenv").config();
const mysql = require("mysql");
const Product = require("./Product");

const Data = function() {
  this.connection = mysql.createConnection({
    host: process.env.host || "localhost",
    port: process.env.port || 3306,
    user: process.env.user,
    password: process.env.password,
    database: "bamazon"
  });
};

Data.prototype.products = function(id) {
  return new Promise((resolve, reject) => {
    id > 0
      ? this.connection.query(
          "SELECT * FROM `products` WHERE ? LIMIT 1;",
          { item_id: id },
          (error, results) =>
            error ? reject(error) : resolve(new Product(results.pop()))
        )
      : this.connection.query("SELECT * FROM `products`;", (error, results) =>
          error ? reject(error) : resolve(results.map(row => new Product(row)))
        );
  }).then(results => {
    this.connection.end();
    return results;
  });
};

module.exports = Data;
