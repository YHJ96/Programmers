// 푸는중

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

function solution(numbers, hand) {
    const pad = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#'] ];
    let left = pad[3][0];
    let right = pad[3][2];
}

console.log(solution(numbers, hand));