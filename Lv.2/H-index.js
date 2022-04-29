const citations = [0,1,2];

function solution(citations) {
    const answer = [];
    // 내림차순 정렬을 한 뒤 맨 앞에 0을 추가시켜준다. (인덱스가 0번 부터 시작함으로 추가해서 순서를 맞춰준다.)
    citations.sort((a,b) => b - a).unshift(0);
    // 1부터 논문의 길이만큼 실행 시작
    for(let i = 1; i < citations.length; i++) {
        // 논문의 인용 횟수가 논문의 개수보다 길거나 같다면 answer에 push
        if(citations[i] >= i) answer.push(i);
    }
    // 정답 정제
    return answer.length;
}

console.log(solution(citations));