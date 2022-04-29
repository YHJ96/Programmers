const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
const n = 3;

function solution(n, words) {
    // 정답 초기화
    let answer = [0,0];
    // 처음 비교할 숫자 세팅
    let compare = words[0];
    // Set 함수 선언
    const mySet = new Set();
    // Set에 첫 번쨰 인자 넣기
    mySet.add(words[0]);
    // 1 ~ index 끝가지 순회
    for(let i = 1; i < words.length; i++) {
        // 중복된 단어거나 앞에 있는 글자와 뒤에 있는 글자가 끝말잇기가 성립이 안할 경우
        if(compare[compare.length - 1] !== words[i][0] || mySet.has(words[i])) {
            // 해당 번호 + 1
            const index = i + 1;
            // 탈락한 사람이 몇번 째 사람인지 예외처리
            let people = (index % n);
            // people이 0이면 끝까지 나머지가 없으므로 n
            if(people === 0) people = n;
            // 번호에서 n명의 사람을 나눈뒤 반올림
            let count = Math.ceil(index / n);
            // 각각 정답 정제
            answer[0] = people;
            answer[1] = count;
            break;
        } else {
            // Set에 넣고 compare를 바꾸기
            mySet.add(words[i]);
            compare = words[i];
        }
    }
    return answer;
}

console.log(solution(n, words));