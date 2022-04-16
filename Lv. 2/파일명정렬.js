const files = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"];

function solution(files) {
    let answer = [];
    let result = [];
    // 숫자를 비교할 배열 선언
    const number = ['0','1','2','3','4','5','6','7','8','9'];
    // files의 각각의 요소를 모두 소문자로 만든뒤 result에 넣기
    files.forEach((item) => result.push(item.toLowerCase()));
    // result의 요소만큼 순회 시작
    result = result.map((item, index) => {
        let string = [];
        let compare = [];
        let flag = false;
        let idx = 0;
        // 자료구조 Stack을 사용해서 단어를 나누기
        while(idx !== item.length + 1) {
            // idx++를 통해서 반복문 계속 실행
            const word = item[idx++];
            // 처음 숫자를 만난 경우
            if(number.includes(word) && flag === false) {
                // 문자를 string에 넣기
                string.push(compare.join(''));
                // 배열 초기화
                compare = [];
                // flag를 true로 재할당
                flag = true;
                // 처음 숫자를 만난뒤 숫자가 끝났을 경우
            } else if(number.includes(word) === false && flag === true) {
                // 숫자를 string에 넣기
                string.push(compare.join(''));
                compare = [];
            }
            compare.push(word);
        }
        // 문자를 정제 마지막 tail 부분은 스프레드 연산자를 이용해서 합쳐줌
        const [head, num, ...tail] = string;
        // 객체 정제
        return { head: head, num: Number(num), tail: tail.join(''), index: index };
    });
    // 정렬 시작
    result.sort((a,b) => {
        // head가 사전순이면 num의 크기가 작은것 부터 정렬
        if(a.head === b.head) return a.num - b.num;
        // head가 사전순으로 먼저 정렬
        else return a.head.localeCompare(b.head);
    });
    // 정렬이 완료된 result의 요소만큼 순회
    result.forEach((item) => {
        // 원본의 텍스트를 가져옴
        const target = files[item.index];
        // answer에 push
        answer.push(target);
    });
    return answer;
}

console.log(solution(files));