const Table = require("cli-table");
const inquirer = require("inquirer");
const chalk = require("chalk");

const Data = require("./lib/Data");
const Product = require("./lib/Product");

const productsTable = products => {
  const table = new Table({
    head: ["Id", "Name", "Dept", "Price", "Qty"],
    colAligns: [, , , "right", "right"]
  });

  products.map(product => {
    table.push([
      product.id,
      product.name,
      product.department,
      product.priceFormated,
      product.quantity
    ]);
  });

  return table.toString();
};

const receiptTable = receipt => {
  const table = new Table();

  table.push(
    { Item: receipt.item },
    { Price: receipt.priceFormated },
    { Quantity: receipt.quantity },
    { Total: receipt.totalFormated }
  );

  return table.toString();
};

(async () => {
  const data = new Data();
  const products = await data.products();

  // display the current products
  console.log(productsTable(products));

  // prompt for product to buy
  const { product, units } = await inquirer.prompt([
    {
      name: "product",
      message: "Which product do you want to buy:",
      filter: input =>
        products.filter(product => product.id === Number(input)).pop(),
      validate: input =>
        input instanceof Product ? true : "Cannot find that product.",
      transformer: input => (input.name ? chalk.cyan(input.name) : input)
    },
    {
      name: "units",
      message: "How many do you want to buy:",
      validate: (input, answers) =>
        answers.product.quantity >= Number(input)
          ? true
          : "We don't have that many in stock."
    }
  ]);

  console.log(receiptTable(await data.buy(product.id, units)));

  data.end();
})();
