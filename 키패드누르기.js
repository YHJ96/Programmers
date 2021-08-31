// 푸는중

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

function solution(numbers, hand) {
    let answer = [];
    const pad = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#'] ];
    const xyAxis = numbers.map((item) => {
        const yAxis = pad
        .map((yValue, index) => {
            if(yValue.includes(item)) return 4 - index;
            return -1;
        })
        .filter((item) => item !== -1);

        const xAxis = pad
        .filter((xArr) => xArr.includes(item))
        .map((xItem) => {
            return xItem.map((xValue, index) => {
                if(xValue === item) return index + 1;
                return -1;
            }).filter((item) => item !== -1)[0];
        })
        return [xAxis[0], yAxis[0]];
    })

    xyAxis.reduce((acc, curr) => {
        const left = Math.abs(acc[0][0] - curr[0]) + Math.abs(acc[0][1] - curr[1]);
        const right = Math.abs(acc[1][0] - curr[0]) + Math.abs(acc[1][1] - curr[1]);

        if(curr[0] === 1) {
            answer.push('L');
            return [curr, acc[1]];
        } else if(curr[0] === 3) {
            answer.push('R');
            return [acc[0], curr];
        } else {
            if(left < right) answer.push('L');
            if(left > right) answer.push('R');
            if(left === right) {
                if(hand === 'left') answer.push('L');
                else answer.push('R');
            }
            if(hand === 'right') {
                return left < right
                ? [curr, acc[1]]
                : [acc[0], curr]; 
            }
            return left <= right
            ? [curr, acc[1]]
            : [acc[0], curr];
        }
    })
    answer = answer.join('');
    return answer;
}

console.log(solution(numbers, hand));