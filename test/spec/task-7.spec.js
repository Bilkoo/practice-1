import chai from "chai";
import task from "../../src/task-7.js";

const assert = chai.assert,
    unique = task;

describe("Task 7: Unique Values", () => {

    it("Empty array",
        () => assert.deepEqual(unique([]), [])
    );

    it("One-value array",
        () => assert.deepEqual(unique([5]), [5])
    );

    it("Boring case",
        () => assert.deepEqual(unique([8, 2, 2, 3, 8, 2, 2, 3]), [8, 2, 3])
    );

    it("Array with different types case", () => {
        const obj = {},
            arr = [];
        assert.deepEqual(unique(["A", 5, obj, true, arr, obj, "a", 5, obj]), ["A", 5, obj, true, arr, "a"]);
    });
});
