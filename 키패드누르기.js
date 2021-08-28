// 푸는중

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

function solution(numbers, hand) {
    const pad = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#'] ];
    const XY = numbers.map((item) => {
        const X = pad.filter((value) => value.includes(item))
        .map((xArr) => xArr.map((xitem, index) => {
            if(xitem === item) return index + 1;
            return -1; 
        }))
        .filter((item) => item !== -1)[0];
        return X; 
    })
    return XY;
}

console.log(solution(numbers, hand));