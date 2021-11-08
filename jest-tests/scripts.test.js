const googlesearch = require("./scripts");

dbMock = ["dog.com", "tmt.com", "test.com", "b2b.com", "cat.com"];

// group your test under a certain title
describe("google search", () => {
  test("search in google engine", () => {
    // expect('hello').toBe('No');
    expect(googlesearch("test", dbMock)).toEqual(["test.com"]);
    expect(googlesearch("t", dbMock)).toEqual([
      "tmt.com",
      "test.com",
      "cat.com",
    ]);
  });

  test("result must be less then 4", () => {
    expect(googlesearch(".com", dbMock).length < 4).toEqual(true);
  });
});
