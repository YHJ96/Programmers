const numbers = [1,2,3,4,6,7,8,0];

console.log(solution(numbers));

function solution(numbers) {
    const compare = [0,1,2,3,4,5,6,7,8,9];
    let answer = compare.filter((item) => !numbers.includes(item));
    answer = answer.reduce((acc, curr) => acc + curr);
    return answer;
}