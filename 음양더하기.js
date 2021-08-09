const absolutes = [4,7,12];
const signs = [true, false, true];

function solution(absolutes, signs) {
    const newArr = absolutes.map((item, index) => {
        if(signs[index]) {
            return item;
        } else return -item;
    })
    const answer = newArr.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(absolutes, signs));