import { Shape, Rectangle } from "../../public/modern-js/exercise-2.js";

describe("Constructor Functions Exercise", function () {
  it("Shape and Rectangle should be constructable", () => {
    const shapeThing = new Shape(4, 50, 50);
    const squareThing = new Rectangle(5, 12, 15, 30);
    
    expect(shapeThing instanceof Shape).toBe(true);
    expect(squareThing instanceof Rectangle).toBe(true);
  });

  it("Should extend off one another", () => {
    const shapeThing = new Shape(4, 50, 50);
    const squareThing = new Rectangle(5, 12, 15, 30);
    
    expect(shapeThing.constructor === Shape).toBe(true);
    expect(squareThing.constructor === Rectangle).toBe(true);
  });

  it("Should support a static method", () => {
    const shapeThing = new Shape(4, 50, 50);
    
    expect(typeof shapeThing.checkType === "undefined").toBe(true);
    expect(typeof Shape.checkType === 'function').toBe(true);
  });

  it("Should have the appropriate methods inherited", () => {
    const shapeThing = new Shape(4, 50, 50);
    const squareThing = new Rectangle(5, 12, 15, 30);

    expect(typeof shapeThing.move === "function").toBe(true);

    // "changeWidth" should only be on Rectangles
    expect(typeof shapeThing.changeWidth === "function").toBe(false);
    expect(typeof squareThing.changeWidth === 'function').toBe(true);

    // Rectangles inherit "move"
    expect(typeof squareThing.move === "function").toBe(true);
    expect(squareThing.hasOwnProperty('move')).toBe(false);
  });

  it("The bonus can optionally be implemented", (done) => {
    const shapeThing = new Shape(4, 50, 50);

    expect(typeof shapeThing.moveLater === 'function').toBe(true);
    
    shapeThing.moveLater(100, 100, 1);
    setTimeout(function () {
      expect(shapeThing.x === 100).toBe(true);
      expect(shapeThing.y === 100).toBe(true);

      done();
    }, 3);
  });

});
