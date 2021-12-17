const numbers = [3, 30, 34, 5, 9];

function solution(numbers) {
    // 모든 배열의 인자가 0일 경우 체크
    const ck = numbers.every((item) => item === 0);
    // 얼리리턴
    if(ck) return '0';
    // 숫자를 자리수로 더하기 위해서 문자열로 치환
    numbers = numbers.map((item) => item.toString());
    // 정렬시작
    numbers.sort((a,b) => {
        const compareA = a+b;
        const compareB = b+a;
        // 문자 자리수를 바꿔서 비교하면서 큰수를 반환
        return compareB - compareA;
    });
    // 배열을 문자열로 출력
    return numbers.join('');
}

console.log(solution(numbers));