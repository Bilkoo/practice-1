import chai from "chai";
import task from "../../src/task-4.js";

const assert = chai.assert,
    formatTime = task;

describe("Task 4: Time Formatter", () => {
    it("Boring AM case",
        () => assert.equal(formatTime(37784), "10:29:44 AM"));

    it("Boring PM case",
        () => assert.equal(formatTime(59900), "04:38:20 PM"));

    it("It's zero time!",
        () => assert.equal(formatTime(0), "12:00:00 AM"));

    it("It's max time!",
        () => assert.equal(formatTime(86399), "11:59:59 PM"));

    it("Just before 1 AM",
        () => assert.equal(formatTime(3599), "12:59:59 AM"));

    it("1 AM time",
        () => assert.equal(formatTime(3600), "01:00:00 AM"));

    it("Just before midday",
        () => assert.equal(formatTime(43199), "11:59:59 AM"));

    it("Midday",
        () => assert.equal(formatTime(43200), "12:00:00 PM"));

    it("Just before 1 PM",
        () => assert.equal(formatTime(46799), "12:59:59 PM"));

    it("1 PM",
        () => assert.equal(formatTime(46800), "01:00:00 PM"));
});
