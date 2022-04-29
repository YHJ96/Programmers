const numbers = [1,2,3,4,6,7,8,0];

console.log(solution(numbers));

function solution(numbers) {
    // 범위가 0 ~ 9 까지 중복되지않은 숫자들중에 없는 숫자를 찾는것이므로 비교대상 배열 지정
    const compare = [0,1,2,3,4,5,6,7,8,9];
    // compare안에 있는 숫자중에 numbers안에 있는 숫자들을 없애주기
    let answer = compare.filter((item) => !numbers.includes(item));
    // answer안에 남은 숫자를 더해주기
    answer = answer.reduce((acc, curr) => acc + curr);
    return answer;
}