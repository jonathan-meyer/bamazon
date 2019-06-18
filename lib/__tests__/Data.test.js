const Product = require("../Product");
const Receipt = require("../Receipt");
const Data = require("../Data");

describe("Data", () => {
  let data;

  beforeEach(() => {
    data = new Data();
  });

  it("should instantiate without errors", () => {
    expect(data).toBeInstanceOf(Data);
  });

  it("should return all products", () => {
    return expect(data.products()).resolves.toEqual(
      expect.arrayContaining([expect.any(Product)])
    );
  });

  it("should return a single product when id is given", () => {
    return expect(data.products(1)).resolves.toEqual(expect.any(Product));
  });

  it("should return a receipt when an item is bought", () => {
    return expect(data.buy(1, 1)).resolves.toEqual(expect.any(Receipt));
  });

  afterEach(() => {
    data.end();
  });
});
