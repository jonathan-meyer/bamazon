const bamazonCustomer = require("../bamazonCustomer");

describe("bamazonCustomer", () => {
  it("should instantiate without errors", () => {
    expect(new bamazonCustomer()).toBeInstanceOf(bamazonCustomer);
  });
});
