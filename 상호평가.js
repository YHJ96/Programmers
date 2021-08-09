//푸는중

const scores = [[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]];

function solution(scores) {
    let answer = [];
    let newArr = [];
    for(let a = 0; a < scores.length; a++) {
        newArr.push([]);
    }
    for(let b = 0; b < scores.length; b++) {
        for(let c = 0; c < scores.length; c++) {
            newArr[b][c] = scores[c][b];
        }
    }
    for(let d = 0; d < scores.length; d++) {
        if(scores[d][d] === Math.max(...newArr[d]) || scores[d][d] === Math.min(...newArr[d])) {
           const add = newArr[d].reduce((acc, curr) => acc + curr) - scores[d][d];
           const avg = add / (scores[d].length - 1)
           answer.push(avg);
        } else {
            const add = newArr[d].reduce((acc, curr) => acc + curr);
            const avg = add / scores[d].length;
            answer.push(avg);
        }
    }
    return answer;
}

console.log(solution(scores));