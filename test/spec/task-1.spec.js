import chai from "chai";
import task from "../../src/task-1.js";

const assert = chai.assert,
    isTriangle = task;

describe("Task 1: to be or not to be a triangle", () => {
    it("should spot a triangle for boring case of 3, 4, 5",
        () => assert.equal(isTriangle(3, 4, 5), true));

    it("should spot a triangle for equilateral triangle case (2.3, 2.3, 2.3)",
        () => assert.equal(isTriangle(2.3, 2.3, 2.3), true));

    it("should spot a triangle if it is vary tall (11.4, 0.8, 11)",
        () => assert.equal(isTriangle(11.4, 0.8, 11), true));

    it("should reject a \"flat\" triangle case (15, 30, 15)",
        () => assert.equal(isTriangle(15, 30, 15), false));

    it("should reject zero-side triangle case (0, 4, 5)",
        () => assert.equal(isTriangle(0, 4, 5), false));
});
