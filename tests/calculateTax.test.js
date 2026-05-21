const calculateTax = require("../src/calculateTax");

describe("calculateTax", () => {
  test("returns income when tax rate defaults to 1", () => {
    expect(calculateTax(100)).toBe(100);
  });

  test("applies the given tax rate", () => {
    expect(calculateTax(100, 0.2)).toBe(20);
  });

  test("returns 0 when income is 0", () => {
    expect(calculateTax(0, 0.2)).toBe(0);
  });

  test("returns 0 when tax rate is 0", () => {
    expect(calculateTax(100, 0)).toBe(0);
  });

  test("handles decimal income", () => {
    expect(calculateTax(99.99, 0.1)).toBeCloseTo(9.999);
  });
});
