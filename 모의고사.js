const answers = [1,3,2,4,2];

function solution(answers) {
    const result = [];
    const student = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let answer = 0;

    for(let i = 0; i < student.length; i++) {
        for(let j = 0; j < student[i].length; j++) {
            if(student[i][j] === answers[j]) {
                answer += 1;
            }
        }
        result.push(answer);
        answer *= 0;
    }
    return answers;
}

console.log(solution(answers));