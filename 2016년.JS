// 푸는중(Date 함수 안쓰고 풀어보기)

/*
2016년 윤년
1월 1일 금요일
5월 24일 화요일
a = month
b = day
*/

const a = 4;
const b = 24;

function solution(a, b) {
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysName = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let answer = '';
    for(let i = 0; i < monthDays.length; i++) {
        for(let j = 1, k = 0; j <= monthDays[i]; j++,k++) {
            console.log(monthDays[i]);
            if(k === 7) {
                k *= 0;
            }
            console.log('k = ', k);
            if((a - 1) === i && b === j) {
                console.log('if k =', k, 'a =', a, 'i =', i);
                return answer += daysName[k];
            }
        }
    }
    return answer;
}

console.log(solution(a,b));