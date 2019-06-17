const Table = require("cli-table");
const Data = require("./lib/Data");

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

  console.log(table.toString());
})();
