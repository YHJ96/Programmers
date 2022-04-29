const n = 78;

console.log(solution(n));

function solution(n) {
    const binary = n.toString(2);
    let compare = 0;
    let answer = '';
    for(let x of binary) {
        if(x === '1') compare += 1;
    }
    while(true) {
        let count = 0;
        n++;
        const num = n.toString(2);
        for(let item of num) {
            if(item === '1') count += 1;
        }
        if(count === compare) {
            answer += num;
            break;
        }
    }
    answer = parseInt(answer, 2);
    return answer;
}