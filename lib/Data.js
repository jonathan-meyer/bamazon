require("dotenv").config();
const mysql = require("mysql");

const Product = require("./Product");
const Receipt = require("./Receipt");

const Data = function() {
  this.connection = mysql.createConnection({
    host: process.env.host || "localhost",
    port: process.env.port || 3306,
    user: process.env.user,
    password: process.env.password,
    database: "bamazon"
  });
};

Data.prototype.products = async function(id) {
  const results = await new Promise((resolve, reject) => {
    Number(id) > 0
      ? this.connection.query(
          "SELECT * FROM `products` WHERE ? LIMIT 1;",
          { item_id: id },
          (error, results) =>
            error ? reject(error) : resolve(new Product(results.pop()))
        )
      : this.connection.query("SELECT * FROM `products`;", (error, results) =>
          error ? reject(error) : resolve(results.map(row => new Product(row)))
        );
  });

  return results;
};

Data.prototype.buy = async function(id, quantity) {
  const results = await new Promise((resolve, reject) => {
    if (Number(id) > 0 && Number(quantity) > 0) {
      this.products(id).then(product => {
        this.connection.query(
          "UPDATE `products` SET `stock_quantity` = ? WHERE `item_id` = ? LIMIT 1;",
          [product.quantity - quantity, product.id],
          (error, results) =>
            error ? reject(error) : resolve(new Receipt(product, quantity))
        );
      });
    } else {
      reject("`id` and `quantity` are required");
    }
  });

  return results;
};

Data.prototype.end = function() {
  this.connection.end();
};

module.exports = Data;
