
export default function sumDigits(n) {
    let ans = 0;
    while (n) {
        ans += n % 10;
        n = parseInt(n / 10, 10);
    }
    return ans;
}
