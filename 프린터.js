const priorities = [4, 2, 1, 3, 2, 5];
const location = 2;

console.log(solution(priorities, location))

function solution(priorities, location) {
    let item = priorities[location];
    let answer = 0;
    const comapre = [];
    for(let x of priorities) {
        if(x > item) answer += 1;
        else comapre.push(x);
    }
    const max = Math.max(...comapre);
    let count = 0;
    for(let x of comapre) {
        if(x === max) count += 1;
    }
    if(count === 1) return answer + 1;
    else return answer + location + 1;
}