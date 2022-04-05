const s = "1 2 3 4";

function solution(s) {
    const arr = s.split(' ').map((item) => +item);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return `${min} ${max}`;
}

console.log(solution(s));