
export default function getNthItem(a, n) {
    let ans = 0;
    if (n === 0) {
        return 0;
    }
    for (let i = 0; i < n; ++i) {
        ans = a - 2 * ans;
    }
    return ans;
}
