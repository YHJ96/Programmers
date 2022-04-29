const number = "987654321";
const k = 5;

function solution(number, k) {
    // 스택을 사용하기 위해 빈 배열 선언
    let answer = [];
    let index = 0;
    // 첫 번째 요소를 스택에 넣고 index 증가
    answer.push(number[index++]);
    // 스택의 길이가 number - k를 넘거나 index가 number 보다 크면 정지
    while(answer.length < number.length - k || index < number.length) {
        // k가 0이 아니거나 스택의 마지막 자리가 다음에 오는 number보다 작을 때 실행
        if(k !== 0 && answer[answer.length - 1] < number[index]) {
            // 현재 마지막 숫자를 빼고 k를 빼줌
            answer.pop();
            k--;
            // 다시 진행
            continue;
        }
        // number에 요소 넣기
        answer.push(number[index++]);
    }
    // k가 0이 아닐경우 Stack을 그대로 반환 하기 때문에 길이를 짤라줘야함
    if(k !== 0) {
        // k가 남아있는 만큼 요소 빼주기
        for(let i = 0; i < k; i++) {
            answer.pop();
        };
        // 정답 정제
        return answer.join('');
        // 정답 정제
    } else return answer.join('');
}

console.log(solution(number, k));