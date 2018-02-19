
export default function convertToRoman(n) {
    const romanianSymbols = ["I", "V", "X", "L", "C", "D", "M"];
    let ans = "";
    while (n) {
        if (parseInt(n / 1000, 10) >= 1) {
            ans += romanianSymbols[6];
            n -= 1000;
            continue;
        }
        if (parseInt(n / 900, 10) >= 1) {
            ans += romanianSymbols[4] + romanianSymbols[6];
            n -= 900;
            continue;
        }
        if (parseInt(n / 500, 10) >= 1) {
            ans += romanianSymbols[5];
            n -= 500;
            continue;
        }
        if (parseInt(n / 400, 10) >= 1) {
            ans += romanianSymbols[4] + romanianSymbols[5];
            n -= 400;
            continue;
        }
        if (parseInt(n / 100, 10) >= 1) {
            ans += romanianSymbols[4];
            n -= 100;
            continue;
        }
        if (parseInt(n / 50, 10) >= 1) {
            ans += romanianSymbols[3];
            n -= 50;
            continue;
        }
        if (parseInt(n / 10, 10) >= 1) {
            ans += romanianSymbols[2];
            n -= 10;
            continue;
        }
        break;
    }
    if (n === 1) ans += romanianSymbols[0];
    if (n === 2) ans += romanianSymbols[0] + romanianSymbols[0];
    if (n === 3) ans += romanianSymbols[0] + romanianSymbols[0] + romanianSymbols[0];
    if (n === 4) ans += romanianSymbols[0] + romanianSymbols[1];
    if (n === 5) ans += romanianSymbols[1];
    if (n === 6) ans += romanianSymbols[1] + romanianSymbols[0];
    if (n === 7) ans += romanianSymbols[1] + romanianSymbols[0] + romanianSymbols[0];
    if (n === 8) ans += romanianSymbols[1] + romanianSymbols[0] + romanianSymbols[0] + romanianSymbols[0];
    if (n === 9) ans += romanianSymbols[0] + romanianSymbols[2];
    return ans;
}
