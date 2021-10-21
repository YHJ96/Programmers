const brown = 10;
const yellow = 2;

console.log(solution(brown, yellow));

function solution(brown, yellow) {
    const sum = brown + yellow;
    let count = sum - 1;
    let col;
    while(true) {
        if(sum % count === 0) {
            col = sum / count;
        }
        if(col % 2) break;
        count--;
    } 
    return [count, sum / count];
}