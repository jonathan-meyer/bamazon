const Product = function(data) {
  if (typeof data !== "object") {
    throw "data object required";
  }

  Object.defineProperty(this, "id", {
    value: data.item_id,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(this, "name", {
    value: data.product_name,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(this, "department", {
    value: data.department_name,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(this, "price", {
    value: data.price,
    writable: false,
    enumerable: true
  });

  Object.defineProperty(this, "priceFormated", {
    value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.price),
    writable: false,
    enumerable: false
  });

  Object.defineProperty(this, "quantity", {
    value: data.stock_quantity,
    writable: false,
    enumerable: true
  });
};

module.exports = Product;
