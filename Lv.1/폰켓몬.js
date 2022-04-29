const nums = [1,1,3,3,1,1];

function solution(nums) {
    const newNums = nums.filter((item, index) => nums.indexOf(item) === index);
    const choice = nums.length / 2;
    const answer = newNums.length;
    if(choice <= answer) {
        return choice;
    } else return answer;
}

console.log(solution(nums));