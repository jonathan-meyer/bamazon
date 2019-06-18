const Product = require("./Product");

const Receipt = function(product, quantity) {
  // console.log({ product, quantity });

  if (!(product instanceof Product && Number(quantity) > 0)) {
    throw "`product` and `quantity` required";
  }

  Object.defineProperty(this, "item", {
    value: `${product.name} (${product.department})`,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(this, "price", {
    value: product.price,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(this, "priceFormated", {
    value: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(product.price),
    writable: false,
    enumerable: false
  });

  Object.defineProperty(this, "quantity", {
    value: quantity,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(this, "total", {
    value: product.price * quantity,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(this, "totalFormated", {
    value: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(product.price * quantity),
    writable: false,
    enumerable: false
  });
};

module.exports = Receipt;
