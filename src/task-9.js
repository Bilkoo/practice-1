
export default function merge(data) {
    let ans = {};
    for (let i of data) {
        for (let j in i) {
            if (ans[j] === undefined) { //good comparison ?
                ans[j] = [i[j]];
            } else {
                ans[j].push(i[j]);
            }
        }
    }
    return ans;
}
