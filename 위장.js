const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

function solution(clothes) {
    // 곱셈을 위해 answer를 1로 초기화
    let answer = 1;
    const clothesHash = new Map();
    for(let x of clothes) {
        // 옷의 종류를 추출
        const tag = x[1];
        // 옷의 종류가 없으면 키에 옷의 종류를 추가하고 값을 1로 추가 있을 경우 값에 1 더하기
        if(!clothesHash.has(tag)) clothesHash.set(tag, 1);
        else clothesHash.set(tag, clothesHash.get(tag) + 1);
    }
    // 정답에 옷의 개수에 1을 더해서 곱해주기 옷을 안입은 경우를 추가
    clothesHash.forEach((item) => answer *= item + 1);
    // 옷을 전부 안입었을 경우 예외처리
    return answer - 1;
}

console.log(solution(clothes));