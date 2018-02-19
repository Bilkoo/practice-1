import chai from "chai";
import task from "../../src/task-6.js";

const assert = chai.assert,
    getStats = task;

describe("Task 6: Statistics 101", () => {

    it("Empty array",
        () => assert.deepEqual(getStats([]), { max: null, min: null, avg: null })
    );

    it("One zero value",
        () => assert.deepEqual(getStats([0]), { max: 0, min: 0, avg: 0 })
    );

    it("One non-zero value",
        () => assert.deepEqual(getStats([5]), { max: 5, min: 5, avg: 5 })
    );

    it("Boring Case #1",
        () => assert.deepEqual(
            getStats([33, -18, -12, 37, 14, 41, 26, -4, -19, -26, -38, -15, -11, 1, 1, 42, -13, -32, -27, 42, -47, -50, -30, -19, 3, 37, 38, 6, 26, -40, 3, 10, -32, 38, -18, 44, 22, 19, -7, -7, 33, 25, 36, 38, -40, -35, -1, 30, 41, -16]),
            { max: 44, min: -50, avg: 2.58 })
    );

    it("Boring Case #2",
        () => assert.deepEqual(
            getStats([7, 50, -3, 36, 21, -21, 18, 7, -3, 24, 25, 17, -16, 49, 17, 6, 33, 16, 19, -47]),
            { max: 50, min: -47, avg: 12.75 })
    );
});
