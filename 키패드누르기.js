// 푸는중

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

function solution(numbers, hand) {
    const pad = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#'] ];
    const xyAxis = numbers.map((item) => {
        const yAxis = pad
        .map((yValue, index) => {
            if(yValue.includes(item)) return 4 - index;
            return -1;
        })
        .filter((item) => item !== -1);
        return yAxis;
    })
    return xyAxis;
}

console.log(solution(numbers, hand));