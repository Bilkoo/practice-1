import chai from "chai";
import task from "../../src/task-2.js";

const assert = chai.assert,
    getNthItem = task;

describe("Task 2: Sequence Generator", () => {
    it("Case #1", () => assert.equal(getNthItem(5, 1), 5));
    it("Case #2", () => assert.equal(getNthItem(11, 0), 0));
    it("Case #3", () => assert.equal(getNthItem(10, 3), 30));
    it("Case #4", () => assert.equal(getNthItem(0, 1), 0));
    it("Case #5", () => assert.equal(getNthItem(30, 2), -30));
    it("Case #6", () => assert.equal(getNthItem(-5, 40), 1832519379625));
    it("Case #7", () => assert.equal(getNthItem(12, 8), -1020));
    it("Case #8", () => assert.equal(getNthItem(0, 0), 0));
});
