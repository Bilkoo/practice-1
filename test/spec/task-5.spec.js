import chai from "chai";
import task from "../../src/task-5.js";

const assert = chai.assert,
    trim = task;

describe("Task 5: Text trimmer", () => {
    it("Boring case",
        () => assert.equal(trim("Hello, I am a text!", 9), "Hello, I\u2026"));

    it("Zero length case",
        () => assert.equal(trim("Hello, I am a text!", 1), "\u2026"));

    it("Zero text case",
        () => assert.equal(trim("", 5), ""));

    it("No need to trim case",
        () => assert.equal(trim("Hello, I am a text!", 19), "Hello, I am a text!"));

    it("should throw a RangeError for negative input",
        () => assert.throws(
            () => trim("I'm a text!", -50), RangeError));

    it("should throw a RangeError for a zero length",
        () => assert.throws(
            () => trim("", 0), RangeError));
});
