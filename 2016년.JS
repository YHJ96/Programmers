// 푸는중(Date 함수 안쓰고 풀어보기)

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
    let answer = '';
    let count = 0;
    for(let i = 0; i < monthDays.length; i++) {
        for(let j = 1; j <= monthDays[i]; j++) {
            console.log(monthDays[i]);
            count += 1;
            if(count === 7) {
                count *= 0;
            }
            console.log('k = ', count);
            if((a - 1) === i && b === j) {
                console.log('if count =', count, 'a =', a, 'i =', i);
                if(count === 0) return answer += daysName[6];
                return answer += daysName[count - 1];
            }
        }
    }
    return answer;
}

console.log(solution(a,b));