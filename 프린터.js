const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

function solution(priorities, location) {
    let answer = 0;
    while(true) {
        // 배열의 우선순위 최대값 구하기
        const max = Math.max(...priorities);
        // 배열의 0 인자가 우선도가 제일 높고 구하고자 하는 위치의 종이와 일치하면 함수종료
        if(priorities[0] === max && location === 0) {
            answer += 1;
            break;
            // 배열의 0 인자가 우선도가 제일 높지 않고 구하고자 하는 위치의 종이와 일치할 경우
        } else if(priorities[0] !== max && location === 0) {
            // 첫번 째 인자를 빼주고 다시 해당 배열뒤에 넣기
            const value = priorities.shift();
            priorities.push(value);
            // 위치 마지막 인덱스로 초기화
            location = priorities.length - 1;
            // 배열의 0인자가 우선도만 제일 높았을 경우
        } else if(priorities[0] === max) {
            // 첫번 쨰 인자를 빼주고 위치를 한칸씩 당겨줌
            priorities.shift();
            location -= 1;
            answer += 1;
            // 배열의 0인자가 우선도가 높지 않을 경우
        } else if(priorities[0] !== max) {
            // 배열의 인자를 빼주고 다시 해당 배열뒤에 넣고 위치 당겨줌
            const value = priorities.shift();
            priorities.push(value);
            location -= 1;
        }
    }
    return answer; 
}

console.log(solution(priorities, location));