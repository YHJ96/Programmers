const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;

function solution(id_list, report, k) {
    const answer = Array.from({ length: id_list.length }, () => 0);
    const count = new Map();
    const obj = {}
    // 중복 제거를 위해 id만큼 요소를 반복하며 해당 요소들을 key로 갖는 자료구조 Set 선언
    for(let name of id_list) obj[name] = new Set();
    // 해당 신고 내역의 요소만큼 반복
    for(let item of report) {
        // 구조분해할당을 이용해서 key와 value를 나눠줌
        const [key, value] = item.split(" ");
        // 해당 요소 Set에 입력
        obj[key].add(value);
    }
    // obj의 요소만큼 순회하기 위한 for - in문
    for(let index in obj) {
        // 해당 신고내역을 산출해서 총 신고내역을 알기위한 반복문
        obj[index].forEach((target) => {
            if(!count.has(target)) count.set(target, 1);
            else count.set(target, count.get(target) + 1);
        });
    }
    // id_list 요소만큼 순회 (answer 정답 정제를 위해서 id_list로 순회)
    id_list.forEach((id, index) => {
        const target = obj[id];
        // 헤딩 아이디가 신고한 횟수가 k이상이라면 answer[index]를 증가
        target.forEach((item) => {
            if(count.get(item) >= k) answer[index]++;
        });
    });
    return answer;
}

console.log(solution(id_list, report, k));