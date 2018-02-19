import chai from "chai";
import task from "../../src/task-9.js";

const assert = chai.assert,
    merge = task;

describe("Task 9: Fancy Merger", () => {
    it("Empty object case", () =>
        assert.deepEqual(merge([{}, {}, {}, {}, {}]), {})
    );

    it("Single object case", () =>
        assert.deepEqual(merge([{ field1: "value1" }]), { field1: ["value1"] })
    );

    it("Single object case #2", () =>
        assert.deepEqual(merge([{ field1: "value1" }, {}, {}, {}]), { field1: ["value1"] })
    );

    it("Unique fields case", () =>
        assert.deepEqual(merge([
            { login: "mark twain" },
            { roles: ["admin", "moderator"] },
            { disabled: false },
            { projects: 3 }
        ]), {
            login: ["mark twain"],
            roles: [["admin", "moderator"]],
            disabled: [false],
            projects: [3]
        })
    );

    it("Boring case", () =>
        assert.deepEqual(merge([
            { name: "oven", height: 12, brand: "Samsung" },
            { name: "Galaxy S2", android: 6, brand: "Samsung" },
            { name: "oven", type: "microwave", brand: "LG", warranty: true },
            { name: "G2", brand: "LG", android: 6, warranty: true }
        ]), {
            name: ["oven", "Galaxy S2", "oven", "G2"],
            height: [12],
            brand: ["Samsung", "Samsung", "LG", "LG"],
            android: [6, 6],
            type: ["microwave"],
            warranty: [true, true]
        })
    );
});
