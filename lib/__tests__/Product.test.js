const Product = require("../Product");

describe("Product", () => {
  const data = {
    item_id: 0,
    product_name: "fred",
    department_name: "movies",
    price: 23.5,
    stock_quantity: 1
  };

  it("should instantiate without errors", () => {
    expect(new Product(data)).toBeInstanceOf(Product);
  });

  it("should return 'id' property", () => {
    expect(new Product(data).id).toEqual(expect.any(Number));
  });

  it("should return 'name' property", () => {
    expect(new Product(data).name).toEqual(expect.any(String));
  });

  it("should return 'department' property", () => {
    expect(new Product(data).department).toEqual(expect.any(String));
  });

  it("should return 'price' property", () => {
    expect(new Product(data).price).toEqual(expect.any(Number));
  });

  it("should return 'quantity' property", () => {
    expect(new Product(data).quantity).toEqual(expect.any(Number));
  });
});
