const Table = require("cli-table");
const inquirer = require("inquirer");

const Data = require("./lib/Data");
const Product = require("./lib/Product");

(async () => {
  const data = new Data();
  const products = await data.products();

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

  console.log(Number("1"), 1, Number("1") === 1);

  // display the table
  console.log(table.toString());

  // prompt for product to buy
  const { product, units } = await inquirer.prompt([
    {
      name: "product",
      message: "Which product do you want to buy:",
      filter: input =>
        products.filter(product => product.id === Number(input)).pop(),
      validate: input =>
        input instanceof Product ? true : "Cannot find that product.",
      transformer: input => input.name || input
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

  console.log({ product, units });
})();
