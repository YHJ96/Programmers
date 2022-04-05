const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));

function solution(progresses, speeds) {
    let answer = [];
    // profresses가 0이면 반복문 정지
    while(progresses.length > 0) {
        // 인자값끼리 더하기
        for(let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        // 첫번째 인자값이 100이면 실행(Queue이기 때문에 계속 shift연산이 들어가서 index 0번째가 계속 수정)
        if(progresses[0] >= 100) {
            console.log(progresses);
            let count = 0;
            while(true) {
                // 배열인자를 다 제거하면 break
                if(progresses.length === 0) break;
                // 인자가 100미만 이면 break
                if(progresses[0] < 100) {
                    break;
                    // 100이상이면 count에 1을 올려주고 앞에요소 제거
                } else {
                    count++;
                    progresses.shift();
                    speeds.shift();
                }
            }
            answer.push(count);
        }
    }
    return answer;
}