const Receipt = require("../Receipt");
const Product = require("../Product");

describe("Receipt", () => {
  const product = new Product({
    item_id: 1,
    Receipt_name: "fred",
    department_name: "movies",
    price: 23.5,
    stock_quantity: 10
  });

  it("should instantiate without errors", () => {
    expect(new Receipt(product, 2)).toBeInstanceOf(Receipt);
  });

  it("should return 'item' property", () => {
    expect(new Receipt(product, 2).item).toEqual(expect.any(String));
  });

  it("should return 'price' property", () => {
    expect(new Receipt(product, 2).price).toEqual(23.5);
  });

  it("should return 'priceFormated' property", () => {
    expect(new Receipt(product, 2).priceFormated).toEqual(expect.any(String));
  });

  it("should return 'total' property", () => {
    expect(new Receipt(product, 2).total).toEqual(23.5 * 2);
  });

  it("should return 'totalFormated' property", () => {
    expect(new Receipt(product, 2).totalFormated).toEqual(expect.any(String));
  });

  it("should return 'quantity' property", () => {
    expect(new Receipt(product, 2).quantity).toEqual(2);
  });
});
