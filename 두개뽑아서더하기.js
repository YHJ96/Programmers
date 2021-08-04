const numbers = [2,1,3,4,1];

function solution(numbers) {
    const newNumbers = numbers.sort((a,b) => a-b);
    let answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length && j !== i; j++ ) {
            answer.push(newNumbers[i] + newNumbers[j]);
        }
    }
    answer = answer.filter((item, index) => answer.indexOf(item) === index).sort((a,b)=> a-b);
    return answer;
}

console.log(solution(numbers));