export default function isTriangle(a, b, c) {
    return !(a + b <= c || a + c <= b || c + b <= c);
}
