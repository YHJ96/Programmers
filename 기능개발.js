const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));

function solution(progresses, speeds) {
    let answer = [];

    while(progresses.length > 0) {
        for(let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        if(progresses[0] >= 100) {
            console.log(progresses);
            let count = 0;
            while(true) {
                if(progresses.length === 0) break;
                if(progresses[0] < 100) {
                    break;
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