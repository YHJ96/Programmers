const n = 45;

function solution(n) {
    let ter = n.toString(3);
    ter = [...ter].reverse();
    ter = ter.join('');
    const answer = parseInt(ter, 10);
    return answer;
}

console.log(solution(n));