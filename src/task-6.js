
export default function getStats(data) {
    if (data.length === 0) {
        console.log("NULL");
        return {
            min: null,
            max: null,
            avg: null
        };
    }
    let ans = {
        min: data[0],
        max: data[0],
        avg: 0
    };
    for (let i of data) {
        if (i < ans.min) ans.min = i;
        if (i > ans.max) ans.max = i;
        ans.avg += i;
    }
    ans.avg /= data.length;
    return ans;
}
