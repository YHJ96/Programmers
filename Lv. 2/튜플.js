const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";

function solution(s) {
    // 중복제거를 위한 Set 정의
    let answer = new Set();
    // {}를 []로 치환
    s = s.split("{").join("[");
    s = s.split("}").join("]");
    // JSON형식에서 배열로 치환
    s = JSON.parse(s);
    // length의 길이로 오름차순 정렬
    s.sort((a,b) => a.length - b.length);
    // 배열의 요소만큼 돌면서 Set으로 중복제거
    for(let item of s) {
        item.forEach((value) => answer.add(value));
    }
    // 정답 정제
    return [...answer];
}

console.log(solution(s));