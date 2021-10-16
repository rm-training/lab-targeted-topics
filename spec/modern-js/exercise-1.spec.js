import results from "../../public/modern-js/exercise-1.js";

describe("Constructor Functions Exercise", function () {
  it("Should pass exercise 1", () => {
    expect(results.one.thing1).toBe("banana");
    expect(results.one.thing2).toBe("apple");
  });

  it("Should pass exercise 2", () => {
    expect(results.two.name === results.two.elvis.name);
    expect(results.two.title === results.two.elvis.title);
  });

  it("Should pass exercise 3", () => {
    expect(results.three.person === results.two.elvis.name);
    expect(results.three.job === results.two.elvis.title);
  });

  it("Should pass exercise 4", () => {
    expect(results.four.newArray.length === 9);
  });

  it("Should pass exercise 5", () => {
    expect(
      JSON.stringify(results.five.wordArray) ===
        JSON.stringify(["m", "c", "G", "o", "o"])
    );
  });

  it("Should pass exercise 6", () => {
    expect(results.six.sayHello("natalie") === "Hello, natalie");
  });
});
