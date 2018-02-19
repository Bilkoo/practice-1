import chai from "chai";
import task from "../../src/task-3.js";

const assert = chai.assert,
    sumDigits = task;

describe("Task 3: Sum of Number Digits", () => {
    it("Case #1", () => assert.equal(sumDigits(717), 15));
    it("Case #2", () => assert.equal(sumDigits(918), 18));
    it("Case #3", () => assert.equal(sumDigits(5), 5));
    it("Case #4", () => assert.equal(sumDigits(0), 0));
    it("Case #5", () => assert.equal(sumDigits(1234), 10));
    it("Case #6", () => assert.equal(sumDigits(111111111), 9));
});
