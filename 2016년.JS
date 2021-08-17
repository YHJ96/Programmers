// Date 함수 안쓰고 풀어보기

/*
2016년 윤년
1월 1일 금요일
5월 24일 화요일
a = month
b = day
*/

const a = 3;
const b = 3;

function solution(a, b) {
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysName = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    // 날짜 초기화 0번 인덱스가 금요일인 이유는 1월1일이 금요일
    let answer = '';
    // 출력할 날짜
    let count = 0;
    // 날짜 카운트
    for(let i = 0; i < monthDays.length; i++) {
        for(let j = 1; j <= monthDays[i]; j++) {
            count += 1;
            if(count === 7) {
                count *= 0;
            }
            // 카운트가 7이 되면 0으로 초기화
            if((a - 1) === i && b === j) {
                if(count === 0) return answer += daysName[6];
                // 인덱스가 0 이면 -1 하면 안됨 그래서 카운트가 0 일경우 인덱스 마지막자리 반환
                return answer += daysName[count - 1];
            }
        }
    }
    return answer;
}

console.log(solution(a,b));