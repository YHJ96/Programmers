const d = [1,3,2,5,4];
const budget = 9;

function solution(d, budget) {
    let answer = 0;
    let index = 0;
    let newArr = d.sort((a,b) => a-b);
    while(budget >= 0) {
        budget = budget - newArr[index];
        index++;
        answer++; 
    }
    return answer - 1;
}

console.log(solution(d, budget));