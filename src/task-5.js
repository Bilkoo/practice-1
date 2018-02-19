
export default function trim(text, maxLength) {
    let str = text;
    if (maxLength <= 0) {
        throw new RangeError("Invalid parameters of 'maxLength'");
    }
    if (text.length > maxLength) {
        str = `${text.slice(0, maxLength - 1)}…`;
    }
    return str;
}
