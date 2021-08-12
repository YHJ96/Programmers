//푸는중

const answers = [1,2,3,4,5];

function solution(answers) {
    let result = [];
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
    result = result.map((item, index) => {
        const max = Math.max(...result);
        if (item === max) {
            return index + 1;
        } else return 0;
    })
    result = result.filter((item) => item !== 0);
    return result;
}

console.log(solution(answers));