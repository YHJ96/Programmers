const numbers = "011";

function solution(numbers) {
    let answer = [];
    // 중복제거를 위한 Set함수 초기화
    const num = new Set();
    // 뽑는 개수에 따라서 진행하기 위한 반복문
    for(let i = 1; i <= numbers.length; i++) {
        // 요소를 담는 배열 초기화
        const tmp = Array.from({ length: i }, () => 0);
        // 요소를 방문확인 배열 초기화
        const ck = Array.from({ length: numbers.length }, () => 0);
        // 깊이 우선 탐색 실행
        function DFS(L) {
            // i만큼의 레벨로 가면 출력
            if(L === i) {
                // 숫자형으로 치환
                const item = Number(tmp.join(''));
                num.add(item);
            } else {
                // 백트래킹 시작
                for(let i = 0; i < numbers.length; i++) {
                    // 방문을 안한 경우
                    if(ck[i] === 0) {
                        // 방문 처리
                        ck[i] = 1;
                        // 배열에 요소를 담기
                        tmp[L] = numbers[i];
                        // 다음 레벨 진행
                        DFS(L+1);
                        // 모든 레벨이 진행이 완료하고 방문처리 해제
                        ck[i] = 0;
                    }
                }
            }
        }
        DFS(0);
    }
    // 소수찾기
    num.forEach((item) => {
        // 소수인지 확인하는 flag 변수 선언
        let flag = 1;
        // 2 ~ 해당 숫자 - 1 까지 반복문 실행
        for(let i = 2; i < item; i++) {
            // 소수가 아닐 경우 flag 0으로 바꾼뒤 반복문 탈출
            if(item % i === 0) {
                flag = 0;
                break;
            } 
        }
        // flag가 1이면 answer에 item push
        if(flag) answer.push(item);
    });
    // 0과 1은 소수가 아니므로 예외처리
    answer = answer.filter((item) => (item !== 0) && (item !== 1));
    // 정답 정제
    return answer.length;
}

console.log(solution(numbers));