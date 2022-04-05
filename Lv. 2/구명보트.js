function solution(people, limit) {
    // 사람의 무게만큼 오름차순으로 정렬
    people.sort((a,b) => a-b);
    let answer = 0;
    while(people.length !== 0) {
        // 보트에는 2명의 사람을 최대로 태울수 있으므로 양끝값 비교 시작
        const sum = people[0] + people[people.length - 1];
        if(sum <= limit) {
            // 무게의 합이 한계치보다 작거나 같으면 양 종단끝의 인자들을 뺴줌
            answer += 1;
            people.shift();
            people.pop();
        } else {
            // 아닐경우 length 마지막값을 뺴주고 난뒤 다시 실행
            people.pop();
            answer += 1;
        }
    }
    return answer;
}

console.log(solution([70, 50, 80, 50], 100));