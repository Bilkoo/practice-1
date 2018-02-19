import chai from "chai";
import task from "../../src/task-8.js";

const assert = chai.assert,
    getTopLetter = task;

describe("Task 8: Top Letter", () => {
    it("One letter string",
        () => assert.equal(getTopLetter("A"), "A")
    );

    it("Boring case #1",
        () => assert.equal(getTopLetter("CAATGCCATA"), "A")
    );

    it("Boring case #2",
        () => assert.oneOf(getTopLetter("M7X72DRLlhMBHJzcTROVhy2xPYfVVoyWp9djVkR3FDYo4vsvRUyaq8WBKEk9Igdx"), ["R", "V"])
    );

    it("Boring case #3",
        () => assert.oneOf(getTopLetter("nkfkc9,9gx1 7n7554b iyjtk zvm8k6kodepcnt7gmld7caaih6n5,2arq.v mraefuth4u8u0 gpu3"), [" ", "k"])
    );
});
