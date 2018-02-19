
export default function formatTime(seconds) {
    const date = new Date(seconds * 1000 + 3600 * 5 * 1000);
    const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "America/New_york"
    };
    let ans = date.toLocaleString("en-US", options);
    if (ans[1] === ":") {
        ans = `0${ans}`;
    }
    return ans;
}
