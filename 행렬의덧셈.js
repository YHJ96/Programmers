const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];

function solution(arr1, arr2) {
    const answer = [];
    for(let i = 0; i < arr1.length; i++) {
        answer.push([]);
    }
    for(let j = 0; j < arr1.length; j++) {
        for(let k = 0; k < arr1[j].length; k++) {
            answer[j][k] = arr1[j][k] + arr2[j][k];
        }
    }
    return answer;
}

console.log(solution(arr1, arr2));