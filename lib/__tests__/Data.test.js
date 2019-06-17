const Product = require("../Product");
const Data = require("../Data");

describe("Data", () => {
  it("should instantiate without errors", () => {
    expect(new Data()).toBeInstanceOf(Data);
  });

  it("should return all products", () => {
    return expect(new Data().products()).resolves.toEqual(
      expect.arrayContaining([expect.any(Product)])
    );
  });

  it("should return a single product when id is given", () => {
    return expect(new Data().products(1)).resolves.toEqual(expect.any(Product));
  });
});
