const answers = [1,2,3,4,5,1,2,3,4,5];

function solution(answers) {
    let result = [];
    const student = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    // 학생 점수 반복
    let answer = 0;

    for(let i = 0; i < student.length; i++) {
        for(let j = 0, k = 0; k < answers.length; j++,k++) {
            if(k % student[i].length === 0) {
                j = 0;
            }
            // 인덱스가 answers 만큼 돌아야함으로 학생들 점수 인덱스로 나머지가 0일경우 나누어 떨어짐으로 0 인덱스로 초기화
            if(student[i][j] === answers[k]) {
                answer += 1;
            }
        }
        result.push(answer);
        answer *= 0;
        // result에 값을 넣고 answer 초기화
    }

    if(result.every((item) => item === 0)) return [0];
    // 혹시나 모두 0점인 예외처리
    result = result.map((item, index) => {
        const max = Math.max(...result);
        if (item === max) {
            return index + 1;
        } else return -1;
    })

    result = result.filter((item) => item !== -1);
    // 예외처리 결과
    return result;
}

console.log(solution(answers));