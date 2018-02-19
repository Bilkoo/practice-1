import chai from "chai";
import task from "../../src/task-10.js";

const assert = chai.assert,
    convertToRoman = task;

describe("Task 10: Arabic to Roman Converter", () => {
    it("Boring 1 case",
        () => assert.equal(convertToRoman(1), "I"));

    it("Boring 3 case",
        () => assert.equal(convertToRoman(3), "III"));

    it("Not so boring 9 case",
        () => assert.equal(convertToRoman(9), "IX"));

    it("Not boring at all 1066 case",
        () => assert.equal(convertToRoman(1066), "MLXVI"));

    it("Not boring at all my ass 1989 case",
        () => assert.equal(convertToRoman(1989), "MCMLXXXIX"));
});
