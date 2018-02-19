import config from "./rollup.config";
import merge from "lodash/merge";

export default merge({
    input: "test/spec/index.js",
    output: {
        file: "build/test-bundle.js"
    },
    globals: {
        mocha: "mocha",
        chai: "chai"
    },
    external: ["mocha", "chai"],
    intro: "if (typeof module !== \"undefined\") require(\"source-map-support\").install();"
}, config);
