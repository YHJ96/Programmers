const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++) {
        const newArr = array.slice(array[i][0], array[i][1]);
        answer.push(newArr);
    }
    return answer;
}