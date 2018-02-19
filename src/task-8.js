
export default function getTopLetter(str) {
    let myMap = new Map();
    let max = 0, symbolName = 0;
    for (let i = 0; i < str.length; ++i) {
        if (myMap.get(str[i]) === undefined) {
            myMap.set(str[i], 1);
        } else {
            let val = myMap.get(str[i]);
            myMap.set(str[i], ++val);
        }
    }

    for (const [key, value] of myMap) {
        if (value >= max) {
            max = value;
            symbolName = key;
        }
    }
    return symbolName;
}
