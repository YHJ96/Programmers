const nums = [1, 2, 3, 4];

console.log(solution(nums));

function solution(nums) {
    let answer = 0;
    let result = [];
    // 완전탐색
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                result.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    // 최대범위 구간
    const max = Math.max(...result);
    // 에라토스테네스의 체 사용
    for (let k = 0; k <= result.length; k++) {
        for (let i = 2; i <= max; i++) {
            for (let j = i + i; j <= max; j += i) {
                if(result[k] % j === 0) result[k] = 0;
            }
        }
    }
    // 0이 아닌숫자 소수의 개수
    for(let x of result) {
        if(x !== 0) answer += 1;
    }
    return answer;
}